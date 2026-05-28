import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TerminalFrame } from "@/components/terminal-frame";
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
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> ls ~/build-log/
      </p>
      <div className="mt-4">
        <Reveal>
          <SectionHeading
            eyebrow="Build log"
            title="A running note on how I think through products, systems, and interaction."
            description="Short, direct snapshots of the ideas shaping the products I build."
          />
        </Reveal>
      </div>
      <div className="mt-8 space-y-5">
        {buildLog.map((entry, index) => (
          <Reveal key={entry.slug} delay={index * 0.05}>
            <TerminalFrame title={`${entry.date}_${entry.slug}.log`}>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="border border-line px-2 py-0.5 text-accent">{entry.topic}</span>
                <span className="text-fg-muted">{formatDate(entry.date)}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl text-fg">{entry.title}</h2>
              <p className="mt-4 font-mono text-[14px] leading-7 text-fg-muted">
                <span className="text-fg-dim">// </span>
                {entry.summary}
              </p>
              <p className="mt-4 font-mono text-[13px] leading-7 text-fg-muted">{entry.content[0]}</p>
              <Link
                href={`/build-log/${entry.slug}`}
                className="mt-6 inline-flex font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition hover:text-accent"
              >
                $ cat full_note
              </Link>
            </TerminalFrame>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
