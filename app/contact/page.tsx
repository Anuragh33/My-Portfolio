import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { siteMeta } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact | Anuragh Ragidimilli",
  description: "Reach out for recruiting, client work, or collaboration on full-stack AI products.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="content-grid section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about a role, a product, or a collaboration."
          description="Whether you are hiring, building, or exploring an idea that needs both systems depth and product care, I’m happy to connect."
        />
      </Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <div className="glass-panel p-6">
            <p className="text-3xl font-extrabold text-white">{siteMeta.name}</p>
            <p className="mt-4 text-base leading-8 text-slate-300">{siteMeta.subhero}</p>
            <p className="mt-4 text-sm text-accent">{siteMeta.availability}</p>
            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <p>
                <a href={`mailto:${siteMeta.email}`} className="text-slate-200 transition hover:text-accent">
                  {siteMeta.email}
                </a>
              </p>
            </div>
            <SocialLinks className="mt-6" showEmail />
            <a
              href={siteMeta.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm text-slate-200 underline decoration-white/20 underline-offset-4 transition hover:text-accent"
            >
              View resume
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
