import Link from "next/link";
import { siteConfig, projects, skills } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import SkillIcon from "@/components/SkillIcon";

/**
 * Home Page
 * 
 * Features:
 * - Minimal hero section with name and role
 * - Subtle Three.js animated background (lazy loaded via client component)
 * - Featured projects section
 * - Quick links to other pages
 * 
 * Architecture Decision: Using a client component wrapper for NetworkBackground
 * because dynamic imports with ssr: false must be in client components in Next.js App Router.
 */

export default function HomePage() {
  // Get 2 featured projects (1 fullstack, 1 blockchain)
  const featuredProjects = [
    projects.find((p) => p.category === "fullstack"),
    projects.find((p) => p.category === "blockchain"),
  ].filter(Boolean);

  return (
    <>


      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        aria-labelledby="hero-heading"
      >
        <div className="container-custom py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10
              rounded-full bg-[hsl(var(--color-bg-secondary)/0.8)]
              border border-[hsl(var(--color-border))]
              animate-fade-in">
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--color-success))]
                animate-pulse-subtle" aria-hidden="true" />
              <span className="text-sm font-medium text-[hsl(var(--color-text-secondary))]">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-bold tracking-tight mb-6 animate-fade-in stagger-1"
            >
              <span className="text-[hsl(var(--color-text-primary))]">
                {siteConfig.name.split(" ")[0]}
              </span>
              <br />
              <span className="gradient-text">
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Role */}
            <p className="text-xl sm:text-2xl text-[hsl(var(--color-text-secondary))]
              font-medium mb-8 animate-fade-in stagger-2">
              {siteConfig.role}
            </p>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[hsl(var(--color-text-tertiary))]
              max-w-xl mx-auto mb-12 animate-fade-in stagger-3">
              {siteConfig.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5
              animate-fade-in stagger-4">
              <Link
                href="/projects"
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
              >
                View Projects
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
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
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2
          animate-bounce hidden md:block" aria-hidden="true">
          <svg
            className="w-7 h-7 text-[hsl(var(--color-text-tertiary))]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24 bg-[hsl(var(--color-bg-secondary))]" aria-labelledby="skills-heading">
        <div className="container-custom text-center">
          <h2 id="skills-heading" className="text-xl font-semibold text-[hsl(var(--color-text-secondary))] mb-12">
            Core Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[...skills.languages.slice(0, 3), ...skills.blockchain.slice(0, 3)].map((skill, i) => (
              <div
                key={skill}
                className="group flex flex-col items-center gap-3 p-4
                  min-w-[100px] rounded-xl
                  hover:bg-[hsl(var(--color-bg-tertiary))]
                  transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-[hsl(var(--color-bg-tertiary))]
                  border border-[hsl(var(--color-border))]
                  text-[hsl(var(--color-text-secondary))]
                  group-hover:text-[hsl(var(--color-text-primary))]
                  group-hover:scale-110 group-hover:border-[hsl(var(--color-accent-primary))]
                  transition-all duration-300">
                  <SkillIcon name={skill} className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-[hsl(var(--color-text-tertiary))]
                  group-hover:text-[hsl(var(--color-text-primary))] transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32" aria-labelledby="featured-heading">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2
                id="featured-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold 
                  text-[hsl(var(--color-text-primary))] mb-4"
              >
                Featured Work
              </h2>
              <p className="text-lg text-[hsl(var(--color-text-secondary))]">
                Recent projects showcasing full-stack and blockchain development.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2
                text-base font-medium text-[hsl(var(--color-accent-primary))]
                hover:underline underline-offset-4"
            >
              View all
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) =>
              project ? (
                <ProjectCard key={project.id} project={project} index={index} />
              ) : null
            )}
          </div>

          <div className="mt-12 sm:hidden text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2
                text-base font-medium text-[hsl(var(--color-accent-primary))]
                hover:underline underline-offset-4"
            >
              View all projects
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-32 bg-[hsl(var(--color-bg-secondary))]" aria-labelledby="blog-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="blog-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold 
                text-[hsl(var(--color-text-primary))] mb-6"
            >
              Technical Writing
            </h2>
            <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-12">
              Deep dives into blockchain internals, smart contract architecture,
              and backend engineering patterns.
            </p>
            <Link
              href="/blog"
              className="btn-secondary text-lg px-8 py-4"
            >
              Read the Blog
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
