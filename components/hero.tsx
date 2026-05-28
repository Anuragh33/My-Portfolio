"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { TerminalFrame } from "@/components/terminal-frame";
import { getFeaturedProjects, siteMeta } from "@/lib/data";

const projectCount = getFeaturedProjects().length;
const tickerLine = `> status: ${projectCount}_projects_active · stack: next-fastapi-tauri · role: full-stack-ai`;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export function Hero() {
  const reducedMotion = useReducedMotion();
  const router = useRouter();
  const [tickerText, setTickerText] = useState(tickerLine);

  useEffect(() => {
    if (reducedMotion) {
      setTickerText(tickerLine);
      return;
    }
    setTickerText("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTickerText(tickerLine.slice(0, i));
      if (i >= tickerLine.length) {
        window.clearInterval(id);
      }
    }, 22);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      if (event.key === "F1") {
        event.preventDefault();
        window.open(siteMeta.resumePath, "_blank", "noopener,noreferrer");
      } else if (event.key === "F2") {
        event.preventDefault();
        router.push("/work");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <TerminalFrame title="~/anuragh-ragidimilli/session.txt">
      <motion.div
        initial={reducedMotion ? "visible" : "hidden"}
        animate="visible"
        variants={containerVariants}
        className="flex flex-col gap-6 py-2 sm:py-4"
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-[12px] tracking-wide text-fg-muted sm:text-[13px]"
        >
          {tickerText}
          <span className="text-accent">_</span>
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-serif text-[44px] leading-[1.02] tracking-tight text-fg sm:text-[64px] lg:text-[78px]"
        >
          {siteMeta.name}
          <span className="text-accent">.</span>
          <span className="block-caret" aria-hidden="true" />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
        >
          {siteMeta.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-mono text-[14px] leading-7 text-fg-muted"
        >
          {siteMeta.hero}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-2 flex flex-wrap gap-3">
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-onAccent"
          >
            <span className="text-[11px] text-fg-muted">[F1]</span>
            Download Resume
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-line-strong px-4 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-fg transition hover:border-accent hover:text-accent"
          >
            <span className="text-[11px] text-fg-muted">[F2]</span>
            View Work
          </Link>
        </motion.div>
      </motion.div>
    </TerminalFrame>
  );
}
