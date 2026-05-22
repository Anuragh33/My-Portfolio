import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { AmbientBackground } from "@/components/ambient-background";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { instrumentSerif, inter } from "@/lib/fonts";
import { siteMeta } from "@/lib/data";
import { siteUrl } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.name} | ${siteMeta.title}`,
  description: siteMeta.hero,
  metadataBase: siteUrl,
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.hero,
    url: siteMeta.url,
    siteName: siteMeta.name,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteMeta.name} portfolio` }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.hero,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AmbientBackground />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <div className="content-grid">
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
