import { proofPoints } from "@/lib/data";

export function ProofStrip() {
  return (
    <div className="glass-panel-strong mt-10 grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
      {proofPoints.map((item) => (
        <div key={item} className="liquid-glass rounded-[1.5rem] px-4 py-5">
          <p className="text-sm leading-7 text-slate-300">{item}</p>
        </div>
      ))}
    </div>
  );
}
