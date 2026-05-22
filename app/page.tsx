import Link from "next/link";

import { BuildLogCard } from "@/components/build-log-card";
import { CapabilityGrid } from "@/components/capability-grid";
import { Hero } from "@/components/hero";
import { RecruiterStrip } from "@/components/recruiter-strip";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buildLog, careerBridge, experiences, getFeaturedProjects, siteMeta } from "@/lib/data";

const outcomes = [
  ["3.5+", "years production experience"],
  ["200+", "bots supported through Bot Center"],
  ["4", "featured product case studies"],
  ["AI", "workflows built for real leverage"]
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />

      <div className="content-grid pt-14 lg:pt-20">
        <RecruiterStrip />

        <section className="section-space" id="projects">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Four projects that show how I think, build, and scale."
              description="Each case study has a different job: flagship product ambition, AI workflow systems, consumer UX, and platform architecture."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} priority={index === 0} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/work" className="text-sm text-slate-200 underline decoration-white/20 underline-offset-4">
              Explore the full work archive
            </Link>
          </Reveal>
        </section>

        <section className="section-space" id="experience">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Enterprise AI rigor on one side, independent product energy on the other."
              description="My current and past work shaped how I build across AI systems, product engineering, cloud infrastructure, and frontend delivery."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experiences.map((track, index) => (
              <Reveal key={track.role} delay={index * 0.06}>
                <div className="glass-panel h-full p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">{track.timeline}</p>
                  <h2 className="mt-4 text-3xl font-bold text-white">
                    {track.role}
                    <span className="block text-slate-300">{track.company}</span>
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-300">{track.summary}</p>
                  <ul className="mt-6 space-y-4 text-base leading-8 text-slate-300">
                    {track.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="text-sm leading-7 text-slate-400">{careerBridge}</p>
          </Reveal>
          <Reveal className="mt-8">
            <Link href="/experience" className="text-sm text-slate-200 underline decoration-white/20 underline-offset-4">
              See the full experience page
            </Link>
          </Reveal>
        </section>

        <section className="section-space">
          <Reveal>
            <div className="glass-panel-strong p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">Proof</p>
              <div className="mt-8 grid gap-6 md:grid-cols-4">
                {outcomes.map(([value, label]) => (
                  <div key={label} className="liquid-glass rounded-[1.6rem] p-5">
                    <p className="text-4xl font-extrabold text-white">{value}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section-space">
          <Reveal>
            <SectionHeading
              eyebrow="What I build"
              title="Products that feel sharper because the system underneath them is sharper."
              description="My best work sits at the intersection of interface craft, orchestration, and product-minded engineering."
            />
          </Reveal>
          <div className="mt-10">
            <CapabilityGrid />
          </div>
        </section>

        <section className="section-space" id="blog">
          <Reveal>
            <SectionHeading
              eyebrow="Build log"
              title="Notes, experiments, and patterns I keep returning to."
              description="This is where the product builder, systems thinker, and curious experimentalist all overlap."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {buildLog.map((entry, index) => (
              <Reveal key={entry.slug} delay={index * 0.06}>
                <BuildLogCard entry={entry} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-space" id="about">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="I build products where engineering depth is visible in the experience."
              description="Enterprise AI work taught me reliability, privacy, and workflow clarity. Independent product building keeps me sharp on speed, taste, and user experience."
            />
          </Reveal>
          <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-panel p-6">
              <p className="text-lg leading-8 text-slate-300">
                I’m a full-stack AI developer who enjoys translating complexity into products people can actually use. That means architecting backends, designing cleaner interfaces, building workflow automation, and choosing where AI adds real leverage instead of noise.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-400">
                My style is equal parts systems-minded and product-minded. I care about architecture, but I also care about whether the product feels alive, trustworthy, and memorable.
              </p>
            </div>
            <div className="glass-panel p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Current focus</p>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li>Building AI-native products that earn trust through utility, not hype.</li>
                <li>Designing workflows where automation removes friction instead of control.</li>
                <li>Crafting interfaces that feel premium, responsive, and unmistakably authored.</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section-space" id="contact">
          <Reveal>
            <div className="glass-panel-strong p-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">Contact</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Recruiting, client work, or a product conversation.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  If you need someone who can reason about the system and shape the experience, I’d love to hear what you’re building.
                </p>
                <p className="mt-3 text-sm text-slate-400">{siteMeta.availability}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#070b0a] transition hover:scale-[1.03]"
                >
                  Contact me
                </Link>
                <a
                  href={siteMeta.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
                >
                  Download resume
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
