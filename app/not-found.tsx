import Link from "next/link";

import { siteMeta } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="content-grid section-space">
      <div className="glass-panel-strong max-w-2xl p-8 lg:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">404</p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          The page you are looking for does not exist. You can still explore my work, download my resume, or get in
          touch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-onAccent transition hover:scale-[1.03]"
          >
            Back home
          </Link>
          <Link
            href="/work"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
          >
            View work
          </Link>
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
          >
            Resume
          </a>
          <Link
            href="/contact"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
