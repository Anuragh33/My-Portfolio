import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { AmbientBackground } from "@/components/ambient-background";
import { FileMenu } from "@/components/file-menu";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { StatusBar } from "@/components/status-bar";
import { instrumentSerif, jetbrainsMono } from "@/lib/fonts";
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
    <html lang="en" className={`${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AmbientBackground />
        <FileMenu />
        <main id="main-content" className="relative z-10 pb-16 pt-10">
          {children}
        </main>
        <div className="content-grid relative z-10 pb-16">
          <SiteFooter />
        </div>
        <StatusBar />
        <Analytics />
      </body>
    </html>
  );
}
