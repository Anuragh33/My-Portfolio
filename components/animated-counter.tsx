"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
};

const BAR_WIDTH = 8;

export function AnimatedCounter({ value, duration = 1200 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();

  const match = value.match(/^(-?\d+\.?\d*)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const [progress, setProgress] = useState(target === null ? 1 : 0);

  useEffect(() => {
    if (target === null) {
      setProgress(1);
      return;
    }
    if (reducedMotion) {
      setProgress(1);
      return;
    }
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reducedMotion]);

  if (target === null) {
    return (
      <span ref={ref} className="font-mono whitespace-nowrap text-[28px]">
        <span className="text-fg-dim">[</span>
        <span className="px-2 text-accent">{value}</span>
        <span className="text-fg-dim">]</span>
      </span>
    );
  }

  const filled = Math.round(progress * BAR_WIDTH);
  const empty = BAR_WIDTH - filled;
  const current = (target * progress).toFixed(decimals);

  return (
    <span ref={ref} className="block font-mono whitespace-nowrap text-[24px] leading-none">
      <span className="text-fg-dim">[</span>
      <span className="text-accent">{"█".repeat(filled)}</span>
      <span className="text-fg-dim">{"░".repeat(empty)}</span>
      <span className="text-fg-dim">]</span>
      <span className="ml-3 text-fg">
        {current}
        {suffix}
      </span>
    </span>
  );
}
