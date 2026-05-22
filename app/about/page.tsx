import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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
    <div className="content-grid section-space">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="I like building products where engineering depth is visible in the experience."
          description="My background spans enterprise-grade systems, agentic AI workflows, and independent product building. The overlap between those worlds is where I do my best work."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass-panel p-6">
            <div className="space-y-5 text-base leading-8 text-slate-300">
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
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass-panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Operating principles</p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-slate-300">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
