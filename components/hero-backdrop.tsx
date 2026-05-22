"use client";

import Image from "next/image";
import { useId } from "react";

export function HeroBackdrop() {
  const glowId = useId().replace(/:/g, "");

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/hero-poster.svg"
        alt=""
        fill
        priority
        className="object-cover opacity-70"
      />

      <div className="hero-aurora absolute inset-[-40%]" />
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-beams absolute inset-0" />

      <div className="hero-orb hero-orb-a absolute -left-20 top-[18%] h-[32rem] w-[32rem] rounded-full bg-blue-400/25 blur-[110px]" />
      <div className="hero-orb hero-orb-b absolute -right-16 top-[8%] h-[36rem] w-[36rem] rounded-full bg-sky-400/15 blur-[130px]" />
      <div className="hero-orb hero-orb-c absolute bottom-[12%] right-[20%] h-72 w-72 rounded-full bg-blue-400/20 blur-[100px]" />
      <div className="hero-orb hero-orb-d absolute bottom-[30%] left-[35%] h-56 w-56 rounded-full bg-indigo-400/10 blur-[80px]" />

      <div className="hero-grid absolute inset-0 hidden md:block" />

      <svg
        className="absolute left-1/2 top-[12%] h-48 w-[min(900px,94vw)] -translate-x-1/2 opacity-100"
        viewBox="0 0 820 160"
        fill="none"
      >
        <defs>
          <filter id={`hero-glow-${glowId}`} x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="32" />
          </filter>
        </defs>
        <ellipse cx="410" cy="80" rx="340" ry="38" fill="#60a5fa" fillOpacity="0.32" filter={`url(#hero-glow-${glowId})`} />
        <ellipse cx="410" cy="84" rx="220" ry="24" fill="#93c5fd" fillOpacity="0.12" filter={`url(#hero-glow-${glowId})`} />
        <ellipse cx="410" cy="82" rx="160" ry="16" fill="#1e3a5f" fillOpacity="0.55" filter={`url(#hero-glow-${glowId})`} />
      </svg>

      <div className="hero-grain absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030508_0%,rgba(3,5,8,0.88)_30%,rgba(3,5,8,0.35)_58%,rgba(3,5,8,0.08)_78%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#030508_0%,rgba(3,5,8,0.4)_18%,transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface via-surface/95 to-transparent" />
    </div>
  );
}
