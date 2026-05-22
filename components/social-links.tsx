import { Github, Linkedin, Mail } from "lucide-react";

import { siteMeta } from "@/lib/data";

type SocialLinksProps = {
  className?: string;
  showEmail?: boolean;
};

export function SocialLinks({ className = "", showEmail = false }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={siteMeta.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="liquid-glass rounded-full p-3 text-white transition hover:text-accent"
      >
        <Github className="h-4 w-4" />
      </a>
      <a
        href={siteMeta.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="liquid-glass rounded-full p-3 text-white transition hover:text-accent"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      {showEmail ? (
        <a
          href={`mailto:${siteMeta.email}`}
          aria-label="Send email"
          className="liquid-glass rounded-full p-3 text-white transition hover:text-accent"
        >
          <Mail className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
