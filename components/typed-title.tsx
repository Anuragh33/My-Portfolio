"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TypedTitleProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypedTitle({ text, speed = 80, className }: TypedTitleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!inView) {
      setDisplayed("");
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="text-accent" aria-hidden="true">_</span>
      )}
    </span>
  );
}
