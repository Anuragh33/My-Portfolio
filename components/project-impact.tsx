import type { Project } from "@/lib/data";

type ProjectImpactProps = {
  project: Project;
};

export function ProjectImpact({ project }: ProjectImpactProps) {
  const demoLink = project.links.find((link) => link.kind === "demo");
  const repoLink = project.links.find((link) => link.kind === "repo");
  const detailsLink = `/work/${project.slug}`;

  return (
    <section className="glass-panel mt-8 p-6 lg:p-8" aria-label="Impact at a glance">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Impact at a glance</p>
      <ul className="mt-5 space-y-3 text-base leading-7 text-slate-200">
        {project.impactBullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="liquid-glass rounded-full px-3 py-1 text-xs text-slate-200">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {demoLink ? (
          <a
            href={demoLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-onAccent transition hover:scale-[1.03]"
          >
            Live demo
          </a>
        ) : null}
        {repoLink ? (
          <a
            href={repoLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
          >
            GitHub
          </a>
        ) : null}
        <a
          href={detailsLink}
          className="liquid-glass rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
        >
          Project details
        </a>
      </div>
    </section>
  );
}
