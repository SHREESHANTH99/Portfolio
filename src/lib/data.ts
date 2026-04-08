/**
 * Site Configuration and Data
 * 
 * Centralized data store for the portfolio.
 * This makes it easy to update content without diving into components.
 */

export const siteConfig = {
  name: "Shreeshanth Shetty",
  role: "Full-Stack Engineer | Smart Contract Developer",
  tagline: "Building production-grade systems with a focus on performance, security, and clean architecture.",
  
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
  
  intro: `I'm a full-stack engineer with a strong focus on building production-grade systems. My work spans from designing robust backend APIs and database architectures to developing secure smart contracts on Ethereum.`,
  
  focus: [
    {
      title: "Backend & Infrastructure",
      description: "Designing scalable REST and GraphQL APIs, implementing efficient database schemas with MongoDB and PostgreSQL, and building real-time systems with WebSocket integration.",
      technologies: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL", "Socket.IO"],
    },
    {
      title: "Smart Contract Development",
      description: "Writing secure Solidity contracts with emphasis on gas optimization, implementing EIP standards (ERC-721, EIP-5192), and building comprehensive test suites with Hardhat.",
      technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Wagmi", "Viem", "ethers.js"],
    },
    {
      title: "Frontend Engineering",
      description: "Building responsive, accessible interfaces with React and Next.js. Focus on component architecture, state management, and performance optimization.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    },
    {
      title: "Systems Thinking",
      description: "Approaching problems with an understanding of trade-offs between consistency, availability, and partition tolerance. Designing for maintainability and extensibility.",
      technologies: ["System Design", "Architecture Patterns", "Testing", "CI/CD"],
    },
  ],
  
  education: {
    institution: "Indian Institute of Information Technology design and manufacturing , Jabalpur",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "Aug 2024 - May 2028",
  },
  
  achievements: [
    "1st Place at 'Can You Hack It' (24-hour hackathon, 100+ teams)",
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
    description: "AI-powered anime discovery platform with hybrid recommendation engine.",
    longDescription: "A full-stack anime web application for discovering, tracking, and getting AI-powered recommendations. Built with a hybrid recommendation system combining content-based filtering with TF-IDF vectorization and popularity scoring.",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "Three.js", "scikit-learn"],
    github: "https://github.com/SHREESHANTH99/Animatch",
    highlights: [
      "Hybrid ML recommendation engine using TF-IDF with 5000 features",
      "Cold-start recommendations for new users based on popularity metrics",
      "3D Anime Poster Cube built with React Three Fiber",
      "Cosine similarity for 'similar anime' suggestions",
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
    title: "LifeCheck AI — Environmental Intelligence Platform",
    description: "Full-stack environmental intelligence platform for real-time location safety decisions.",
    longDescription: "LifeCheck AI is a full-stack environmental intelligence system designed to help users make real-time safety decisions based on environmental data. It answers a core question: Is this location safe right now, and what should I do next? The platform combines live AQI, weather, UV, and pollen signals into a unified safety verdict while coordinating AI guidance, predictive analytics, and spatial risk insights.",
    engineeringInsight: "Focused on building a reliable, real-time decision system combining distributed state, AI inference, and multi-source data aggregation.",
    category: "fullstack",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Rust", "SpaceTimeDB", "scikit-learn", "WebSockets", "Gemini AI", "ElevenLabs"],
    github: "https://github.com/SHREESHANTH99/LifeCheckAi",
    highlights: [
      "Real-time safety analysis combining AQI, weather, UV, and pollen into Safe / Caution / Unsafe verdicts",
      "AI assistant with low-latency streaming responses for contextual safety guidance",
      "ML-based water quality prediction with confidence scoring and BIS compliance analysis",
      "Interactive map for spatial risk visualization and real-time activity tracking",
      "Alert system with severity prioritization and unread tracking",
      "Voice-first safety briefings and alerts using text-to-speech",
      "FastAPI backend with modular services for safety, chat, water, and alerts",
      "SpaceTimeDB-powered shared state synchronization for multi-user real-time updates",
      "Multi-LLM orchestration across Gemini, Groq, and DeepSeek with fallback strategy",
      "Robust validation and null-safe data handling for production reliability",
      "Event-driven architecture for real-time updates and alerting",
      "Scalable external-provider integration with strong error handling and fallback paths",
    ],
  },
  {
    id: "gitwhisper",
    title: "GitWhisper — AI-Powered Git Commit Generator",
    description: "Developer CLI tool that generates meaningful commit messages from staged code diffs.",
    longDescription: "GitWhisper is a developer productivity tool that automatically generates meaningful Git commit messages using AI based on code changes. It analyzes staged diffs, builds contextual prompts, and returns concise structured commit messages that fit naturally into daily development workflows.",
    engineeringInsight: "Focused on automating developer workflows using AI with reliability and minimal latency.",
    category: "developer-tools",
    technologies: ["Python", "Git CLI", "Grok API", "Gemini AI", "Prompt Engineering"],
    github: "https://github.com/SHREESHANTH99/GitWhisper",
    highlights: [
      "Analyzes staged Git diffs and generates structured, meaningful commit messages",
      "Integrates Grok and Gemini for high-quality natural language generation",
      "CLI-based workflow for seamless integration in developer environments",
      "Context-aware understanding of code changes for accurate commit summaries",
      "Python CLI architecture using subprocess integration with Git",
      "Prompt formatting pipeline that transforms diffs into model-ready context",
      "Multi-provider AI fallback handling for resilient message generation",
      "Secure API usage with efficient request handling",
      "Robust error handling for no staged changes and API failure cases",
      "Optimized prompt engineering for concise and reliable output",
      "Lightweight design optimized for daily low-latency usage",
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
  languages: ["TypeScript", "JavaScript", "Python", "Solidity", "Rust", "C++"],
  frontend: ["React", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL", "Socket.IO"],
  blockchain: ["Hardhat", "OpenZeppelin", "Wagmi", "ethers.js", "Viem"],
  tools: ["Git", "Docker", "GitHub Actions", "Vercel", "Firebase", "Postman"],
};
