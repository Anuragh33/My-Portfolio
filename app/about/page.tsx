import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TerminalFrame } from "@/components/terminal-frame";
import { careerBridge } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

const principles = [
  "Build from real user friction, not novelty for novelty's sake.",
  "Use AI where it adds leverage, not where it adds fog.",
  "Make systems understandable enough that trust can grow around them.",
  "Design interfaces that feel authored, responsive, and clear under pressure."
];

export const metadata = createPageMetadata({
  title: "About | Anuragh Ragidimilli",
  description:
    "Full-stack AI developer combining enterprise systems rigor with independent product building and interface craft.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> cat ~/about/whoami.txt
      </p>
      <div className="mt-4">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="I build products where engineering depth is visible in the experience."
            description="My background spans enterprise-grade systems, agentic AI workflows, and independent product building."
          />
        </Reveal>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <TerminalFrame title="whoami.txt">
            <div className="space-y-5 font-mono text-[13px] leading-7 text-fg-muted">
              <p>
                Professionally, I have worked on enterprise software and agentic AI systems where reliability, privacy, and workflow clarity matter. That taught me how to think about scale, architecture, and product constraints in serious environments.
              </p>
              <p>
                Outside that context, I build products that let me move faster and think more openly. That side of my work is where I push harder on interaction design, product personality, and sharper user experience decisions.
              </p>
              <p>{careerBridge}</p>
              <p>
                Together, those sides shape how I operate: grounded enough to ship real systems, curious enough to keep making them feel new.
              </p>
            </div>
          </TerminalFrame>
        </Reveal>
        <Reveal delay={0.08}>
          <TerminalFrame title="principles.txt">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// operating principles</p>
            <ul className="mt-4 space-y-3 font-mono text-[13px] leading-7 text-fg-muted">
              {principles.map((principle) => (
                <li key={principle}>
                  <span className="text-fg-dim">- </span>
                  {principle}
                </li>
              ))}
            </ul>
          </TerminalFrame>
        </Reveal>
      </div>
    </div>
  );
}
