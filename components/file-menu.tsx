"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteMeta } from "@/lib/data";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Build", href: "/build-log" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

function MenuLabel({ label }: { label: string }) {
  return (
    <>
      <span className="menu-key text-accent">{label.charAt(0)}</span>
      {label.slice(1)}
    </>
  );
}

export function FileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-strong bg-elevated">
      <div className="relative z-50 mx-auto flex w-full items-center justify-between gap-4 px-4 py-1.5 font-mono text-[12px] text-fg sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <Link href="/" className="text-fg transition hover:text-accent">
          <span className="text-accent">$</span> anuragh@portfolio
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-fg-muted transition hover:text-fg"
            >
              <MenuLabel label={item.label} />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteMeta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border border-line-strong p-1.5 text-fg transition hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteMeta.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="border border-line-strong p-1.5 text-fg transition hover:border-accent hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
        </div>
        <a
          href={siteMeta.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-line-strong px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-fg transition hover:border-accent hover:text-accent md:inline-block"
        >
          [F1] Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="border border-line-strong p-1.5 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col items-start gap-3 bg-base px-6 pt-20 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xl text-fg transition hover:text-accent"
            >
              <MenuLabel label={item.label} />
            </Link>
          ))}
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 border border-line-strong px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-fg"
          >
            [F1] Resume
          </a>
          <div className="mt-4 flex gap-2">
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border border-line-strong p-2 text-fg transition hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteMeta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border border-line-strong p-2 text-fg transition hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
