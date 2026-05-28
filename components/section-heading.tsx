type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        <span className="text-fg-dim">// </span>
        {eyebrow.toLowerCase()}
      </p>
      <h2 className="mt-3 font-serif text-4xl text-fg sm:text-5xl">{title}</h2>
      <p className="mt-4 font-mono text-[14px] leading-7 text-fg-muted">{description}</p>
    </div>
  );
}
