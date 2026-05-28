import type { ReactNode } from "react";

export type FrameStatus = "live" | "wip" | "shipped";

type TerminalFrameProps = {
  title: string;
  status?: FrameStatus;
  statusLabel?: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
};

const defaultLabels: Record<FrameStatus, string> = {
  live: "LIVE",
  wip: "WIP",
  shipped: "SHIPPED"
};

export function TerminalFrame({
  title,
  status,
  statusLabel,
  className,
  bodyClassName,
  children
}: TerminalFrameProps) {
  return (
    <section className={`terminal-frame flex flex-col ${className ?? ""}`}>
      <header className="terminal-frame__bar shrink-0">
        <span className="terminal-frame__dot" aria-hidden="true" />
        <span className="terminal-frame__dot" aria-hidden="true" />
        <span className="terminal-frame__dot" aria-hidden="true" />
        <span className="terminal-frame__title">{title}</span>
        {status ? (
          <span className="terminal-frame__status" data-tone={status}>
            {statusLabel ?? defaultLabels[status]}
          </span>
        ) : null}
        <span className="text-fg-dim" aria-hidden="true">
          [X]
        </span>
      </header>
      <div className={`terminal-frame__body flex-1 ${bodyClassName ?? ""}`}>{children}</div>
    </section>
  );
}
