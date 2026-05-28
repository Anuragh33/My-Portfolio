import { Resend } from "resend";
import { z } from "zod";

import { siteMeta } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please provide a valid email."),
  message: z.string().min(20, "A little more detail would help."),
  context: z.enum(["recruiting", "client-work", "collaboration"]),
  website: z.string().optional()
});

const contextLabels = {
  recruiting: "Recruiting",
  "client-work": "Client work",
  collaboration: "Collaboration"
} as const;

const DEFAULT_FROM = "onboarding@resend.dev";

/** Resend requires a verified sender — ignore personal inboxes often set by mistake in Vercel. */
function resolveFromEmail(): string {
  const custom = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!custom) {
    return DEFAULT_FROM;
  }
  if (custom.includes("<") && custom.includes("@")) {
    return custom;
  }
  if (custom.endsWith("@resend.dev")) {
    return `Anuragh Portfolio <${custom}>`;
  }
  const personalDomains = ["@icloud.com", "@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com"];
  if (personalDomains.some((domain) => custom.toLowerCase().includes(domain))) {
    return DEFAULT_FROM;
  }
  return `Anuragh Portfolio <${custom}>`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      {
        message: parsed.error.issues[0]?.message ?? "Please check the form and try again."
      },
      { status: 400 }
    );
  }

  const { name, email, message, context, website } = parsed.data;

  if (website && website.trim().length > 0) {
    return Response.json({ message: "Thanks for reaching out." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteMeta.email;
  const fromEmail = resolveFromEmail();

  if (!apiKey) {
    return Response.json(
      {
        message:
          "Thanks for reaching out. Email delivery is not configured yet—please use the direct email link on this page."
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const contextLabel = contextLabels[context];

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `[Portfolio · ${contextLabel}] Message from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Context: ${contextLabel}`,
      "",
      message
    ].join("\n")
  });

  if (error) {
    console.error("Resend error:", error);
    const resendMessage = typeof error.message === "string" ? error.message : "";
    const hint = /domain|verified|from/i.test(resendMessage)
      ? " Use sender onboarding@resend.dev (verified in Resend)."
      : /only send|your own email|testing/i.test(resendMessage)
        ? " On Resend's test plan, deliveries may only go to the email on your Resend account—set CONTACT_TO_EMAIL to that address in Vercel."
        : "";
    return Response.json(
      {
        message: `Something went wrong sending your message. Please try email directly.${hint}`,
        details: resendMessage || undefined
      },
      { status: 500 }
    );
  }

  return Response.json({
    message: `Thanks ${name}—your ${contextLabel.toLowerCase()} note was sent. I'll reply soon.`
  });
}
