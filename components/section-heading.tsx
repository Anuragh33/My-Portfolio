type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}
