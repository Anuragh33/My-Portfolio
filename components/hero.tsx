"use client";

import Hls from "hls.js";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HLS_STREAM = "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const revealFallback = window.setTimeout(() => setLoaded(true), 900);

    if (!video) {
      window.clearTimeout(revealFallback);
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_STREAM;
      return () => window.clearTimeout(revealFallback);
    }

    if (!Hls.isSupported()) {
      return () => window.clearTimeout(revealFallback);
    }

    const hls = new Hls({ enableWorker: false });
    hls.loadSource(HLS_STREAM);
    hls.attachMedia(video);

    return () => {
      window.clearTimeout(revealFallback);
      hls.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setLoaded(true)}
      />

      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#070b0a_0%,rgba(7,11,10,0.88)_22%,rgba(7,11,10,0.28)_58%,transparent_100%)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,#070b0a_0%,rgba(7,11,10,0.78)_16%,rgba(7,11,10,0)_48%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/10" />
      </div>

      <svg
        className="pointer-events-none absolute left-1/2 top-[12%] z-10 h-40 w-[min(820px,90vw)] -translate-x-1/2 opacity-80"
        viewBox="0 0 820 160"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="codenest-glow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <ellipse cx="410" cy="80" rx="320" ry="34" fill="#5ed29c" fillOpacity="0.26" filter="url(#codenest-glow)" />
        <ellipse cx="410" cy="82" rx="220" ry="22" fill="#123f34" fillOpacity="0.45" filter="url(#codenest-glow)" />
      </svg>

      <div
        className={`relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 pb-20 pt-28 transition-all duration-1000 lg:px-10 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#5ed29c]">
          Full-Stack AI Developer
        </p>
        <h1 className="mt-5 max-w-4xl font-['Inter'] text-[40px] font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-[58px] lg:text-[72px]">
          Anuragh Ragidimilli<span className="text-[#5ed29c]">.</span>
        </h1>
        <p className="mt-6 max-w-[512px] font-['Inter'] text-[14px] leading-7 text-white/70">
          I build production-grade full-stack products and embed AI where it creates real leverage: agentic workflows, scalable systems, and interfaces that feel sharp.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full bg-[#5ed29c] px-7 py-3.5 font-['Inter'] text-[12px] font-bold uppercase tracking-[0.14em] text-[#070b0a] transition hover:scale-[1.03] active:scale-[0.97]"
          >
            View selected work
            <ArrowRight size={17} strokeWidth={2} />
          </a>
          <a
            href="/Anuragh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-['Inter'] text-[12px] font-bold uppercase tracking-[0.14em] text-white transition hover:text-[#5ed29c]"
          >
            Download resume
            <Download size={17} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
