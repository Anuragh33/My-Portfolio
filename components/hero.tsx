"use client";

import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
      className="relative isolate min-h-screen overflow-hidden bg-[#050807] text-white"
      aria-label="Introduction"
    >
      <Image
        src="/hero-poster.svg"
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 object-cover opacity-55"
        aria-hidden="true"
      />
      <div className="hero-mesh pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[28rem] w-[28rem] rounded-full bg-[#5ed29c]/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 z-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/3 z-0 h-64 w-64 rounded-full bg-[#123f34]/50 blur-[90px]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/[0.07]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.07]" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/[0.07]" />
      </div>

      <svg
        className="pointer-events-none absolute left-1/2 top-[14%] z-[1] h-44 w-[min(820px,92vw)] -translate-x-1/2 opacity-90"
        viewBox="0 0 820 160"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-glow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <ellipse cx="410" cy="80" rx="320" ry="34" fill="#5ed29c" fillOpacity="0.22" filter="url(#hero-glow)" />
        <ellipse cx="410" cy="82" rx="200" ry="22" fill="#123f34" fillOpacity="0.5" filter="url(#hero-glow)" />
      </svg>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#050807_0%,rgba(5,8,7,0.92)_28%,rgba(5,8,7,0.45)_62%,transparent_100%)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,#050807_0%,rgba(5,8,7,0.5)_22%,transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#070b0a] via-[#070b0a]/90 to-transparent" />

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
            className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#070b0a] transition hover:scale-[1.03] active:scale-[0.97]"
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
