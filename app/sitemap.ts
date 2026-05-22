import type { MetadataRoute } from "next";

import { buildLog, projects, siteMeta } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMeta.url;
  const staticRoutes = ["", "/experience", "/work", "/build-log", "/about", "/contact"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...buildLog.map((entry) => ({
      url: `${base}/build-log/${entry.slug}`,
      lastModified: new Date(entry.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
