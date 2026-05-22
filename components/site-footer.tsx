import Link from "next/link";

import { SocialLinks } from "@/components/social-links";
import { siteMeta } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl">
          <p className="text-2xl font-extrabold text-white">{siteMeta.name}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Full-stack AI developer building intelligent products from interface to infrastructure.
          </p>
          <SocialLinks className="mt-5" showEmail />
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          <Link href="/work" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="/build-log" className="transition hover:text-white">
            Build log
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
