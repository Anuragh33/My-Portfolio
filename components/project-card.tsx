"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const caseStudyHref = `/work/${project.slug}`;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [18, -18]);

  return (
    <motion.div style={{ y }} className={priority ? "lg:col-span-2" : undefined}>
      <article ref={ref} className="glass-panel group h-full overflow-hidden p-6 transition hover:scale-[1.01]">
        <Link href={caseStudyHref} className="block">
          <div className="relative isolate aspect-video overflow-hidden rounded-[1.4rem]">
            <Image
              src={project.heroImage}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0a]/70 via-[#070b0a]/10 to-transparent" />
            <span
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#070b0a]/60 text-white shadow-lg backdrop-blur-md transition group-hover:border-accent/50 group-hover:text-accent"
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </span>
          </div>

          <div className={`liquid-glass relative mt-5 rounded-[1.6rem] bg-gradient-to-br ${project.accent} p-6`}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-300">{project.status}</p>
            <h3 className="mt-3 font-serif text-3xl text-white">{project.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">{project.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span key={metric.label} className="liquid-glass rounded-full px-3 py-1 text-xs text-slate-200">
                  <span className="text-accent">{metric.value}</span> · {metric.label}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 text-base leading-7 text-slate-300">{project.summary}</p>
        </Link>
      </article>
    </motion.div>
  );
}
