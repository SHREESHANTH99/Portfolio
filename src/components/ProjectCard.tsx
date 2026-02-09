/**
 * ProjectCard Component
 * 
 * Displays project information with hover effects.
 * Features:
 * - Subtle elevation on hover
 * - Technology stack chips
 * - External link indicators
 * - Accessible focus states
 */

import Link from "next/link";
import { Project } from "@/lib/data";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <article
            className="group relative bg-[hsl(var(--color-bg-secondary))] 
        border border-[hsl(var(--color-border))] rounded-xl
        card-hover overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Gradient accent on hover */}
            <div
                className="absolute inset-0 bg-gradient-to-br 
          from-[hsl(var(--color-accent-primary)/0.05)] 
          to-transparent opacity-0 group-hover:opacity-100 
          transition-opacity duration-300"
                aria-hidden="true"
            />

            <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-[hsl(var(--color-text-primary))]
              group-hover:text-[hsl(var(--color-accent-primary))] transition-colors">
                            {project.title}
                        </h3>
                        <span className="inline-block mt-1 text-xs font-medium uppercase tracking-wider
              text-[hsl(var(--color-text-tertiary))]">
                            {project.category === "blockchain" ? "Ethereum / Solidity" : "Full-Stack"}
                        </span>
                    </div>

                    {/* Category Icon */}
                    <div
                        className={`p-2 rounded-lg shrink-0
              ${project.category === "blockchain"
                                ? "bg-[hsl(var(--color-accent-ethereum)/0.1)] text-[hsl(var(--color-accent-ethereum))]"
                                : "bg-[hsl(var(--color-accent-primary)/0.1)] text-[hsl(var(--color-accent-primary))]"
                            }`}
                        aria-hidden="true"
                    >
                        {project.category === "blockchain" ? (
                            // Ethereum icon
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                            </svg>
                        ) : (
                            // Code icon
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[hsl(var(--color-text-secondary))]"
                        >
                            <span
                                className="inline-block w-1 h-1 rounded-full mt-1.5 shrink-0
                  bg-[hsl(var(--color-accent-primary))]"
                                aria-hidden="true"
                            />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 6).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-md
                bg-[hsl(var(--color-bg-tertiary))] 
                text-[hsl(var(--color-text-tertiary))]"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 6 && (
                        <span
                            className="px-2 py-0.5 text-xs rounded-md
                bg-[hsl(var(--color-bg-tertiary))] 
                text-[hsl(var(--color-text-tertiary))]"
                        >
                            +{project.technologies.length - 6}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5
              text-sm font-medium rounded-lg
              bg-[hsl(var(--color-bg-tertiary))]
              text-[hsl(var(--color-text-secondary))]
              hover:text-[hsl(var(--color-text-primary))]
              hover:bg-[hsl(var(--color-bg-elevated))]
              transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Code
                    </a>

                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5
                text-sm font-medium rounded-lg
                bg-[hsl(var(--color-accent-primary)/0.1)]
                text-[hsl(var(--color-accent-primary))]
                hover:bg-[hsl(var(--color-accent-primary)/0.2)]
                transition-colors"
                            aria-label={`View ${project.title} live demo`}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
