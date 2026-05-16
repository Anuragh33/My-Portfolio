import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getProject, projects } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
    description: project.summary
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="content-grid section-space">
      <Reveal>
        <div className={`glass-panel-strong bg-gradient-to-br ${project.accent} p-8`}>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-slate-300">{project.status}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">{project.tagline}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="liquid-glass rounded-[1.4rem] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">Role</p>
              <p className="mt-2 text-sm text-white">{project.role}</p>
            </div>
            <div className="liquid-glass rounded-[1.4rem] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">Timeline</p>
              <p className="mt-2 text-sm text-white">{project.timeline}</p>
            </div>
            <div className="liquid-glass rounded-[1.4rem] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">Stack</p>
              <p className="mt-2 text-sm text-white">{project.stack.slice(0, 4).join(" · ")}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="space-y-10">
            <section className="glass-panel p-6">
              <SectionHeading
                eyebrow="Project summary"
                title="What this project set out to do."
                description={project.summary}
              />
            </section>

            <section className="glass-panel p-6 prose-invert">
              <h2 className="font-display text-3xl text-white">Problem / opportunity</h2>
              <p className="mt-5">{project.problem}</p>
              <h2 className="mt-8 font-display text-3xl text-white">What I built</h2>
              <p className="mt-5">{project.solution}</p>
              <h2 className="mt-8 font-display text-3xl text-white">Core experience</h2>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate-300">
                {project.coreExperience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="glass-panel p-6 prose-invert">
              <h2 className="font-display text-3xl text-white">Architecture and stack</h2>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate-300">
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 className="mt-8 font-display text-3xl text-white">AI support and systems layer</h2>
              <p className="mt-5">{project.aiInvolvement}</p>
            </section>

            <section className="glass-panel p-6 prose-invert">
              <h2 className="font-display text-3xl text-white">Challenges and decisions</h2>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate-300">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 className="mt-8 font-display text-3xl text-white">Outcome / current status</h2>
              <p className="mt-5">{project.outcome}</p>
            </section>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-8">
            <section className="glass-panel p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-pulse">Why this matters</p>
              <p className="mt-5 text-base leading-8 text-slate-300">{project.whyItMatters}</p>
            </section>

            <section className="glass-panel p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-pulse">Reflection</p>
              <p className="mt-5 text-base leading-8 text-slate-300">{project.reflection}</p>
            </section>

            <section className="glass-panel p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-pulse">Capabilities</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.capabilities.map((capability) => (
                  <span key={capability} className="liquid-glass rounded-full px-3 py-1 text-sm text-slate-200">
                    {capability}
                  </span>
                ))}
              </div>
            </section>

            <section className="glass-panel p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-pulse">Links</p>
              <div className="mt-5 space-y-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="liquid-glass block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:text-[#5ed29c]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
