"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "EXPERIENCE", href: "/experience" },
  { label: "WORK", href: "/work" },
  { label: "BUILD LOG", href: "/build-log" },
  { label: "ABOUT", href: "/about" },
  { label: "RESUME", href: "/Anuragh_Resume.pdf" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-6 py-6 lg:px-10 lg:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-[17px] font-semibold tracking-tight text-white">
          Anuragh
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-['Inter'] text-[16px] font-medium text-white transition hover:text-[#5ed29c]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="liquid-glass rounded-full p-3 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#070b0a]/95 px-6 backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-['Inter'] text-2xl font-semibold text-white transition hover:text-[#5ed29c]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
