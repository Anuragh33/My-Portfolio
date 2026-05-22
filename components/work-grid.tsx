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
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {workFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter.id
                ? "bg-accent text-[#070b0a]"
                : "liquid-glass text-slate-200 hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
