import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectImpact } from "@/components/project-impact";
import { Reveal } from "@/components/reveal";
import { TerminalFrame, type FrameStatus } from "@/components/terminal-frame";
import { getProject, projects } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function deriveStatus(status: string): FrameStatus {
  const lower = status.toLowerCase();
  if (lower.includes("in progress")) return "wip";
  if (lower.includes("shipped")) return "shipped";
  return "live";
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Anuragh Ragidimilli`,
    description: project.summary,
    openGraph: {
      images: [{ url: project.heroImage, alt: `${project.title} preview` }]
    }
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const frameStatus = deriveStatus(project.status);

  return (
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> cat ~/work/{project.slug}.case
      </p>

      <Reveal className="mt-4">
        <TerminalFrame title={`~/work/${project.slug}.case`} status={frameStatus}>
          <div className="relative mb-6 aspect-video overflow-hidden border border-line">
            <Image
              src={project.heroImage}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <h1 className="font-serif text-5xl text-fg sm:text-6xl">
            {project.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.22em] text-fg-muted">{project.status}</p>
          <p className="mt-6 max-w-3xl font-mono text-[14px] leading-7 text-fg">
            <span className="text-fg-dim">// </span>
            {project.tagline}
          </p>

          <div className="mt-6 grid gap-3 font-mono text-[12px] text-fg-muted md:grid-cols-3">
            <div>
              <span className="text-fg-dim">role</span> <span className="text-fg-dim">=</span>{" "}
              <span className="text-accent">&quot;{project.role}&quot;</span>
            </div>
            <div>
              <span className="text-fg-dim">timeline</span> <span className="text-fg-dim">=</span>{" "}
              <span className="text-accent">&quot;{project.timeline}&quot;</span>
            </div>
            <div>
              <span className="text-fg-dim">stack</span> <span className="text-fg-dim">=</span>{" "}
              <span className="text-accent">&quot;{project.stack.slice(0, 4).join(" / ")}&quot;</span>
            </div>
          </div>
        </TerminalFrame>
      </Reveal>

      <ProjectImpact project={project} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <TerminalFrame title="summary.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// summary</p>
              <p className="mt-3 font-mono text-[14px] leading-7 text-fg">{project.summary}</p>
            </TerminalFrame>

            <TerminalFrame title="problem.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// problem</p>
              <p className="mt-3 font-mono text-[14px] leading-7 text-fg">{project.problem}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// what I built</p>
              <p className="mt-3 font-mono text-[14px] leading-7 text-fg">{project.solution}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// core experience</p>
              <ul className="mt-3 space-y-2 font-mono text-[13px] leading-7 text-fg-muted">
                {project.coreExperience.map((item) => (
                  <li key={item}>
                    <span className="text-fg-dim">- </span>
                    {item}
                  </li>
                ))}
              </ul>
            </TerminalFrame>

            <TerminalFrame title="architecture.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// architecture</p>
              <ul className="mt-3 space-y-2 font-mono text-[13px] leading-7 text-fg-muted">
                {project.architecture.map((item) => (
                  <li key={item}>
                    <span className="text-fg-dim">- </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// ai involvement</p>
              <p className="mt-3 font-mono text-[14px] leading-7 text-fg">{project.aiInvolvement}</p>
            </TerminalFrame>

            <TerminalFrame title="challenges.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// challenges</p>
              <ul className="mt-3 space-y-2 font-mono text-[13px] leading-7 text-fg-muted">
                {project.challenges.map((item) => (
                  <li key={item}>
                    <span className="text-fg-dim">- </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// outcome</p>
              <p className="mt-3 font-mono text-[14px] leading-7 text-fg">{project.outcome}</p>
            </TerminalFrame>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-6">
            <TerminalFrame title="why.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// why this matters</p>
              <p className="mt-3 font-mono text-[13px] leading-7 text-fg">{project.whyItMatters}</p>
            </TerminalFrame>

            <TerminalFrame title="reflection.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// reflection</p>
              <p className="mt-3 font-mono text-[13px] leading-7 text-fg">{project.reflection}</p>
            </TerminalFrame>

            <TerminalFrame title="capabilities.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// capabilities</p>
              <div className="mt-3 flex flex-wrap gap-1 font-mono text-[11px] text-fg-muted">
                {project.capabilities.map((capability) => (
                  <span key={capability} className="border border-line px-2 py-0.5">
                    {capability}
                  </span>
                ))}
              </div>
            </TerminalFrame>

            <TerminalFrame title="links.md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// links</p>
              <ul className="mt-3 space-y-2 font-mono text-[13px] text-fg-muted">
                {project.links.map((link) => (
                  <li key={link.label}>
                    <span className="text-fg-dim">$ </span>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg transition hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-fg transition hover:text-accent">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </TerminalFrame>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
