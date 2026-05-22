import { getFeaturedProjects, siteMeta } from "@/lib/data";

export function JsonLd() {
  const featured = getFeaturedProjects();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMeta.name,
    jobTitle: siteMeta.title,
    email: siteMeta.email,
    url: siteMeta.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wichita",
      addressRegion: "KS",
      addressCountry: "US"
    },
    sameAs: [siteMeta.github, siteMeta.linkedin],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "LangGraph",
      "RAG",
      "Agentic AI"
    ],
    worksFor: {
      "@type": "Organization",
      name: "UnitedHealth Group"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteMeta.name} Portfolio`,
    url: siteMeta.url,
    description: siteMeta.hero,
    author: {
      "@type": "Person",
      name: siteMeta.name
    }
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work",
    itemListElement: featured.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${siteMeta.url}/work/${project.slug}`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
