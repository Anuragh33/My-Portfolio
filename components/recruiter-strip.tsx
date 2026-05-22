import { proofPoints, siteMeta } from "@/lib/data";

export function RecruiterStrip() {
  return (
    <section
      aria-label="Recruiter overview"
      className="glass-panel-strong mb-8 p-6 lg:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">{siteMeta.availability}</p>
      <p className="mt-3 text-lg font-semibold text-white">{siteMeta.title}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {proofPoints.map((point) => (
          <span key={point} className="liquid-glass rounded-full px-3 py-1.5 text-xs text-slate-200">
            {point}
          </span>
        ))}
      </div>
    </section>
  );
}
