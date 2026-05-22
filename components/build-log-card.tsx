import Link from "next/link";

import type { BuildLogEntry } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type BuildLogCardProps = {
  entry: BuildLogEntry;
};

export function BuildLogCard({ entry }: BuildLogCardProps) {
  return (
    <article className="glass-panel flex h-full min-h-[22rem] flex-col p-6 lg:aspect-square lg:min-h-0">
      <div className="flex flex-wrap items-center gap-3">
        <span className="liquid-glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          {entry.topic}
        </span>
        <span className="text-sm text-slate-500">{formatDate(entry.date)}</span>
      </div>
      <h3 className="mt-5 font-serif text-2xl text-white">{entry.title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{entry.summary}</p>
      <Link
        href={`/build-log/${entry.slug}`}
        className="mt-auto inline-flex pt-5 text-sm text-slate-200 transition hover:text-white"
      >
        Read the note
      </Link>
    </article>
  );
}
