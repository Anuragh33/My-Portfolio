# Anuragh Ragidimilli Portfolio

A cinematic, glassmorphism portfolio for Anuragh Ragidimilli, a Full-Stack AI Developer building intelligent products from interface to infrastructure.

The site is designed to feel premium and recruiter-friendly while still showing product taste, systems thinking, and AI-native engineering depth.

## Highlights

- Recruiter-first home flow with proof strip, resume CTAs, and reordered sections
- Animated gradient hero with GSAP (no heavy video on first load)
- Unified dark glass visual system across all pages
- Dedicated pages for experience, work, build log, about, and contact
- Featured case studies with impact summaries and project visuals
- Resend-powered contact form, sitemap, JSON-LD, and Vercel Analytics
- Responsive layout with reduced-motion friendly reveal animations

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion + GSAP (hero)
- Resend (contact form)
- Vercel Analytics
- Lucide React icons
- Vercel-ready deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

```text
app/
  about/
  build-log/
  contact/
  experience/
  work/
components/
lib/
public/
```

## Content

Most portfolio content lives in:

```text
lib/data.ts
```

This includes:

- Site metadata
- Experience entries
- Featured projects
- Build log entries
- Capability areas
- Proof points

Replace placeholder project visuals by updating `heroImage` in `lib/data.ts` and adding PNG/WebP files under `public/projects/` (or wire remote URLs in `next.config.ts` `images.remotePatterns`).

## Environment

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — enables contact form email delivery
- `CONTACT_TO_EMAIL` — inbox for form submissions (defaults to site email)
- `CONTACT_FROM_EMAIL` — verified Resend sender (use `onboarding@resend.dev` for testing)

## Project screenshots

Live demo screenshots are stored under `public/projects/*.png`. Regenerate after UI changes:

```bash
npm run capture-screenshots
```

Requires Playwright (installed as a dev dependency).

## Deployment

The project is ready to deploy on Vercel and is linked to GitHub: `https://github.com/Anuragh33/My-Portfolio.git`.

1. Push `main` to GitHub (Vercel auto-deploys if the repo is connected).
2. In the Vercel project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optional)
   - `CONTACT_FROM_EMAIL` (optional; use a verified domain in production)
3. Confirm the production URL matches `siteMeta.url` in `lib/data.ts` (currently `https://anuragh.fyi`).

Recommended settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: default

## Contact

Email: `anuraghragidimilli@icloud.com`

GitHub: [Anuragh33](https://github.com/Anuragh33)

LinkedIn: [anuraghragidimilli](https://www.linkedin.com/in/anuraghragidimilli/)
