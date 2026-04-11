/**
 * Site Configuration and Data
 * 
 * Centralized data store for the portfolio.
 * This makes it easy to update content without diving into components.
 */

export const siteConfig = {
  name: "Shreeshanth Shetty",
  role: "Backend-Focused Engineer | Distributed Systems | AI + Real-Time Applications",
  tagline: "I build backend systems and intelligent applications focused on real-world decision making, reliability, and scalability. My work spans AI-driven platforms, real-time distributed systems, and secure backend architectures.",
  heroHighlight: "FastAPI | Python | System Design | Realtime Systems | AI Integration",
  
  // Contact information
  email: "shreeshanthshetty@gmail.com",
  phone: "+91-9967730594",
  location: "Mumbai, Maharashtra",
  
  // Social links
  github: "https://github.com/SHREESHANTH99",
  linkedin: "https://www.linkedin.com/in/shreeshanth-shetty-38b86a331",
  
  // SEO
  siteUrl: "https://shreeshanth.dev",
  description: "Full-Stack Engineer and Smart Contract Developer specializing in production-grade systems, Ethereum development, and backend architecture.",
  
  // Open Graph
  ogImage: "/og-image.png",
};

export const aboutData = {
  title: "About",
  subtitle: "Engineering systems that scale.",
  
  intro: `Hi there! I am Shreeshanth, a developer with a passion for building systems that are capable of solving problems. My expertise lies in developing solutions involving backend logic and real-time behavior of applications.`,
  systemsNote: "One thing that I enjoy is understanding the internal functioning of a system and learning about aspects such as APIs, data manipulation, and ensuring reliability even under edge conditions. In recent times, I have been focusing on building AI-based and real-time systems via initiatives such as LifeCheck AI and GitWhisper. Apart from programming, I also like to watch anime shows and learn new technologies. It was this curiosity that led me to pursue systems engineering instead of merely using systems.",
  recentBuild: "It is also my dream to stay and live in Japan since childhood. Currently, I am preparing myself to become a great backend engineer.",
  
  focus: [
    {
      title: "Scalable Backend Architectures",
      description: "Designing scalable backend architectures for production systems with clean service boundaries and dependable APIs.",
      technologies: ["FastAPI", "Node.js"],
    },
    {
      title: "Real-Time Systems",
      description: "Building real-time systems with event-driven updates, WebSocket communication, and shared state synchronization.",
      technologies: ["WebSockets", "Shared State Systems"],
    },
    {
      title: "AI Integration with Guardrails",
      description: "Integrating AI systems with strong guardrails, fallback strategies, and robust control over model behavior.",
      technologies: ["Gemini", "Grok", "Fallback Strategies"],
    },
    {
      title: "Reliability Engineering",
      description: "Handling edge cases, reliability concerns, and production-level failure scenarios through defensive engineering.",
      technologies: ["Validation", "Fault Tolerance", "Error Handling"],
    },
  ],

  engineeringFocus: [
    "Building reliable backend systems",
    "Designing real-time applications with shared state",
    "Integrating AI safely using guardrails and fallback models",
    "Handling edge cases and failure scenarios",
    "Writing clean, maintainable, production-ready code",
  ],
  
  education: {
    institution: "Indian Institute of Information Technology design and manufacturing , Jabalpur",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "Aug 2024 - May 2028",
  },
  
  achievements: [
    "Top-50 team in EIBS National Hackathon (IIT KGP) 2026, competing among 300+ submissions.",
    "Winner (1st place) at 'Can You Hack It' 24-hour inter-college hackathon (IIITDM Jabalpur) among 100+ teams.",
    "Contributed to open-source projects (MusicBrainz, Braidpool, Learning Unlimited) in Python/JavaScript and Django, demonstrating strong collaboration.",
  ],
};

// Project Categories
export type ProjectCategory = "fullstack" | "blockchain" | "developer-tools";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  engineeringInsight?: string;
  category: ProjectCategory;
  technologies: string[];
  github: string;
  liveDemo?: string;
  image?: string;
  highlights: string[];
}

export const projects: Project[] = [
  // Full-Stack Projects
  {
    id: "civicalert",
    title: "CivicAlert",
    description: "Real-time emergency incident reporting platform connecting citizens with emergency services.",
    longDescription: "A comprehensive emergency incident reporting and management platform designed to bridge the gap between citizens and emergency services. Features real-time incident reporting, verification, tracking, and resolution through an intuitive web interface with advanced mapping capabilities.",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "NestJS", "MongoDB", "Socket.IO", "Leaflet", "Firebase Auth"],
    github: "https://github.com/SHREESHANTH99/CivicAlert",
    liveDemo: "https://civic-alert-nine.vercel.app",
    highlights: [
      "Real-time incident mapping with WebSocket-based live updates",
      "Multi-level admin verification system for accuracy before dispatch",
      "Role-based access control with analytics dashboards",
      "JWT + Firebase Auth integration for secure authentication",
    ],
  },
  {
    id: "surakshanet",
    title: "SurakshaNet",
    description: "Smart disaster management platform with AI-powered risk assessment and real-time monitoring.",
    longDescription: "SurakshaNet bridges the gap between citizens and disaster response authorities through a comprehensive web platform. Built for Smart India Hackathon, it combines real-time disaster monitoring, AI-powered risk prediction, coordinated relief management, and safety education in one unified system with ISRO Bhuvan API integration.",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "Firebase", "Leaflet.js", "Twilio", "ISRO Bhuvan API", "Tailwind CSS"],
    github: "https://github.com/SHREESHANTH99/SurakshaNet",
    highlights: [
      "Real-time disaster alerts with location-based emergency notifications",
      "AI-powered risk prediction for disaster probability analysis",
      "ISRO Bhuvan API integration for precise geospatial mapping",
      "Role-based access control (Citizens vs Authorities)",
      "One-touch Emergency SOS with SMS notifications via Twilio",
    ],
  },
  {
    id: "animatch",
    title: "AniMatch",
    description: "Built a full-stack recommendation system with user behavior-based personalization.",
    longDescription: "AniMatch is a full-stack recommendation system built around user behavior-driven personalization, scalable backend recommendation APIs, and efficient content retrieval workflows. The system emphasizes data processing logic, recommendation quality, and low-latency user experiences.",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "Three.js", "scikit-learn"],
    github: "https://github.com/SHREESHANTH99/Animatch",
    highlights: [
      "Built a full-stack recommendation system with user behavior-based personalization",
      "Implemented efficient data fetching and filtering pipelines",
      "Designed scalable backend APIs for recommendation logic",
      "Developed ML ranking logic for relevance-driven suggestions",
    ],
  },
  {
    id: "elevatecv",
    title: "ElevateCV",
    description: "ATS-friendly resume builder with multiple professional templates.",
    longDescription: "Web application for creating professional resumes with an easy-to-use builder and multiple templates. Features job description matching, cover letter generation, and comprehensive user profile management.",
    category: "fullstack",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
    github: "https://github.com/SHREESHANTH99/ElevateCv",
    highlights: [
      "Multiple ATS-optimized resume templates",
      "Job description tailoring for better matches",
      "Cover letter generation system",
      "Comprehensive dashboard with profile management",
    ],
  },
  {
    id: "lifecheck-ai",
    title: "LifeCheck AI — Real-Time Environmental Intelligence Platform",
    description: "A full-stack system that evaluates environmental safety in real time using AI, machine learning, and distributed state systems.",
    longDescription: "LifeCheck AI is a full-stack real-time environmental intelligence system that evaluates location safety through AI, machine learning, and distributed state design. It aggregates multiple environmental signals, predicts water quality with confidence measures, and delivers guided actions through low-latency AI and alert orchestration.",
    engineeringInsight: "System Design | Real-Time Systems | AI Integration | Reliability",
    category: "fullstack",
    technologies: ["Python (FastAPI)", "Next.js", "SpaceTimeDB (Rust)", "Gemini AI", "Grok", "WebSockets", "ElevenLabs"],
    github: "https://github.com/SHREESHANTH99/LifeCheckAi",
    highlights: [
      "Built FastAPI backend handling real-time environmental aggregation (AQI, weather, UV, pollen)",
      "Designed ML pipeline for water quality prediction with confidence scoring and BIS compliance analysis",
      "Implemented streaming AI assistant with guardrails (Gemini + Grok fallback architecture)",
      "Built real-time shared state system using SpaceTimeDB (multi-user synchronization)",
      "Integrated voice-first interaction using ElevenLabs with fallback handling",
      "Designed alert system with severity prioritization and unread state persistence",
      "Generated unified Safe / Caution / Unsafe verdicts for real-time decision support",
    ],
  },
  {
    id: "gitwhisper",
    title: "GitWhisper — AI-Powered Git History Understanding Tool",
    description: "A local-first CLI tool that analyzes git commit history and generates human-readable summaries, changelogs, and project narratives using LLMs.",
    longDescription: "GitWhisper is a developer productivity tool that converts raw git commit history into structured, human-readable insights. Instead of manually interpreting commit logs, the tool analyzes commit sequences and generates project summaries, change explanations, changelogs, and demo scripts for presentations. The system works locally by extracting commit metadata using native git commands, structuring it into contextual project memory, and passing it through LLM pipelines for interpretation. The architecture is designed to transform low-level commit data into high-level reasoning about project evolution, intent, and impact, while supporting configurable model selection and fallback strategies across providers.",
    engineeringInsight: "Local-First Architecture | Prompt Pipelines | Multi-Model Reliability",
    category: "developer-tools",
    technologies: ["Rust", "Python", "Gemini AI", "Grok", "Git CLI"],
    github: "https://github.com/SHREESHANTH99/GitWhisper",
    highlights: [
      "Built CLI tool in Rust for performance and low overhead",
      "Designed commit-history parsing system using native git commands",
      "Engineered prompt pipelines for extracting intent and evolution from commits",
      "Integrated multiple LLM providers (Gemini, Grok) with configurable model selection",
      "Implemented structured output generation (summaries, changelogs, demo scripts)",
      "Focused on local-first architecture for privacy and developer control",
      "Designed system to convert technical logs into human-understandable narratives",
      "Helps developers quickly understand, present, and document projects by converting commit history into meaningful narratives",
    ],
  },
  {
    id: "nyxwall",
    title: "NyxWall — Campus-First Anonymous Social Platform",
    description: "Anonymous, campus-first social platform combining confessions, events, clubs, polls, profile systems, and realtime chat into one developer-friendly full-stack project.",
    longDescription: "NyxWall is a comprehensive anonymous social platform purpose-built for student communities. It combines confessions feeds with reactions and trending support, event management with RSVP and attendees pagination, club discovery with membership management, real-time polls with live results, OTP-based authentication with JWT tokens, and WebSocket-powered realtime chat. The platform emphasizes end-to-end architecture with clear separation of concerns, built-in integration smoke tests for safe deployments, and a strong foundation for both product experimentation and technical contributions.",
    engineeringInsight: "Full-Stack Architecture | Real-Time Systems | Moderation at Scale | Rate Limiting & Caching",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "WebSockets", "Docker Compose", "Celery"],
    github: "https://github.com/SHREESHANTH99/nyxwall",
    highlights: [
      "OTP login flow with JWT authentication for anonymous user sessions",
      "Anonymous confessions feed with create, vote, react, comment, report, and trending support",
      "Polls system with creation, listing with pagination, voting, and live results endpoints",
      "Events system with RSVP, attendees pagination, and ownership transfer capabilities",
      "Clubs discovery with join/leave toggles and member pagination with lead transfer",
      "Full-text search across confessions, events, clubs with fallback behavior",
      "Real-time WebSocket chat module for instant student interactions",
      "Redis-based caching strategy for hot feeds, event details, and user activity",
      "Rate limiting middleware with endpoint-specific limits and strict fail-fast mode",
      "Moderation service aligned across confessions and comments with confidence thresholding",
      "Docker Compose setup with PostgreSQL, Redis, and Alembic migration system",
      "Built-in smoke tests for key integration behaviors and Phase 3 features",
      "3D-driven landing experience with Next.js App Router and TypeScript",
    ],
  },
  
  // Blockchain Projects
  {
    id: "proofskill",
    title: "ProofSkill",
    description: "Decentralized skill verification and freelance marketplace with escrow payments.",
    longDescription: "A decentralized platform for verifying professional skills and managing freelance work. Features blockchain-powered credential NFTs (EIP-5192 soulbound tokens) and automated escrow payments with dispute resolution.",
    category: "blockchain",
    technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Next.js", "TypeScript", "Wagmi", "RainbowKit", "Viem"],
    github: "https://github.com/SHREESHANTH99/Proffskill",
    highlights: [
      "EIP-5192 compliant soulbound NFTs for skill credentials",
      "Escrow-based marketplace with 7-day dispute window",
      "Value-weighted reputation system to prevent gaming",
      "Reentrancy protection on all payment functions",
      "Comprehensive test suite with Hardhat",
    ],
  },
  {
    id: "millow",
    title: "Millow",
    description: "Decentralized real estate marketplace with NFT-based property tokenization and escrow.",
    longDescription: "A Zillow-like decentralized application for tokenized real estate built with Solidity and React. Properties are minted as ERC-721 NFTs and traded through a secure escrow system with multi-party approvals including buyer, seller, lender, and inspector roles.",
    category: "blockchain",
    technologies: ["Solidity", "Hardhat", "React", "ethers.js", "Tailwind CSS", "MetaMask"],
    github: "https://github.com/SHREESHANTH99/Zillow",
    highlights: [
      "ERC-721 NFTs representing real estate properties",
      "Multi-party escrow with buyer, seller, lender, and inspector roles",
      "Earnest deposit and inspection approval workflow",
      "Complete purchase flow with finalization and fund transfer",
      "Comprehensive Hardhat test suite for all contract functions",
    ],
  },
];

// Navigation items
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Skills organized by category
export const skills = {
  languages: ["Python", "C++", "JavaScript", "TypeScript", "Rust", "Solidity"],
  backendSystems: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "Distributed Systems"],
  databasesInfra: ["MongoDB", "Supabase", "Docker", "Linux"],
  tools: ["Git", "GitHub Actions", "Postman"],
  concepts: ["System Design", "Real-Time Systems", "API Design", "Fault Tolerance"],
};

export const highlightedWork = [
  "LifeCheck AI (Primary System Project)",
  "GitWhisper (AI Tooling Project)",
  "CivicAlert (Real-time system)",
];
