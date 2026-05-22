"use client";

import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { HeroBackdrop } from "@/components/hero-backdrop";
import { siteMeta } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = section.querySelectorAll<HTMLElement>("[data-hero-item]");

    if (prefersReducedMotion) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-base text-white"
      aria-label="Introduction"
    >
      <HeroBackdrop />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 pb-16 pt-28 lg:px-10 lg:pb-20">
        <p
          data-hero-item
          className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent opacity-0"
        >
          {siteMeta.title}
        </p>
        <h1
          data-hero-item
          className="mt-5 max-w-4xl font-serif text-[40px] font-normal leading-[0.95] tracking-tight text-white opacity-0 sm:text-[58px] lg:text-[72px]"
        >
          {siteMeta.name}
          <span className="text-accent">.</span>
        </h1>
        <p
          data-hero-item
          className="mt-6 max-w-[540px] text-[15px] leading-7 text-white/75 opacity-0"
        >
          {siteMeta.hero}
        </p>

        <div data-hero-item className="mt-9 flex flex-wrap gap-3 opacity-0">
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-onAccent shadow-[0_0_40px_rgba(96,165,250,0.35)] transition hover:scale-[1.03] active:scale-[0.97]"
          >
            Download resume
            <Download size={17} strokeWidth={2} />
          </a>
          <Link
            href="/work"
            className="liquid-glass inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition hover:text-accent"
          >
            View selected work
            <ArrowRight size={17} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
