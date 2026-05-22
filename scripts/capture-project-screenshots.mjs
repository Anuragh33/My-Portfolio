import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects");

const targets = [
  { slug: "work-search", url: "https://worksearch-33ha.vercel.app/sign-in", waitMs: 4000 },
  { slug: "bhasha", url: "https://bhasha-xi.vercel.app", waitMs: 4000 },
  { slug: "idea-ai", url: "https://idea-ai-eight.vercel.app/sign-in", waitMs: 4000 },
  {
    slug: "oliver",
    url: `file://${path.join(__dirname, "..", "public", "projects", "oliver.svg")}`,
    waitMs: 500
  }
];

async function capture() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 675 },
    deviceScaleFactor: 2
  });

  for (const target of targets) {
    const page = await context.newPage();
    try {
      await page.goto(target.url, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(target.waitMs);
      const filePath = path.join(outDir, `${target.slug}.png`);
      await page.screenshot({ path: filePath, type: "png" });
      console.log(`Saved ${filePath}`);
    } catch (error) {
      console.error(`Failed ${target.slug}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

capture();
