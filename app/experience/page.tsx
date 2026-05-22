import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { careerBridge, experiences, proofPoints } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experience | Anuragh Ragidimilli",
  description:
    "Enterprise AI at UnitedHealth Group, cloud and full-stack foundations at Wipro, and product-focused independent work.",
  path: "/experience"
});

export default function ExperiencePage() {
  return (
    <div className="content-grid section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise AI rigor, cloud foundations, and product delivery."
          description="A focused view of the roles that shaped how I build reliable AI workflows, backend systems, cloud infrastructure, and modern frontend experiences."
        />
      </Reveal>

      <div className="mt-10 grid gap-6">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.role}`} delay={index * 0.06}>
            <article className="glass-panel-strong p-6 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                    {index === 0 ? "Current role" : "Previous role"}
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {experience.role}
                    <span className="block text-slate-300">@ {experience.company}</span>
                  </h2>
                  <p className="mt-4 text-sm text-slate-400">{experience.timeline}</p>
                  <p className="mt-6 text-base leading-8 text-slate-300">{experience.summary}</p>
                </div>

                <div className="grid gap-4">
                  {experience.highlights.map((highlight) => (
                    <div key={highlight} className="liquid-glass rounded-[1.4rem] p-5">
                      <p className="text-base leading-7 text-slate-200">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <section className="glass-panel p-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Career bridge</p>
          <p className="mt-4 text-base leading-8 text-slate-300">{careerBridge}</p>
        </section>
      </Reveal>

      <Reveal className="mt-10">
        <section className="glass-panel p-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Signals</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point} className="liquid-glass rounded-[1.4rem] p-5">
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
