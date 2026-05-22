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
    <div className="content-grid section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Work archive"
          title="A project-first portfolio built around product shape, system depth, and AI leverage."
          description="These are the products and platforms that best reflect how I think about building useful software."
        />
      </Reveal>
      <WorkGrid />
    </div>
  );
}
