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
export type ProjectCategory = "fullstack" | "blockchain";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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
