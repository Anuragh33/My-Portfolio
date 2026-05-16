export type ProjectLink = {
  label: string;
  href: string;
  kind: "demo" | "repo" | "case-study";
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
  hero:
    "Full-Stack AI Developer with 3.5+ years of experience building intelligent products, scalable systems, and applied AI workflows end to end.",
  subhero:
    "I build production-grade full-stack products and embed AI where it creates real leverage.",
  location: "Wichita, Kansas",
  personality: ["Product builder", "Systems thinker", "Curious experimentalist"]
};

export const proofPoints = [
  "3.5+ years shipping production software",
  "Enterprise AI and agentic workflows",
  "Next.js, TypeScript, Python, FastAPI",
  "Healthcare systems, product engineering, and automation"
];

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
    tagline: "An in-progress flagship product exploring AI-native workflows and expressive interface design.",
    status: "Flagship / in progress",
    role: "Founder, product designer, full-stack engineer",
    timeline: "2026 - Present",
    summary:
      "Oliver is the clearest expression of how I like to build: fast, deeply technical, visually opinionated, and focused on making intelligent workflows feel tangible.",
    problem:
      "Most productivity and AI tools feel either technically impressive or pleasant to use, but rarely both. I wanted to explore a product that carries intelligence, utility, and interface character in the same system.",
    solution:
      "I am building Oliver as an AI-native product with deliberate product framing, interaction experiments, and a system architecture designed to evolve as the product matures.",
    coreExperience: [
      "Designing a high-character product identity instead of a generic productivity shell",
      "Exploring interaction patterns that make intelligent workflows feel visible and usable",
      "Balancing rapid iteration with long-term architecture decisions"
    ],
    architecture: [
      "Full-stack application architecture optimized for fast product iteration",
      "Modular UI system to support evolving workflows and interface experiments",
      "AI-native workflow patterns layered into the product rather than bolted on"
    ],
    aiInvolvement:
      "Oliver is where I test how AI should behave inside a product experience, especially around workflow support, intelligence visibility, and user trust.",
    challenges: [
      "Defining the product while also defining its interaction language",
      "Keeping experimentation disciplined enough that the product can harden into something real",
      "Making advanced behavior feel intuitive instead of theatrical"
    ],
    outcome:
      "Still in active development, but already the strongest signal of the kind of AI-native products I want to build next.",
    whyItMatters:
      "Oliver matters because it is not just another project. It shows my product ambition, taste, and technical direction in one place.",
    reflection:
      "The most interesting AI products are not the ones with the loudest intelligence. They are the ones where intelligence disappears into confident product behavior.",
    stack: ["TypeScript", "Next.js", "Modern UI systems", "AI-native workflows"],
    capabilities: ["Product direction", "Interface systems", "Interactive design", "AI product thinking"],
    links: [
      { label: "GitHub", href: "https://github.com/Anuragh33/Oliver", kind: "repo" },
      { label: "Private source / case study only", href: "/contact", kind: "case-study" }
    ],
    featured: true,
    order: 1,
    accent: "from-[#5ed29c]/30 via-[#123f34]/20 to-transparent"
  },
  {
    slug: "work-search",
    title: "Work Search",
    tagline: "An AI-powered job search platform with resume ingestion, matching, automation, and orchestration.",
    status: "AI systems case study",
    role: "Full-stack AI engineer",
    timeline: "2025 - 2026",
    summary:
      "Work Search combines resume parsing, job aggregation, matching logic, OpenAI integration, and scheduled workflows into a practical full-stack AI system.",
    problem:
      "Job searching is fragmented, repetitive, and manual. Candidates repeat work across discovery, filtering, resume tailoring, and application tracking.",
    solution:
      "I built a platform that aggregates listings, parses resumes, scores matches, automates discovery workflows, and creates a more intelligent application pipeline.",
    coreExperience: [
      "Resume conversion and extraction into reusable candidate context",
      "Job matching and prioritization across multiple sources",
      "Workflow automation around discovery, filtering, and generated outputs"
    ],
    architecture: [
      "Next.js frontend for the product interface",
      "FastAPI backend for processing, orchestration, and integrations",
      "OpenAI-backed intelligence for parsing, generation, and decision support",
      "Scheduler and job source aggregation services for recurring automation"
    ],
    aiInvolvement:
      "AI is used where it creates leverage: resume parsing, contextual matching, generated outputs, and workflow automation rather than as a decorative assistant.",
    challenges: [
      "Coordinating multiple job sources with different structures and quality levels",
      "Turning messy resume data into reliable matching context",
      "Keeping automation useful without losing transparency for the user"
    ],
    outcome:
      "A full-stack AI workflow that demonstrates product engineering, orchestration, and applied AI in one system.",
    whyItMatters:
      "This project proves I can design AI systems where product UX, backend orchestration, and automation all have to work together.",
    reflection:
      "Good AI products are often workflow products first. The model matters, but the surrounding system matters more.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenAI", "Pipeline scheduling"],
    capabilities: ["AI systems", "Backend orchestration", "Product UX", "Automation"],
    links: [{ label: "Case study only", href: "/contact", kind: "case-study" }],
    featured: true,
    order: 2,
    accent: "from-cyan-300/25 via-[#5ed29c]/10 to-transparent"
  },
  {
    slug: "bhasha",
    title: "Bhasha",
    tagline: "A language learning product with lessons, quizzes, progress tracking, and admin content workflows.",
    status: "Product UX case study",
    role: "Full-stack product engineer",
    timeline: "2025",
    summary:
      "Bhasha is the consumer-facing product case study: learning flows, progress systems, gated progression, and content management in a polished web app.",
    problem:
      "Language learning products need a progression system that feels motivating, easy to return to, and structured enough to scale content.",
    solution:
      "I built Bhasha with lesson flows, quizzes, progress tracking, practice states, and an admin path for managing learning content.",
    coreExperience: [
      "Structured lesson progression and challenge completion",
      "Feedback loops through progress, quests, and practice modes",
      "Admin workflows for maintaining lesson data and content"
    ],
    architecture: [
      "Next.js app architecture with authenticated learning flows",
      "Clerk for identity and session management",
      "Drizzle ORM with Neon/Postgres-backed data modeling",
      "State and progression systems tuned for learner continuity"
    ],
    aiInvolvement:
      "Bhasha is less about explicit AI and more about building a product experience with strong behavioral loops, content systems, and user progression.",
    challenges: [
      "Keeping the product simple while supporting depth in lessons and progression",
      "Designing content structures that could scale beyond a single language",
      "Balancing motivation mechanics with a clean learning experience"
    ],
    outcome:
      "A shippable learning product that demonstrates consumer UX, stateful experiences, and full-stack product delivery.",
    whyItMatters:
      "Bhasha shows I can build user-facing products with rhythm, feedback, and retention-minded UX, not only backend-heavy AI systems.",
    reflection:
      "Product stickiness comes from small loops done well, not just feature count.",
    stack: ["Next.js", "TypeScript", "Clerk", "Drizzle ORM", "Neon/Postgres", "Zustand"],
    capabilities: ["Consumer UX", "State modeling", "Content workflows", "Full-stack product delivery"],
    links: [
      { label: "GitHub", href: "https://github.com/Anuragh33/Bhasha", kind: "repo" },
      { label: "Case study only", href: "/contact", kind: "case-study" }
    ],
    featured: true,
    order: 3,
    accent: "from-[#5ed29c]/25 via-lime-300/10 to-transparent"
  },
  {
    slug: "idea-ai",
    title: "Idea.AI",
    tagline: "An extensible AI collaboration platform with agents, meetings, auth, billing, and realtime workflows.",
    status: "Platform case study",
    role: "Full-stack platform engineer",
    timeline: "2025",
    summary:
      "Idea.AI is a reusable base for AI-native meeting and agent products, combining collaboration primitives, premium flows, and workflow automation.",
    problem:
      "AI product ideas often need the same foundation: auth, meetings, agents, realtime collaboration, background workflows, and monetization paths.",
    solution:
      "I built Idea.AI as a platform foundation that brings those pieces together so new AI collaboration products can move faster.",
    coreExperience: [
      "Agent and meeting workflows that can support AI-native collaboration",
      "Realtime video/chat foundations for product interaction",
      "Auth and premium paths that make the platform feel closer to production"
    ],
    architecture: [
      "Next.js and TypeScript application architecture",
      "TRPC for typed application APIs",
      "Inngest for background workflows",
      "OpenAI, Stream video/chat, Drizzle ORM, auth, and premium billing path"
    ],
    aiInvolvement:
      "AI is part of the platform layer through agents and meeting workflows, designed to become a reusable foundation for multiple product directions.",
    challenges: [
      "Keeping the foundation flexible without becoming vague",
      "Combining realtime collaboration with AI workflows",
      "Making the platform broad enough to reuse but specific enough to demonstrate depth"
    ],
    outcome:
      "A foundation for future AI-native collaboration products that proves architecture, platform thinking, and orchestration depth.",
    whyItMatters:
      "This project shows I can build not just features, but reusable product foundations for AI-native experiences.",
    reflection:
      "Reusable systems are only valuable when they still preserve momentum. Idea.AI is my attempt at getting flexibility and speed into the same foundation.",
    stack: ["Next.js", "TypeScript", "TRPC", "Inngest", "OpenAI", "Stream", "Drizzle ORM"],
    capabilities: ["Platform architecture", "AI-native product systems", "Realtime collaboration", "Workflow processing"],
    links: [
      { label: "GitHub", href: "https://github.com/Anuragh33/Idea", kind: "repo" },
      { label: "Case study only", href: "/contact", kind: "case-study" }
    ],
    featured: true,
    order: 4,
    accent: "from-emerald-300/20 via-[#5ed29c]/10 to-transparent"
  }
];

export const buildLog: BuildLogEntry[] = [
  {
    slug: "oliver-identity-systems",
    title: "Designing product identity before polishing features",
    summary:
      "What Oliver is teaching me about shaping the interaction language of a product before the surface area gets too large.",
    date: "2026-05-15",
    topic: "Interaction experiments",
    content: [
      "I have become more convinced that interface identity should be designed early, not sprinkled on after functionality works.",
      "Oliver is where I am testing how motion, structure, and product language can become part of the system itself rather than decoration.",
      "The hard part is keeping that ambition disciplined enough that the product still sharpens instead of sprawling."
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
