import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { TerminalFrame } from "@/components/terminal-frame";
import { siteMeta } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact | Anuragh Ragidimilli",
  description: "Reach out for recruiting, client work, or collaboration on full-stack AI products.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> mail anuragh@portfolio
      </p>
      <div className="mt-4">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about a role, a product, or a collaboration."
            description="Recruiting, building, or exploring an idea that needs systems depth and product care — happy to connect."
          />
        </Reveal>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <TerminalFrame title="contact.card">
            <p className="font-serif text-3xl text-fg">{siteMeta.name}</p>
            <p className="mt-3 font-mono text-[13px] leading-7 text-fg-muted">
              <span className="text-fg-dim">// </span>
              {siteMeta.subhero}
            </p>
            <p className="mt-3 font-mono text-[12px] text-accent">{siteMeta.availability}</p>
            <p className="mt-5 font-mono text-[13px] text-fg-muted">
              <a href={`mailto:${siteMeta.email}`} className="text-fg transition hover:text-accent">
                {siteMeta.email}
              </a>
            </p>
            <SocialLinks className="mt-6" showEmail />
            <a
              href={siteMeta.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition hover:text-accent"
            >
              $ open resume.pdf
            </a>
          </TerminalFrame>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
