import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
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
    <div className="content-grid section-space">
      <Reveal>
        <article className="glass-panel-strong max-w-3xl p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="liquid-glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              {entry.topic}
            </span>
            <span className="text-sm text-slate-500">{formatDate(entry.date)}</span>
          </div>
          <h1 className="mt-6 font-serif text-4xl text-white sm:text-5xl">{entry.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{entry.summary}</p>
          <div className="mt-8 space-y-5">
            {entry.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href="/build-log"
            className="mt-10 inline-flex text-sm text-slate-200 underline decoration-white/20 underline-offset-4 transition hover:text-white"
          >
            Back to build log
          </Link>
        </article>
      </Reveal>
    </div>
  );
}
