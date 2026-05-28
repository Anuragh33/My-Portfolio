import { capabilities } from "@/lib/data";

import { TerminalFrame } from "@/components/terminal-frame";

export function CapabilityGrid() {
  return (
    <TerminalFrame title="capabilities(7).txt">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">CAPABILITIES(7)</p>
      <div className="mt-5 space-y-5 font-mono text-[13px] leading-7">
        {capabilities.map((capability) => (
          <div key={capability.title}>
            <p className="text-fg">{capability.title.toUpperCase()}</p>
            <p className="mt-1 max-w-3xl pl-6 text-fg-muted">{capability.description}</p>
          </div>
        ))}
      </div>
    </TerminalFrame>
  );
}
