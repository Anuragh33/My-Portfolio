import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkGrid } from "@/components/work-grid";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Work | Anuragh Ragidimilli",
  description:
    "Featured projects in AI systems, full-stack engineering, consumer UX, and platform architecture.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <div className="content-grid pt-6">
      <p className="font-mono text-[12px] text-fg-muted">
        <span className="text-accent">$</span> ls ~/work/
      </p>
      <div className="mt-4">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Projects shaped around product, systems, and AI leverage."
            description="The products and platforms that best reflect how I build."
          />
        </Reveal>
      </div>
      <WorkGrid />
    </div>
  );
}
