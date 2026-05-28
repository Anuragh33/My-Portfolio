import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TerminalFrame, type FrameStatus } from "@/components/terminal-frame";
import type { Project } from "@/lib/data";

function deriveStatus(status: string): FrameStatus {
  const lower = status.toLowerCase();
  if (lower.includes("in progress")) return "wip";
  if (lower.includes("shipped")) return "shipped";
  return "live";
}

function snakeCase(label: string) {
  return label.toLowerCase().replace(/\s+/g, "_");
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const frameStatus = deriveStatus(project.status);
  const detailsHref = `/work/${project.slug}`;

  return (
    <div className="shimmer-hover h-full">
      <TerminalFrame
        title={`~/work/${project.slug}.case`}
        status={frameStatus}
        className="h-full"
        bodyClassName="flex flex-col"
      >
        <Link href={detailsHref} className="flex h-full flex-col gap-5">
          <div className="relative aspect-video overflow-hidden border border-line">
            <Image
              src={project.heroImage}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition duration-500 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            <span
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center border border-line-strong bg-base/80 text-fg backdrop-blur"
              aria-hidden="true"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <h3 className="font-serif text-3xl text-fg">{project.title}</h3>

          <p className="font-mono text-[13px] leading-6 text-fg-muted">
            <span className="text-fg-dim">// </span>
            {project.tagline}
          </p>

          <div className="grid gap-y-1 font-mono text-[12px]">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <span className="text-fg-dim">{snakeCase(metric.label)}</span>
                <span className="text-fg-dim"> = </span>
                <span className="text-accent">&quot;{metric.value}&quot;</span>
              </div>
            ))}
          </div>

          <p className="mt-auto flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition group-hover:text-accent">
            → open project_details
          </p>
        </Link>
      </TerminalFrame>
    </div>
  );
}
