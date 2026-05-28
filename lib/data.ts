export type ProjectLink = {
  label: string;
  href: string;
  kind: "demo" | "repo" | "details";
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  role: string;
  timeline: string;
  summary: string;
  problem: string;
  solution: string;
  coreExperience: string[];
  architecture: string[];
  aiInvolvement: string;
  challenges: string[];
  outcome: string;
  whyItMatters: string;
  reflection: string;
  stack: string[];
  capabilities: string[];
  links: ProjectLink[];
  featured: boolean;
  order: number;
  accent: string;
  heroImage: string;
  metrics: ProjectMetric[];
  impactBullets: string[];
  filterTags: string[];
};

export type BuildLogEntry = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  topic: string;
  content: string[];
};

export const siteMeta = {
  name: "Anuragh Ragidimilli",
  title: "Full-Stack AI Developer",
  email: "anuraghragidimilli@icloud.com",
  github: "https://github.com/Anuragh33",
  linkedin: "https://www.linkedin.com/in/anuraghragidimilli/",
  url: "https://anuragh-portfolio.vercel.app",
  resumePath: "/Anuragh_Resume.pdf",
  availability: "Open to full-time software engineering roles",
  hero:
    "Full-Stack AI Developer with 3.5+ years of experience building intelligent products, scalable systems, and applied AI workflows end to end.",
  subhero:
    "I build production-grade full-stack products and embed AI where it creates real leverage."
};

export const careerBridge =
  "Between Wipro and UnitedHealth Group, I completed my MS in Computer Science and focused on independent product builds, AI experiments, and strengthening full-stack delivery before joining enterprise healthcare engineering.";

export const proofPoints = [
  "3.5+ years shipping production software",
  "Enterprise AI and agentic workflows",
  "Next.js, TypeScript, Python, FastAPI",
  "Healthcare systems, product engineering, and automation"
];

export const outcomes: Array<{ value: string; label: string }> = [
  { value: "3.5+", label: "years production experience" },
  { value: "200+", label: "bots supported through Bot Center" },
  { value: "4", label: "featured projects shipped" },
  { value: "AI", label: "workflows built for real leverage" }
];

export const workFilters = [
  { id: "all", label: "All work" },
  { id: "ai", label: "AI systems" },
  { id: "full-stack", label: "Full-stack" },
  { id: "flagship", label: "Flagship" }
] as const;

export type WorkFilterId = (typeof workFilters)[number]["id"];

export const capabilities = [
  {
    title: "AI Systems",
    description:
      "Agentic workflows, RAG pipelines, model integrations, and automation that solve real product problems."
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "From cinematic interfaces to backend architecture, I build end-to-end systems that feel coherent."
  },
  {
    title: "Scalable Backend Workflows",
    description:
      "APIs, schedulers, data flows, and orchestration patterns that make products operationally useful."
  },
  {
    title: "Modern Interfaces",
    description:
      "Premium, responsive UI systems that make complex products feel clear, fast, and trustworthy."
  }
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "Wichita State University",
    timeline: "2021 – 2023",
    detail:
      "Graduate coursework spanning machine learning, distributed systems, and applied AI, completed between Wipro and UnitedHealth Group."
  }
];

export const experiences = [
  {
    role: "Software Developer",
    company: "UnitedHealth Group",
    timeline: "Aug 2023 - Present",
    summary:
      "Building enterprise-grade AI workflows, privacy-first RAG systems, and modern product interfaces inside a healthcare environment where reliability and data boundaries matter.",
    highlights: [
      "Architected agentic AI workflows using LangGraph and Python for multi-step reasoning and automation.",
      "Built privacy-first RAG pipelines with FastAPI and quantized LLMs for secure on-premise document workflows.",
      "Delivered high-performance React and Next.js interfaces, including Bot Center for managing 200+ bots."
    ]
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    timeline: "Sep 2020 - Sep 2021",
    summary:
      "Worked across cloud infrastructure, REST APIs, frontend development, and data performance improvements for production software in a high-availability environment.",
    highlights: [
      "Modernized AWS infrastructure with EC2, S3, and VPC to improve operational efficiency and availability.",
      "Built RESTful APIs with FastAPI and Go to reduce integration time and strengthen reliability.",
      "Developed responsive React interfaces and improved database performance across MySQL, MongoDB, and Redis."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "oliver",
    title: "Oliver",
    tagline: "A macOS app that gives you invisible AI help during meetings—live transcription, chat, and screenshots without showing up on screen share.",
    status: "macOS app · In progress",
    role: "Solo builder — product, frontend, and native shell",
    timeline: "2025 – Present",
    summary:
      "Oliver is a Tauri desktop app for macOS. It floats above your windows, transcribes mic and system audio, streams answers from the AI provider you choose, and stays hidden from Zoom, Teams, and screen recordings.",
    problem:
      "During interviews and meetings you often need fast answers without breaking flow—alt-tabbing, typing in another app, or showing an obvious AI window on a shared screen.",
    solution:
      "I built Oliver as a native overlay excluded from screen capture (`NSWindowSharingNone`), with local SQLite history, encrypted API keys on-device, Whisper-based STT (local or API), and direct calls to OpenAI, Claude, Gemini, Groq, OpenRouter, or Ollama—no backend relay.",
    coreExperience: [
      "Toggle the overlay with global hotkeys and get streamed AI responses in a floating panel",
      "Live transcription from microphone and system audio (BlackHole) with optional screenshot context",
      "Onboarding for provider keys, STT model choice, prompt presets, and usage history in a local dashboard"
    ],
    architecture: [
      "Tauri 2 + Rust for macOS windowing, permissions, and SQLite via tauri-plugin-sql",
      "Vite + React + TypeScript for the dashboard and overlay UI",
      "Provider adapters with AES-GCM-SIV encrypted key storage; all traffic goes straight to the provider you configure"
    ],
    aiInvolvement:
      "Whisper handles speech-to-text; LLM providers handle chat. The product work is making that pipeline feel instant, private, and invisible to everyone else on the call.",
    challenges: [
      "macOS screen-recording and audio routing (BlackHole multi-output setup)",
      "Keeping latency low while streaming tokens and transcripts",
      "Shipping a notarized desktop app with sensible defaults for hotkeys and permissions"
    ],
    outcome:
      "Active development with a public marketing site and open-source app repo. Oliver is my flagship native AI product.",
    whyItMatters:
      "It shows I can ship past the browser: OS APIs, privacy-sensitive data handling, and real-time AI UX in a tool people would actually run during a live meeting.",
    reflection:
      "The hardest part is not the model call—it is trust: local storage, no telemetry, and a UI that never leaks into the recording.",
    stack: ["Tauri", "Rust", "TypeScript", "React", "SQLite", "Whisper", "macOS"],
    capabilities: ["Desktop apps", "Real-time AI", "Native integrations", "Privacy-first design"],
    links: [
      { label: "Live site", href: "https://oliver-site-psi.vercel.app", kind: "demo" },
      { label: "GitHub", href: "https://github.com/Anuragh33/Oliver", kind: "repo" },
      { label: "Project details", href: "/work/oliver", kind: "details" }
    ],
    featured: true,
    order: 1,
    accent: "from-blue-400/30 via-blue-900/20 to-transparent",
    heroImage: "/projects/oliver.png",
    metrics: [
      { label: "Platform", value: "macOS desktop" },
      { label: "Providers", value: "6 LLM + Whisper" }
    ],
    impactBullets: [
      "Invisible to screen share via native macOS window exclusion",
      "No backend relay—keys and history stay on your machine",
      "Combines STT, vision (screenshots), and multi-provider chat in one overlay"
    ],
    filterTags: ["flagship", "ai", "full-stack"]
  },
  {
    slug: "work-search",
    title: "Work Search",
    tagline: "AI-powered job search across many sources—with resume parsing, skill matching, ATS scoring, and application tracking.",
    status: "Full-stack product · Shipped",
    role: "Solo full-stack engineer",
    timeline: "2025 – 2026",
    summary:
      "Work Search is a Next.js frontend and FastAPI backend that aggregates listings, ingests resumes (PDF/DOCX), scores fit with embeddings and LLM helpers, and runs scheduled pipelines to keep jobs fresh.",
    problem:
      "Job search spreads across boards, ATS portals, and spreadsheets. Resumes, skill matching, and apply links are rarely in one place.",
    solution:
      "I built a unified app: Clerk auth, Neon Postgres for users and applications, a Python service layer for search/scoring/conversion, and automation for recurring job ingestion—with direct-apply URL handling for Lever, Greenhouse, and Ashby.",
    coreExperience: [
      "Upload or paste a resume and get structured skills, domains, and match scores against stored jobs",
      "Search and filter listings from many sources with quality gates and embedding-based matching",
      "Track applications, export tailored outputs (including LaTeX resume paths), and optional LinkedIn flows via Nango"
    ],
    architecture: [
      "Next.js 16 + Clerk on the frontend; FastAPI orchestrating search, storage, and AI services",
      "Services: job_search, resume_converter, skill_extractor, embedding_matcher, ats_scorer, scoring_engine, pipeline_scheduler, job_store",
      "Neon/Postgres for users and application history; background pipelines for ongoing discovery"
    ],
    aiInvolvement:
      "LLMs and embeddings power resume parsing, tailoring, domain classification, and match explanations—not a generic chat box on top of a job board.",
    challenges: [
      "Normalizing heterogeneous job feeds and improving direct-apply links per ATS",
      "Making resume extraction reliable enough for scoring and filters",
      "Balancing automated pipelines with clear UX when matches update"
    ],
    outcome:
      "Deployed demo with a documented backend repo—an end-to-end example of product UX plus Python orchestration for real job-search workflows.",
    whyItMatters:
      "Recruiters can see full-stack delivery: typed frontend, serious Python backend, auth, persistence, and applied AI in one shipped project.",
    reflection:
      "Job search is a workflow problem. The win is matching, persistence, and automation—not another wrapper around a single API.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "Clerk", "Neon/Postgres", "OpenAI", "Embeddings"],
    capabilities: ["AI systems", "Backend orchestration", "Data pipelines", "Product UX"],
    links: [
      { label: "Live demo", href: "https://worksearch-33ha.vercel.app/sign-in", kind: "demo" },
      { label: "GitHub", href: "https://github.com/Anuragh33/work-search", kind: "repo" },
      { label: "Project details", href: "/work/work-search", kind: "details" }
    ],
    featured: true,
    order: 2,
    accent: "from-sky-300/25 via-blue-400/10 to-transparent",
    heroImage: "/projects/work-search.png",
    metrics: [
      { label: "Sources", value: "20+ job feeds" },
      { label: "Backend", value: "FastAPI services" }
    ],
    impactBullets: [
      "End-to-end pipeline: ingest jobs, parse resumes, score, and track applications",
      "ATS-aware apply links and quality gates on incoming listings",
      "Shows how I wire Next.js, Clerk, Postgres, and Python AI services together"
    ],
    filterTags: ["ai", "full-stack"]
  },
  {
    slug: "bhasha",
    title: "Bhasha",
    tagline: "A Duolingo-style language learning web app—currently focused on Spanish—with lessons, hearts, quests, shop, and an admin CMS.",
    status: "Web app · Shipped",
    role: "Full-stack product engineer",
    timeline: "2025",
    summary:
      "Bhasha is a Next.js learning product with Clerk auth, gamified progression (units, lessons, challenges), leaderboard and shop pages, and a React-Admin style dashboard to manage courses and content.",
    problem:
      "I wanted a real consumer app with daily return loops—not a tutorial repo—so I could practice content modeling, auth, and motivation mechanics.",
    solution:
      "I implemented a full learn path: marketing landing, signed-in learn/quests/shop/leaderboard routes, challenge APIs, progress upserts, and admin CRUD for courses, units, lessons, and challenge options.",
    coreExperience: [
      "Pick up where you left off on /learn with unit banners, lesson buttons, and challenge completion",
      "Earn and spend in-app currency through quests and the shop",
      "Admins create and edit curriculum without touching the database by hand"
    ],
    architecture: [
      "Next.js App Router with (marketing) and (main) route groups",
      "Clerk for authentication; API routes for courses, challenges, and progress",
      "Drizzle ORM + Postgres for relational lesson data; server actions for progress and subscriptions"
    ],
    aiInvolvement:
      "No generative AI layer—this project is about product UX, schema design, and shipping a cohesive learning loop.",
    challenges: [
      "Modeling units, lessons, and challenges so content stays consistent",
      "Keeping the learner UI fast and clear on mobile",
      "Separating marketing, learner, and admin surfaces without duplicating logic"
    ],
    outcome:
      "Live demo on Vercel with open-source repo—a complete small-scale learning product, not a marketing mock.",
    whyItMatters:
      "It balances my AI-heavy work with proof I can ship polished, stateful consumer experiences recruiters can click through.",
    reflection:
      "Retention comes from tight loops—one more lesson, one quest, one leaderboard check—not from feature sprawl.",
    stack: ["Next.js", "TypeScript", "Clerk", "Drizzle ORM", "Postgres", "React Admin patterns"],
    capabilities: ["Consumer UX", "Content modeling", "Auth flows", "Admin tooling"],
    links: [
      { label: "Live demo", href: "https://bhasha-xi.vercel.app", kind: "demo" },
      { label: "GitHub", href: "https://github.com/Anuragh33/Bhasha", kind: "repo" },
      { label: "Project details", href: "/work/bhasha", kind: "details" }
    ],
    featured: true,
    order: 3,
    accent: "from-blue-400/25 via-sky-300/10 to-transparent",
    heroImage: "/projects/bhasha.png",
    metrics: [
      { label: "Language", value: "Spanish (v1)" },
      { label: "Surfaces", value: "Learn + admin" }
    ],
    impactBullets: [
      "Full curriculum model with units, lessons, and challenges",
      "Gamification: quests, shop, leaderboard, and progress persistence",
      "Admin CMS for courses and challenge content"
    ],
    filterTags: ["full-stack"]
  },
  {
    slug: "idea-ai",
    title: "Idea.AI",
    tagline: "A Next.js starter for AI meeting and agent products—auth, agents, Stream video calls, tRPC APIs, Inngest jobs, and Polar billing.",
    status: "Platform starter · Shipped",
    role: "Full-stack engineer",
    timeline: "2025",
    summary:
      "Idea.AI is a production-shaped starter I use to spin up AI collaboration ideas quickly: sign-in, agent CRUD, meeting rooms with Stream, background workflows, and upgrade paths wired through better-auth and Polar.",
    problem:
      "New AI product ideas repeat the same scaffolding—auth, database, agents, realtime video, webhooks, and background jobs—before you get to the actual idea.",
    solution:
      "I packaged the common stack into one repo: dashboard routes for agents and meetings, call pages, tRPC routers, Inngest functions, Drizzle on Neon, OpenAI + Stream integrations, and billing hooks so experiments start from a real foundation.",
    coreExperience: [
      "Create and manage agents, then join meetings with Stream-powered video/chat",
      "Typed client/server contracts via tRPC and TanStack Query",
      "Upgrade flow and webhooks for subscriptions without rebuilding auth each time"
    ],
    architecture: [
      "Next.js 15 App Router with (auth), (dashboard), and call layouts",
      "tRPC + Drizzle ORM + Neon; Inngest for durable background work",
      "better-auth, Polar SDK, Stream video/chat, OpenAI realtime helpers"
    ],
    aiInvolvement:
      "Agents and meeting flows are the AI surface area—OpenAI and Stream are integrated where collaboration actually happens, not as a disconnected chat widget.",
    challenges: [
      "Keeping the template modular enough to fork without carrying dead weight",
      "Wiring webhooks, Inngest, and auth without fragile local-only setups",
      "Making realtime and agent state understandable in the UI"
    ],
    outcome:
      "Open-source repo and live demo—ready to clone for the next AI meeting or agent product experiment.",
    whyItMatters:
      "Shows platform thinking: I do not only ship one-off features; I build reusable bases that compress time to a credible MVP.",
    reflection:
      "A starter only earns its keep if it is opinionated about the hard parts—auth, realtime, jobs—and flexible everywhere else.",
    stack: ["Next.js", "TypeScript", "tRPC", "Inngest", "Stream", "OpenAI", "Drizzle", "better-auth", "Polar"],
    capabilities: ["Platform architecture", "Realtime systems", "Background jobs", "Auth and billing"],
    links: [
      { label: "Live demo", href: "https://idea-ai-eight.vercel.app/sign-in", kind: "demo" },
      { label: "GitHub", href: "https://github.com/Anuragh33/Idea.AI", kind: "repo" },
      { label: "Project details", href: "/work/idea-ai", kind: "details" }
    ],
    featured: true,
    order: 4,
    accent: "from-indigo-300/20 via-blue-400/10 to-transparent",
    heroImage: "/projects/idea-ai.png",
    metrics: [
      { label: "Stack", value: "tRPC + Inngest" },
      { label: "Realtime", value: "Stream video" }
    ],
    impactBullets: [
      "Agents, meetings, and call routes already wired",
      "Auth, billing webhooks, and background jobs included",
      "Designed to fork for new AI collaboration products"
    ],
    filterTags: ["ai", "full-stack"]
  }
];

export const buildLog: BuildLogEntry[] = [
  {
    slug: "oliver-identity-systems",
    title: "Building invisible UI on macOS",
    summary:
      "What Oliver is teaching me about native windowing, screen-capture exclusion, and keeping AI useful during live calls.",
    date: "2026-05-15",
    topic: "Interaction experiments",
    content: [
      "Desktop AI has different constraints than web: permissions, audio routing, and latency all show up in the first week.",
      "Oliver forced me to treat privacy as a feature—local SQLite, encrypted keys, and direct provider calls.",
      "The overlay only works if it stays off the recording; native APIs are not optional here."
    ]
  },
  {
    slug: "workflow-products-win",
    title: "Why workflow products usually matter more than AI wrappers",
    summary:
      "A note from building Work Search and enterprise agentic systems: leverage appears when intelligence sits inside a workflow with memory and outcomes.",
    date: "2026-05-10",
    topic: "AI systems",
    content: [
      "Models are useful, but they are not the product. The surrounding system is the product.",
      "Matching, persistence, confidence, handoffs, and automation create more real user value than conversational novelty alone.",
      "That belief shapes how I now build AI into products from the start."
    ]
  },
  {
    slug: "consumer-loops-in-bhasha",
    title: "Small feedback loops create more retention than large feature lists",
    summary:
      "Bhasha pushed me to think more carefully about pacing, motivation, and the feeling of returning to a product.",
    date: "2026-04-28",
    topic: "Product UX",
    content: [
      "Progress bars, lesson states, and practice modes look small in isolation, but together they become the product rhythm.",
      "Consumer products demand emotional clarity as much as technical clarity.",
      "That discipline makes my enterprise and AI work better too."
    ]
  }
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured).sort((a, b) => a.order - b.order);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getBuildLogEntry(slug: string) {
  return buildLog.find((entry) => entry.slug === slug);
}

export function projectMatchesFilter(project: Project, filter: WorkFilterId) {
  if (filter === "all") {
    return true;
  }

  return project.filterTags.includes(filter);
}
