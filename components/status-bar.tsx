import { getFeaturedProjects, siteMeta } from "@/lib/data";

export function StatusBar() {
  const count = getFeaturedProjects().length;
  const userPath = siteMeta.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line-strong bg-elevated">
      <div className="mx-auto flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 px-4 py-1.5 font-mono text-[11px] text-fg-muted sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <span className="text-success">[NORMAL]</span>
        <span className="text-fg-dim">·</span>
        <span className="text-fg">~/{userPath}</span>
        <span className="text-fg-dim">·</span>
        <span>main</span>
        <span className="text-fg-dim">·</span>
        <span>{count} projects</span>
        <span className="text-fg-dim">·</span>
        <span>uptime: 100%</span>
        <span className="block-caret" aria-hidden="true" />
      </div>
    </div>
  );
}
