# Anuragh Portfolio Spec

## Positioning
- Present Anuragh as a full-stack AI product developer.
- Balance recruiter trust and client appeal equally.
- Lead with products, not a resume dump.
- Voice should feel sharp, human, systems-minded, and slightly experimental.

## Experience Goals
- Futuristic premium visual tone.
- Selective signature motion instead of motion everywhere.
- Strong first impression within the hero.
- Case studies should explain product, architecture, AI/system layer, and outcomes.

## Core Routes
- `/`
- `/work`
- `/work/[slug]`
- `/build-log`
- `/about`
- `/contact`

## Featured Work
1. `Oliver` as the flagship in-progress case study.
2. `Work Search` as the applied full-stack AI systems case study.
3. `Bhasha` as the consumer product and progression UX case study.
4. `Idea.AI` as the extensible AI-native collaboration platform case study.

## Content Model
- `projects`
  - slug
  - title
  - tagline
  - status
  - role
  - timeline
  - summary
  - problem
  - solution
  - coreExperience
  - architecture
  - aiInvolvement
  - challenges
  - outcome
  - whyItMatters
  - reflection
  - stack
  - capabilities
  - links
- `buildLog`
  - slug
  - title
  - summary
  - date
  - topic
  - content

## Technical Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP available for future hero/scroll enhancements
- Structured local content data
- Contact API route with server validation

## Follow-up Enhancements
- Connect contact route to an email delivery provider.
- Add a downloadable resume asset and analytics hooks.
- Add richer visual frames or screenshots for each case study.
- Add one deeper GSAP-powered scroll moment if performance remains strong.
