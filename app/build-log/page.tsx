import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buildLog } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Build Log | Anuragh Ragidimilli",
  description: "Notes on AI systems, product UX, and interaction experiments from active builds.",
  path: "/build-log"
});

export default function BuildLogPage() {
  return (
    <div className="content-grid section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Build log / experiments"
          title="A running note of how I think through products, systems, and interaction."
          description="These notes are intentionally short and direct. They are snapshots of the ideas shaping the products I build."
        />
      </Reveal>
      <div className="mt-10 space-y-6">
        {buildLog.map((entry, index) => (
          <Reveal key={entry.slug} delay={index * 0.05}>
            <article className="glass-panel p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="liquid-glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {entry.topic}
                </span>
                <span className="text-sm text-slate-500">{formatDate(entry.date)}</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl text-white">{entry.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">{entry.summary}</p>
              <div className="mt-6 space-y-4">
                {entry.content.slice(0, 1).map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-400">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                href={`/build-log/${entry.slug}`}
                className="mt-6 inline-flex text-sm text-slate-200 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                Read full note
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
