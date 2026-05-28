import { Linkedin, Mail } from "lucide-react";

import { siteMeta } from "@/lib/data";

type SocialLinksProps = {
  className?: string;
  showEmail?: boolean;
};

export function SocialLinks({ className = "", showEmail = false }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <
        href={siteMeta.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="border border-line-strong p-2 text-fg transition hover:border-accent hover:text-accent"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      {showEmail ? (
        <a
          href={`mailto:${siteMeta.email}`}
          aria-label="Send email"
          className="border border-line-strong p-2 text-fg transition hover:border-accent hover:text-accent"
        >
          <Mail className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
