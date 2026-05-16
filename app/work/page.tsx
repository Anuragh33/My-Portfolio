import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="content-grid section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Work archive"
          title="A project-first portfolio built around product shape, system depth, and AI leverage."
          description="These are the products and platforms that best reflect how I think about building useful software."
        />
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {sorted.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
