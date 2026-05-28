import { proofPoints, siteMeta } from "@/lib/data";

export function RecruiterStrip() {
  return (
    <section
      aria-label="Recruiter overview"
      className="mt-6 border border-line-strong bg-panel"
    >
      <div className="flex flex-wrap items-center gap-3 border-b border-line-strong bg-elevated px-5 py-2 font-mono text-[12px] text-fg">
        <span className="live-badge" aria-label="Available">[ONLINE]</span>
        <span>{siteMeta.availability}</span>
      </div>
      <ul className="grid gap-1 px-5 py-4 font-mono text-[12px] text-fg-muted sm:grid-cols-2">
        {proofPoints.map((point) => (
          <li key={point}>
            <span className="text-fg-dim">// </span>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
