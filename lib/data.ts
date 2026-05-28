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
  title: "Full-Stack Software Engineer",
  email: "anuraghragidimilli@icloud.com",
  github: "https://github.com/Anuragh33",
  linkedin: "https://www.linkedin.com/in/anur3",
  url: "https://anuragh.fyi",
  resumePath: "/Anuragh_Resume.pdf",
  availability: "Open to full-time Software Engineer roles in AI-integrated product development",
  hero:
    "Full-Stack Software Engineer with 3.5+ years building enterprise-scale AI systems and web applications — LangGraph agentic workflows, LangChain RAG pipelines, and Next.js frontends deployed on AWS for Fortune 500 healthcare clients.",
  subhero:
    "I build enterprise-scale full-stack products and production AI systems where reliability and real-world impact matter."
};

export const careerBridge =
  "Between Wipro and UnitedHealth Group, I completed my MS in Computer Science and focused on independent product builds, AI experiments, and strengthening full-stack delivery before joining enterprise healthcare engineering.";

export const proofPoints = [
  "3.5+ years enterprise-scale software engineering",
  "LangGraph + LangChain RAG — 47% process reduction at UHG",
  "Python, TypeScript, Next.js, FastAPI, Go",
  "Fortune 500 healthcare — HIPAA-safe, zero data leakage"
];

export const outcomes: Array<{ value: string; label: string }> = [
  { value: "3.5+", label: "years production experience" },
  { value: "200+", label: "bots supported through Bot Center" },
  { value: "11", label: "featured projects built" },
  { value: "15+", label: "LLM providers integrated across projects" }
];

export const workFilters = [
  { id: "all", label: "All work" },
  { id: "ai", label: "AI systems" },
  { id: "full-stack", label: "Full-stack" }
] as const;

export type WorkFilterId = (typeof workFilters)[number]["id"];

export const capabilities = [
  {
    title: "AI Systems",
    description:
      "Production agentic workflows with LangGraph and LangChain, RAG pipelines with pgvector and Chroma, and LLM integrations that automate real enterprise tasks at scale."
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "Next.js and React frontends to FastAPI and Go backends — enterprise-scale systems deployed on AWS that work end to end and ship on time."
  },
  {
    title: "Scalable Backend Workflows",
    description:
      "RESTful and GraphQL APIs, data pipelines, and orchestration patterns with proven throughput — 45+ endpoints maintained, 50% integration time reduction."
  },
  {
    title: "Modern Interfaces",
    description:
      "Responsive, accessible UI systems built in TypeScript and Tailwind — from real-time operations dashboards to consumer learning products."
  }
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "Wichita State University",
    timeline: "Aug 2021 – Jul 2023",
    detail:
      "Graduate coursework spanning machine learning, distributed systems, and applied AI, completed between Wipro and UnitedHealth Group."
  },
  {
    degree: "BE, Electronics and Communication Engineering",
    school: "SCSVMV University",
    timeline: "Jul 2016 – Jul 2020",
    detail:
      "Bachelor of Engineering in Electronics and Communication, Kanchipuram, India."
  }
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "UnitedHealth Group",
    timeline: "Aug 2023 – Present",
    summary:
      "Building production Agentic AI workflows and on-premise RAG systems for Fortune 500 healthcare — LangGraph pipelines, HIPAA-safe document processing, and the Next.js Bot Center managing 200+ bots.",
    highlights: [
      "Architected a production Agentic AI workflow using LangGraph and Python, implementing cyclic state management and multi-turn reasoning that cut manual process handling by 47% across autonomous agents running complex multi-step healthcare tasks.",
      "Built and deployed a fully on-premise RAG pipeline using pgvector and Chroma with quantized Llama 3 and Mistral models served via FastAPI, processing 40+ HIPAA-sensitive document workflows daily with zero external data exposure.",
      "Integrated custom AI agents with internal REST APIs and SQL databases via LangChain, automating 30 cross-platform workflows and eliminating 12 hours/week of manual orchestration.",
      "Launched Bot Center, a Next.js/React.js centralized robotics management platform, automating operations for 200+ bots with real-time health dashboards and reducing operational overhead by 35%.",
      "Designed and maintained 45+ RESTful and GraphQL/Apollo endpoints using SOA patterns, enabling real-time data handling across distributed Next.js micro-frontend services."
    ]
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    timeline: "Sep 2020 – Sep 2021",
    summary:
      "Cloud infrastructure modernization, RESTful microservices, and React frontend delivery — achieving 99.9% uptime SLAs and measurable performance gains across the full stack.",
    highlights: [
      "Re-architected cloud infrastructure on AWS (EC2, S3, VPC), improving deployment reliability and reducing infrastructure incident rate by 70%, supporting 99.9% uptime SLAs across production workloads.",
      "Built RESTful microservices using FastAPI and Go, cutting system integration time by 50% and improving cross-team reliability through clearly defined service contracts.",
      "Developed responsive React front-end applications with JavaScript, HTML, and CSS, boosting user engagement by 40% and improving satisfaction scores by 20% in UX benchmarks.",
      "Optimized MySQL, MongoDB, and Redis query performance, achieving a 40% reduction in execution time and enabling real-time analytics for client-facing dashboards."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "oliver",
    title: "Oliver",
    tagline: "A macOS app that gives you invisible AI help during meetings—live transcription, chat, and screenshots without showing up on screen share.",
    status: "macOS app · Shipped",
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
    stack: ["Rust", "Tauri", "TypeScript", "React", "Whisper STT", "CoreAudio", "ScreenCaptureKit", "SQLite"],
    capabilities: ["Desktop apps", "Real-time AI", "Native integrations", "Privacy-first design"],
    links: [
      { label: "Live site", href: "https://oliver-site-psi.vercel.app", kind: "demo" },
      { label: "GitHub", href: "https://github.com/Anuragh33/Oliver", kind: "repo" },
      { label: "Project details", href: "/work/oliver", kind: "details" }
    ],
    featured: true,
    order: 2,
    accent: "from-blue-400/30 via-blue-900/20 to-transparent",
    heroImage: "/projects/oliver.png",
    metrics: [
      { label: "Platform", value: "macOS desktop" },
      { label: "Providers", value: "6 LLM + Whisper" }
    ],
    impactBullets: [
      "Invisible to screen recorders via NSWindowSharingNone — verified against Zoom, Teams, and Google Meet",
      "AES-GCM-SIV encrypted key vault in SQLite — no backend relay, no telemetry, all data on-device",
      "Whisper STT + real-time streaming across 6 providers with a global hotkey that never steals focus"
    ],
    filterTags: ["flagship", "ai", "full-stack"]
  },
  {
    slug: "vani",
    title: "Vani",
    tagline: "A cross-platform desktop dictation app — press a hotkey, speak naturally, and get AI-polished text injected into any active app via Whisper STT and Claude.",
    status: "Desktop app · In progress",
    role: "Solo builder — product, Electron shell, and AI pipeline",
    timeline: "2026 – Present",
    summary:
      "Vani is an Electron desktop app for macOS and Windows. Press a global hotkey from any app, speak naturally, and get polished text injected directly into the focused window — powered by OpenAI Whisper for transcription and Claude for cleanup, with local model support planned.",
    problem:
      "Dictation tools either require constant app-switching or are locked to one input field. There is no frictionless way to speak naturally and get edited text wherever your cursor already is.",
    solution:
      "A floating pill overlay appears on hotkey press, records mic audio with a live waveform, transcribes via Whisper, cleans up with Claude, and injects the result directly into the focused window — all without leaving your current app.",
    coreExperience: [
      "Press Cmd+Shift+Space from any app — a floating overlay appears and starts recording immediately",
      "Live waveform feedback with silence auto-stop; transcription and cleanup in under 3 seconds",
      "Full dashboard for history, notes, model settings, and usage — accessible from the system tray"
    ],
    architecture: [
      "Electron 30 main process with IPC surface for transcription, cleanup, text injection, notes, and history",
      "React 18 + Vite renderer for both the dashboard and the floating overlay pill",
      "OpenAI Whisper for STT, Claude for cleanup; electron-store with machine-specific AES encryption"
    ],
    aiInvolvement:
      "Whisper handles speech-to-text; Claude cleans up the raw transcript into polished, context-aware prose. Local model runtime via Faster-Whisper and llama.cpp is the next milestone.",
    challenges: [
      "Injecting text reliably into any active app across macOS and Windows without stealing focus",
      "Keeping the overlay lightweight and hidden from screen recorders with content protection enabled",
      "Machine-specific encryption for API key storage without a backend or cloud dependency"
    ],
    outcome:
      "Core dictation loop is fully working — hotkey, record, transcribe, clean, inject. Local model runtime and notarization are the remaining milestones before public release.",
    whyItMatters:
      "It shows I can build ambient, privacy-conscious desktop AI tools that disappear into the user's workflow rather than demanding attention.",
    reflection:
      "The hardest part is injection — every app handles focus and input events differently. Reliability here matters more than features.",
    stack: ["Electron", "React", "TypeScript", "Vite", "Tailwind CSS", "Whisper", "OpenAI", "Claude"],
    capabilities: ["Desktop apps", "Real-time AI", "Voice interfaces", "Privacy-first design"],
    links: [
      { label: "Project details", href: "/work/vani", kind: "details" }
    ],
    featured: true,
    order: 1,
    accent: "from-violet-400/30 via-purple-900/20 to-transparent",
    heroImage: "/projects/vani.svg",
    metrics: [
      { label: "Platform", value: "macOS + Windows" },
      { label: "Pipeline", value: "Whisper + Claude" }
    ],
    impactBullets: [
      "Global hotkey dictation that injects polished text into any active app without focus loss",
      "Whisper STT + Claude cleanup pipeline — transcription and editing in under 3 seconds",
      "Machine-specific encrypted key storage, content protection, and no backend relay"
    ],
    filterTags: ["ai", "full-stack"]
  },
  {
    slug: "work-search",
    title: "Work Search",
    tagline: "LangGraph-orchestrated job search with concurrent fan-out across 6 portals, a 5-dimension LLM scoring pipeline, and ATS-optimized resumes and cover letters in under 30 seconds.",
    status: "Full-stack product · Shipped",
    role: "Solo full-stack engineer",
    timeline: "2025 – 2026",
    summary:
      "Work Search is a LangGraph-orchestrated job search platform with concurrent fan-out across 6 portals (Greenhouse, Lever, Ashby, LinkedIn, Indeed), a 5-dimension LLM scoring pipeline, and ATS-optimized resume and cover letter generation in under 30 seconds — used by 40+ users with 100+ applications processed.",
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
    stack: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "LangChain", "LangGraph", "Redis", "Clerk", "Three.js"],
    capabilities: ["AI systems", "Backend orchestration", "Data pipelines", "Product UX"],
    links: [
      { label: "Live demo", href: "https://worksearch-33ha.vercel.app/sign-in", kind: "demo" },
      { label: "GitHub", href: "https://github.com/Anuragh33/work-search", kind: "repo" },
      { label: "Project details", href: "/work/work-search", kind: "details" }
    ],
    featured: true,
    order: 3,
    accent: "from-sky-300/25 via-blue-400/10 to-transparent",
    heroImage: "/projects/work-search.png",
    metrics: [
      { label: "Job portals", value: "6" },
      { label: "Users", value: "40+" }
    ],
    impactBullets: [
      "LangGraph fan-out across 6 portals (Greenhouse, Lever, Ashby, LinkedIn, Indeed) with 5-dimension LLM scoring",
      "ATS-optimized resumes and cover letters in under 30 seconds — 100+ applications processed by 40+ users",
      "Three.js globe for location filtering, Kanban pipeline, and Clerk auth — deployed on Vercel and Hugging Face Spaces"
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
    order: 4,
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
    order: 5,
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
      "Desktop AI has different constraints than web: OS permissions, audio routing, and screen-capture exclusion all show up in the first week.",
      "The hardest part of Oliver was not the model integration — it was making the window truly invisible. macOS uses NSWindowSharingNone at the window level, but you still have to verify against every major conferencing app. Zoom, Teams, and Google Meet each handle screen capture differently.",
      "Audio routing exposed another layer. Getting both mic and system audio into a single stream requires a virtual audio device like BlackHole, and the setup has to be explained clearly in onboarding or users give up before the first transcription.",
      "Privacy became a design constraint, not a feature. Storing API keys with AES-GCM-SIV encryption and keeping all history in local SQLite means there is no backend to breach. That is a trust story I can tell a user in one sentence.",
      "The lesson: native product development compresses your tolerance for abstraction. When you own the window, the audio graph, and the key store, every shortcut shows."
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
      "Every time I have built something with an AI model at its center, the product work turned out to be everything around the model, not the model itself.",
      "Work Search is a good example. The resume parser, the ATS scoring engine, the scheduler that keeps listings fresh, the normalization layer across job feeds — each of those is a harder problem than swapping in a better embedding model.",
      "The same pattern showed up at UnitedHealth Group. The agentic workflows I built with LangGraph were only as good as the memory, handoff logic, and confidence thresholds around them. Strip those out and you have a chat box.",
      "AI wrappers feel fast to ship because you skip the surrounding system. But that system is where the actual user value lives: persistence, automation, explainability, and the ability to act on results rather than just display them.",
      "I now start every AI product by designing the workflow first. Where does data come in, what decisions get made, what happens to the output? The model is one step in that chain, not the chain itself."
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
      "When I built Bhasha I kept reaching for more features — more languages, more challenge types, more analytics. Every time I shipped one, the users who stayed were not using the new features. They were completing one more lesson before closing the tab.",
      "The retention mechanic in any learning product is not the curriculum. It is the sense of forward motion. Progress bars, lesson streaks, and quest completions are not decoration — they are the core interaction loop.",
      "This forced me to think carefully about what a session ending feels like. In Bhasha, a session ends when you finish a lesson or complete a quest — a clear stopping point that also feels like a small win.",
      "Consumer products demand emotional clarity as much as technical clarity. The schema can be perfectly normalized and the API perfectly typed, but if the user cannot feel progress in thirty seconds, they leave.",
      "I carry that discipline into AI product work. An agentic system that gives useful output but no sense of what it did or what comes next is technically correct and experientially broken. The feedback loop matters even when the user is not a student."
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
