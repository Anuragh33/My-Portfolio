import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { TerminalFrame } from "@/components/terminal-frame";
import { buildLog, getBuildLogEntry } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return buildLog.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getBuildLogEntry(slug);

  if (!entry) {
    return {};
  }

  return createPageMetadata({
    title: `${entry.title} | Build Log`,
    description: entry.summary,
    path: `/build-log/${slug}`
  });
}

export default async function BuildLogEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getBuildLogEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> cat ~/build-log/{entry.date}_{entry.slug}.log
      </p>
      <Reveal className="mt-4">
        <TerminalFrame title={`${entry.date}_${entry.slug}.log`}>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
            <span className="border border-line px-2 py-0.5 text-accent">{entry.topic}</span>
            <span className="text-fg-muted">{formatDate(entry.date)}</span>
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl text-fg sm:text-5xl">{entry.title}</h1>
          <p className="mt-5 font-mono text-[14px] leading-7 text-fg">
            <span className="text-fg-dim">// </span>
            {entry.summary}
          </p>
          <div className="mt-6 space-y-4 font-mono text-[13px] leading-7 text-fg-muted">
            {entry.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/build-log"
            className="mt-8 inline-flex font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition hover:text-accent"
          >
            $ cd ..
          </Link>
        </TerminalFrame>
      </Reveal>
    </div>
  );
}
