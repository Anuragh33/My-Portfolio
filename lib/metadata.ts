import type { Metadata } from "next";

import { siteMeta } from "@/lib/data";

export const siteUrl = new URL(siteMeta.url);

export function createPageMetadata({
  title,
  description,
  path = ""
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl);

  return {
    title,
    description,
    alternates: { canonical: url.pathname },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteMeta.name,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteMeta.name} portfolio` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"]
    }
  };
}
