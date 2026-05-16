import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please provide a valid email."),
  message: z.string().min(20, "A little more detail would help."),
  context: z.enum(["recruiting", "client-work", "collaboration"])
});

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

  const { name, context } = parsed.data;

  return Response.json({
    message: `Thanks ${name} - your ${context.replace("-", " ")} note is ready. Email delivery can be connected with a provider key later, and direct email is available right now.`
  });
}
