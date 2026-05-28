import type { Project } from "@/lib/data";

import { TerminalFrame } from "@/components/terminal-frame";

type ProjectImpactProps = {
  project: Project;
};

export function ProjectImpact({ project }: ProjectImpactProps) {
  const demo = project.links.find((link) => link.kind === "demo");

  return (
    <TerminalFrame title="impact.md" className="mt-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// Impact at a glance</p>
      <ul className="mt-4 space-y-2 font-mono text-[13px] leading-6 text-fg-muted">
        {project.impactBullets.map((bullet) => (
          <li key={bullet}>
            <span className="text-fg-dim">- </span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-1 font-mono text-[11px] text-fg-muted">
        {project.stack.map((tech) => (
          <span key={tech} className="border border-line px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2 font-mono text-[12px]">
        {demo ? (
          <a
            href={demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent bg-accent/10 px-4 py-2 uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-onAccent"
          >
            $ open demo
          </a>
        ) : null}
      </div>
    </TerminalFrame>
  );
}
