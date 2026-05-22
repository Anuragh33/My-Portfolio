"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SocialLinks } from "@/components/social-links";
import { siteMeta } from "@/lib/data";

const navItems = [
  { label: "Experience", href: "/experience" },
  { label: "Work", href: "/work" },
  { label: "Build Log", href: "/build-log" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-surface/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <Link href="/" className="text-[17px] font-semibold tracking-tight text-white">
          Anuragh
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-white transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <SocialLinks className="hidden lg:flex" />
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-onAccent transition hover:scale-[1.03]"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="liquid-glass rounded-full p-3 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-surface/95 px-6 backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-semibold text-white transition hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <SocialLinks />
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-onAccent"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
