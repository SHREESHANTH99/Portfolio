import type { Metadata } from "next";
import { projects, siteConfig } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

/**
 * Projects Page
 * 
 * Features:
 * - Grouped by category (Full-Stack / Blockchain)
 * - Project cards with details and links
 * - Responsive grid layout
 */

export const metadata: Metadata = {
    title: "Projects",
    description: `Explore ${siteConfig.name}'s portfolio of full-stack applications and Ethereum smart contract projects.`,
};

export default function ProjectsPage() {
    const fullstackProjects = projects.filter((p) => p.category === "fullstack");
    const blockchainProjects = projects.filter((p) => p.category === "blockchain");

    return (
        <div className="pt-40 pb-32">
            {/* Header */}
            <section className="container-custom" aria-labelledby="projects-heading">
                <div className="max-w-3xl mb-24">
                    <h1
                        id="projects-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold 
              text-[hsl(var(--color-text-primary))] mb-8"
                    >
                        Projects
                    </h1>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))]">
                        A collection of full-stack applications and smart contract systems.
                        Each project emphasizes clean architecture, testing, and production-ready code.
                    </p>
                </div>
            </section>

            {/* Full-Stack Projects */}
            <section
                className="container-custom mb-16 "
                aria-labelledby="fullstack-heading"
            >
                <div className="flex items-center gap-5 mb-12">
                    <div
                        className="p-4 rounded-lg
              bg-[hsl(var(--color-accent-primary)/0.1)] 
              text-[hsl(var(--color-accent-primary))]"
                        aria-hidden="true"
                    >
                        <svg
                            className="w-7 h-7"
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
                    </div>
                    <h2
                        id="fullstack-heading"
                        className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-text-primary))]"
                    >
                        Full-Stack Applications
                    </h2>
                </div>

                <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-16 max-w-2xl">
                    REST/GraphQL APIs, authentication systems, database design, real-time features,
                    and scalable architectures.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mb-12">
                    {fullstackProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* Blockchain Projects */}
            <section
                className="py-32 bg-[hsl(var(--color-bg-secondary))]"
                aria-labelledby="blockchain-heading"
            >
                <div className="container-custom">
                    <div className="flex items-center gap-5 mb-12">
                        <div
                            className="p-4 rounded-lg
                bg-[hsl(var(--color-accent-ethereum)/0.1)] 
                text-[hsl(var(--color-accent-ethereum))]"
                            aria-hidden="true"
                        >
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                            </svg>
                        </div>
                        <h2
                            id="blockchain-heading"
                            className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-text-primary))]"
                        >
                            Ethereum / Solidity
                        </h2>
                    </div>

                    <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-16 max-w-2xl">
                        Smart contract development with emphasis on security patterns, gas optimization,
                        comprehensive testing, and DApp integration.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {blockchainProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Philosophy */}
            <section className="container-custom py-32" aria-labelledby="philosophy-heading">
                <h2
                    id="philosophy-heading"
                    className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-16 mt-10"
                >
                    Engineering Philosophy
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
                    {/* Testing */}
                    <div className="p-10 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <div
                            className="w-14 h-14 rounded-lg mb-8 flex items-center justify-center
                bg-[hsl(var(--color-success)/0.1)] text-[hsl(var(--color-success))]"
                            aria-hidden="true"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-4">
                            Testing First
                        </h3>
                        <p className="text-lg text-[hsl(var(--color-text-secondary))]">
                            Comprehensive test suites with unit, integration, and end-to-end coverage.
                            For smart contracts: fuzz testing and invariant checks.
                        </p>
                    </div>

                    {/* Security */}
                    <div className="p-10 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <div
                            className="w-14 h-14 rounded-lg mb-8 flex items-center justify-center
                bg-[hsl(var(--color-accent-ethereum)/0.1)] text-[hsl(var(--color-accent-ethereum))]"
                            aria-hidden="true"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-4">
                            Security Awareness
                        </h3>
                        <p className="text-lg text-[hsl(var(--color-text-secondary))]">
                            Reentrancy guards, access control patterns, input validation,
                            and following established security best practices.
                        </p>
                    </div>

                    {/* Clean Code */}
                    <div className="p-10 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <div
                            className="w-14 h-14 rounded-lg mb-8 flex items-center justify-center
                bg-[hsl(var(--color-accent-primary)/0.1)] text-[hsl(var(--color-accent-primary))]"
                            aria-hidden="true"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-4">
                            Clean Architecture
                        </h3>
                        <p className="text-lg text-[hsl(var(--color-text-secondary))]">
                            Separation of concerns, modular design, explicit dependencies,
                            and code that clearly communicates intent.
                        </p>
                    </div>
                </div>
            </section>

            {/* GitHub CTA */}
            <section className="container-custom mt-16">
                <div className="p-16 rounded-xl bg-[hsl(var(--color-bg-secondary))]
          border border-[hsl(var(--color-border))] text-center">
                    <h2 className="text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-6">
                        View More on GitHub
                    </h2>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))] mb-12 max-w-md mx-auto">
                        Explore more repositories, contributions, and code samples.
                    </p>
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-lg px-8 py-4"
                    >
                        <svg
                            className="w-6 h-6"
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
                        Visit GitHub Profile
                    </a>
                </div>
            </section>
        </div>
    );
}
