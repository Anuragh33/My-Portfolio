import Link from "next/link";

import { SocialLinks } from "@/components/social-links";
import { siteMeta } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-strong pt-6">
      <div className="flex flex-col gap-5 font-mono text-[12px] text-fg-muted lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[13px] text-fg">
            <span className="text-fg-dim">$</span> echo &quot;{siteMeta.name}&quot;
          </p>
          <p className="mt-2 leading-6 text-fg-muted">
            <span className="text-fg-dim">// </span>
            Full-stack AI developer building intelligent products from interface to infrastructure.
          </p>
          <SocialLinks className="mt-4" showEmail />
        </div>
        <nav className="flex flex-wrap gap-4 text-fg-muted">
          <Link href="/work" className="hover:text-accent">~/work</Link>
          <Link href="/build-log" className="hover:text-accent">~/build-log</Link>
          <Link href="/about" className="hover:text-accent">~/about</Link>
          <Link href="/contact" className="hover:text-accent">~/contact</Link>
          <a
            href={siteMeta.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            ~/resume.pdf
          </a>
        </nav>
      </div>
    </footer>
  );
}
