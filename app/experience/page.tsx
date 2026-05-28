import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TerminalFrame } from "@/components/terminal-frame";
import { careerBridge, education, experiences } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experience | Anuragh Ragidimilli",
  description:
    "Enterprise AI at UnitedHealth Group, cloud and full-stack foundations at Wipro, and product-focused independent work.",
  path: "/experience"
});

export default function ExperiencePage() {
  return (
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> cat ~/cv/experience.txt
      </p>
      <div className="mt-4">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Enterprise AI rigor, cloud foundations, and product delivery."
            description="The roles that shaped how I build reliable AI workflows, backend systems, cloud infrastructure, and modern frontend experiences."
          />
        </Reveal>
      </div>

      <div className="mt-8 space-y-5">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.role}`} delay={index * 0.06}>
            <TerminalFrame
              title={`role_${experience.company.toLowerCase().replace(/\s+/g, "_")}.txt`}
              status={index === 0 ? "live" : "shipped"}
              statusLabel={index === 0 ? "CURRENT" : "PAST"}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">BEGIN ROLE</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h2 className="font-serif text-3xl text-fg sm:text-4xl">
                    {experience.role}
                    <span className="block font-mono text-base text-fg-muted">@ {experience.company}</span>
                  </h2>
                  <p className="mt-3 font-mono text-[12px] text-fg-muted">{experience.timeline}</p>
                  <p className="mt-5 font-mono text-[13px] leading-7 text-fg-muted">
                    <span className="text-fg-dim">// </span>
                    {experience.summary}
                  </p>
                </div>

                <ul className="space-y-3 font-mono text-[13px] leading-7 text-fg-muted">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="border border-line p-3">
                      <span className="text-fg-dim">- </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">END ROLE</p>
            </TerminalFrame>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <TerminalFrame title="bridge.txt">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// career bridge</p>
          <p className="mt-3 font-mono text-[13px] leading-7 text-fg-muted">{careerBridge}</p>
        </TerminalFrame>
      </Reveal>

      <Reveal className="mt-6">
        <TerminalFrame title="education.txt">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// education</p>
          <div className="mt-4 grid gap-4">
            {education.map((entry) => (
              <div key={`${entry.school}-${entry.degree}`} className="border border-line p-4 font-mono text-[13px] leading-7">
                <p className="text-fg">{entry.degree}</p>
                <p className="text-fg-muted">{entry.school}</p>
                <p className="text-fg-dim">{entry.timeline}</p>
                <p className="mt-2 text-fg-muted">{entry.detail}</p>
              </div>
            ))}
          </div>
        </TerminalFrame>
      </Reveal>

    </div>
  );
}
