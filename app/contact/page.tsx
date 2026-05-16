import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteMeta } from "@/lib/data";

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
            <p className="font-['Inter'] text-3xl font-extrabold text-white">{siteMeta.name}</p>
            <p className="mt-4 text-base leading-8 text-slate-300">{siteMeta.subhero}</p>
            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <p>{siteMeta.location}</p>
              <p>{siteMeta.email}</p>
              <p>GitHub: Anuragh33</p>
              <a
                href="/Anuragh_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-slate-200 underline decoration-white/20 underline-offset-4"
              >
                View resume
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
