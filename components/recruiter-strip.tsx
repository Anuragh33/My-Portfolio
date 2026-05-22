import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

import { proofPoints, siteMeta } from "@/lib/data";

export function RecruiterStrip() {
  return (
    <section
      aria-label="Recruiter overview"
      className="glass-panel-strong -mt-6 relative z-30 mb-4 grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">{siteMeta.availability}</p>
        <p className="mt-3 text-lg text-white">
          <span className="font-semibold">{siteMeta.title}</span>
          <span className="text-slate-400"> · {siteMeta.location}</span>
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {proofPoints.map((point) => (
            <span key={point} className="liquid-glass rounded-full px-3 py-1.5 text-xs text-slate-200">
              {point}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <a
          href={siteMeta.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#070b0a] transition hover:scale-[1.03]"
        >
          Download resume
          <Download className="h-4 w-4" />
        </a>
        <a
          href={`mailto:${siteMeta.email}`}
          className="liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
        >
          Email
          <Mail className="h-4 w-4" />
        </a>
        <a
          href={siteMeta.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
        >
          LinkedIn
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
