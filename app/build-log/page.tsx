import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buildLog } from "@/lib/data";
import { formatDate } from "@/lib/utils";

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
                <span className="liquid-glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-[#5ed29c]">
                  {entry.topic}
                </span>
                <span className="text-sm text-slate-500">{formatDate(entry.date)}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl text-white">{entry.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">{entry.summary}</p>
              <div className="mt-6 space-y-4">
                {entry.content.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
