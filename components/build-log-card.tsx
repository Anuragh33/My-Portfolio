import Link from "next/link";

import { TerminalFrame } from "@/components/terminal-frame";
import type { BuildLogEntry } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type BuildLogCardProps = {
  entry: BuildLogEntry;
};

export function BuildLogCard({ entry }: BuildLogCardProps) {
  const fileName = `${entry.date}_${entry.slug}.log`;
  return (
    <TerminalFrame title={fileName} className="h-full" bodyClassName="flex flex-col">
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="border border-line px-2 py-0.5 text-accent">{entry.topic}</span>
          <span className="text-fg-muted">{formatDate(entry.date)}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-fg">{entry.title}</h3>
        <p className="mt-3 font-mono text-[13px] leading-6 text-fg-muted">
          <span className="text-fg-dim">// </span>
          {entry.summary}
        </p>
        <Link
          href={`/build-log/${entry.slug}`}
          className="mt-auto pt-5 font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition hover:text-accent"
        >
          $ cat full_note
        </Link>
      </div>
    </TerminalFrame>
  );
}
