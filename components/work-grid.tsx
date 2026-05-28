"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import {
  projectMatchesFilter,
  projects,
  workFilters,
  type WorkFilterId
} from "@/lib/data";

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<WorkFilterId>("all");
  const sorted = useMemo(() => [...projects].sort((a, b) => a.order - b.order), []);
  const filtered = sorted.filter((project) => projectMatchesFilter(project, activeFilter));

  return (
    <>
      <div
        className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px]"
        role="group"
        aria-label="Filter projects"
      >
        <span className="text-fg-dim">grep --filter</span>
        {workFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`border px-3 py-1 uppercase tracking-[0.18em] transition ${
              activeFilter === filter.id
                ? "border-accent bg-accent text-onAccent"
                : "border-line-strong text-fg-muted hover:border-accent hover:text-accent"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:auto-rows-fr lg:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
