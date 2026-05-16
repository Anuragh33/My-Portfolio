import type { Metadata } from "next";

import { AmbientBackground } from "@/components/ambient-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta } from "@/lib/data";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.name} | ${siteMeta.title}`,
  description: siteMeta.hero,
  metadataBase: new URL("https://anuragh-portfolio.vercel.app"),
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.hero,
    url: "https://anuragh-portfolio.vercel.app",
    siteName: siteMeta.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.hero
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AmbientBackground />
        <SiteHeader />
        <main>{children}</main>
        <div className="content-grid">
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
