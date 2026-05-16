"use client";

import { ArrowUpRight } from "lucide-react";
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
  const ref = useRef<HTMLAnchorElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [18, -18]);

  return (
    <motion.div style={{ y }} className={priority ? "lg:col-span-2" : undefined}>
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        className="glass-panel group block h-full overflow-hidden p-6 transition hover:scale-[1.01]"
      >
        <div
          className={`liquid-glass relative rounded-[1.6rem] bg-gradient-to-br ${project.accent} p-6`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-300">{project.status}</p>
              <h3 className="mt-3 font-display text-3xl text-white">{project.title}</h3>
            </div>
            <span className="liquid-glass rounded-full p-3 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="relative mt-4 max-w-2xl text-base leading-7 text-slate-200">{project.tagline}</p>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {project.capabilities.slice(0, 3).map((capability) => (
              <span key={capability} className="liquid-glass rounded-full px-3 py-1 text-xs text-slate-200">
                {capability}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <p className="text-base leading-7 text-slate-300">{project.summary}</p>
          <div className="liquid-glass space-y-3 rounded-[1.5rem] p-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">Timeline</p>
              <p className="mt-1 text-sm text-slate-200">{project.timeline}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">Stack</p>
              <p className="mt-1 text-sm text-slate-200">{project.stack.slice(0, 4).join(" · ")}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
