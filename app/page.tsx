import Link from "next/link";

import { AnimatedCounter } from "@/components/animated-counter";
import { BuildLogCard } from "@/components/build-log-card";
import { CapabilityGrid } from "@/components/capability-grid";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { RecruiterStrip } from "@/components/recruiter-strip";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TerminalFrame } from "@/components/terminal-frame";
import {
  buildLog,
  careerBridge,
  experiences,
  getFeaturedProjects,
  outcomes,
  siteMeta
} from "@/lib/data";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="content-grid pt-6">
      <Hero />
      <RecruiterStrip />

      <section className="mt-12" id="projects">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Four projects that show how I think, build, and scale."
            description="A macOS meeting assistant, an AI job search platform, a language-learning app, and an AI collaboration starter."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:auto-rows-fr lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <Link
            href="/work"
            className="inline-flex font-mono text-[12px] uppercase tracking-[0.18em] text-fg-muted underline decoration-line-strong underline-offset-4 transition hover:text-accent"
          >
            $ ls ~/work/
          </Link>
        </Reveal>
      </section>

      <section className="mt-14" id="experience">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Enterprise AI rigor on one side, independent product energy on the other."
            description="Current and past work shaped how I build across AI systems, product engineering, cloud infrastructure, and frontend delivery."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {experiences.map((track, index) => (
            <Reveal key={track.role} delay={index * 0.06} className="h-full">
              <TerminalFrame
                title={`role_${track.company.toLowerCase().replace(/\s+/g, "_")}.txt`}
                status={index === 0 ? "live" : "shipped"}
                statusLabel={index === 0 ? "CURRENT" : "PAST"}
                className="h-full"
                bodyClassName="h-full"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">{track.timeline}</p>
                <h2 className="mt-3 font-serif text-3xl text-fg">
                  {track.role}
                  <span className="block font-mono text-base text-fg-muted">@ {track.company}</span>
                </h2>
                <p className="mt-4 font-mono text-[13px] leading-7 text-fg-muted">
                  <span className="text-fg-dim">// </span>
                  {track.summary}
                </p>
                <ul className="mt-5 space-y-3 font-mono text-[13px] leading-7 text-fg-muted">
                  {track.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="text-fg-dim">- </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </TerminalFrame>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5">
          <p className="font-mono text-[12px] leading-7 text-fg-muted">
            <span className="text-fg-dim">// </span>
            {careerBridge}
          </p>
        </Reveal>
        <Reveal className="mt-5">
          <Link
            href="/experience"
            className="inline-flex font-mono text-[12px] uppercase tracking-[0.18em] text-fg-muted underline decoration-line-strong underline-offset-4 transition hover:text-accent"
          >
            $ cat ~/cv/experience.txt
          </Link>
        </Reveal>
      </section>

      <section className="mt-14">
        <Reveal>
          <TerminalFrame title="proof.txt">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// proof</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {outcomes.map(({ value, label }) => (
                <div key={label} className="border border-line p-4">
                  <AnimatedCounter value={value} />
                  <p className="mt-3 font-mono text-[12px] leading-6 text-fg-muted">
                    <span className="text-fg-dim">// </span>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </TerminalFrame>
        </Reveal>
      </section>

      <section className="mt-14">
        <Reveal>
          <SectionHeading
            eyebrow="What I build"
            title="Products that feel sharper because the system underneath is sharper."
            description="My best work sits at the intersection of interface craft, orchestration, and product-minded engineering."
          />
        </Reveal>
        <div className="mt-8">
          <CapabilityGrid />
        </div>
      </section>

      <section className="mt-14" id="blog">
        <Reveal>
          <SectionHeading
            eyebrow="Build log"
            title="Notes, experiments, and patterns I keep returning to."
            description="Where the product builder, systems thinker, and curious experimentalist all overlap."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {buildLog.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.06}>
              <BuildLogCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-14" id="contact">
        <Reveal>
          <TerminalFrame title="contact.cta">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">// contact</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl text-fg sm:text-5xl">
                  Recruiting, client work, or a product conversation.
                </h2>
                <p className="mt-4 font-mono text-[14px] leading-7 text-fg-muted">
                  <span className="text-fg-dim">// </span>
                  If you need someone who can reason about the system and shape the experience, I&apos;d love to hear what you&apos;re building.
                </p>
                <p className="mt-3 font-mono text-[12px] text-accent">{siteMeta.availability}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="border border-accent bg-accent/10 px-5 py-2.5 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-onAccent"
                >
                  $ open contact
                </Link>
                <a
                  href={siteMeta.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line-strong px-5 py-2.5 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition hover:border-accent hover:text-accent"
                >
                  $ open resume.pdf
                </a>
              </div>
            </div>
          </TerminalFrame>
        </Reveal>
      </section>
    </div>
  );
}
