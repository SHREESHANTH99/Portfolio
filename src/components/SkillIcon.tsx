import React from "react";
import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiSolidity,
  SiCplusplus,
  // Frontend
  SiReact,
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiFramer,
  // Backend
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  // Blockchain
  SiEthereum,
  // Tools
  SiGit,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

type SkillIconProps = {
  name: string;
  className?: string;
};

export default function SkillIcon({
  name,
  className = "w-5 h-5",
}: SkillIconProps) {
  const iconMap: Record<string, React.ElementType> = {
    // Languages
    javascript: SiJavascript,
    typescript: SiTypescript,
    python: SiPython,
    rust: SiRust,
    solidity: SiSolidity,
    "c++": SiCplusplus,
    // Frontend
    react: SiReact,
    "next.js": SiNextdotjs,
    "three.js": SiThreedotjs,
    "tailwind css": SiTailwindcss,
    "framer motion": SiFramer,
    // Backend
    "node.js": SiNodedotjs,
    nestjs: SiNestjs,
    express: SiExpress,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    "socket.io": SiSocketdotio,
    // Blockchain (best approximations available in SI)
    hardhat: SiEthereum,
    openzeppelin: SiEthereum,
    wagmi: SiEthereum,
    "ethers.js": SiEthereum,
    viem: SiEthereum,
    // Tools
    git: SiGit,
    docker: SiDocker,
    "github actions": SiGithubactions,
    vercel: SiVercel,
    firebase: SiFirebase,
    postman: SiPostman,
  };

  const IconComponent = iconMap[name.toLowerCase()];

  if (IconComponent) {
    return <IconComponent className={className} aria-hidden="true" />;
  }

  // Fallback: generic code icon
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
