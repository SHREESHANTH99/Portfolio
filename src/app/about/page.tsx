import type { Metadata } from "next";
import { aboutData, skills, siteConfig } from "@/lib/data";
import SkillIcon from "@/components/SkillIcon";

/**
 * About Page
 * 
 * Features:
 * - Concise technical bio
 * - Focus areas with technology stacks
 * - Education and achievements
 * - Skills grid with SVG icons
 */

export const metadata: Metadata = {
    title: "About",
    description: `Learn more about ${siteConfig.name} - a Full-Stack Engineer and Smart Contract Developer focused on building production-grade systems.`,
};

export default function AboutPage() {
    return (
        <div className="pt-40 pb-20">
            {/* Header */}
            <section className="container-custom" aria-labelledby="about-heading">
                <div className="max-w-3xl mb-16">
                    <h1
                        id="about-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold 
              text-[hsl(var(--color-text-primary))] mb-8"
                    >
                        {aboutData.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-[hsl(var(--color-accent-primary))]
            font-medium mb-10">
                        {aboutData.subtitle}
                    </p>
                    <p className="text-lg text-[hsl(var(--color-text-secondary))] leading-relaxed">
                        {aboutData.intro}
                    </p>
                </div>
            </section>

            {/* Focus Areas */}
            <section
                className="py-32 bg-[hsl(var(--color-bg-secondary))]"
                aria-labelledby="focus-heading"
            >
                <div className="container-custom">
                    <h2
                        id="focus-heading"
                        className="text-2xl font-bold text-[hsl(var(--color-text-primary))] mb-16"
                    >
                        Focus Areas
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {aboutData.focus.map((area, index) => (
                            <article
                                key={area.title}
                                className="p-10 rounded-xl bg-[hsl(var(--color-bg-tertiary))]
                  border border-[hsl(var(--color-border))]
                  hover:border-[hsl(var(--color-border-hover))] transition-colors"
                            >
                                <div className="flex items-start gap-5 mb-8">
                                    <div
                                        className={`p-4 rounded-lg shrink-0
                      ${index === 0
                                                ? "bg-[hsl(var(--color-accent-primary)/0.1)] text-[hsl(var(--color-accent-primary))]"
                                                : index === 1
                                                    ? "bg-[hsl(var(--color-accent-ethereum)/0.1)] text-[hsl(var(--color-accent-ethereum))]"
                                                    : index === 2
                                                        ? "bg-[hsl(var(--color-accent-secondary)/0.1)] text-[hsl(var(--color-accent-secondary))]"
                                                        : "bg-[hsl(var(--color-warning)/0.1)] text-[hsl(var(--color-warning))]"
                                            }`}
                                        aria-hidden="true"
                                    >
                                        {index === 0 ? (
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                            </svg>
                                        ) : index === 1 ? (
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                            </svg>
                                        ) : index === 2 ? (
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold text-[hsl(var(--color-text-primary))] pt-1">
                                        {area.title}
                                    </h3>
                                </div>

                                <p className="text-[hsl(var(--color-text-secondary))] mb-8 leading-relaxed">
                                    {area.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {area.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-sm rounded-md
                        bg-[hsl(var(--color-bg-elevated))] 
                        text-[hsl(var(--color-text-tertiary))]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Grid */}
            <section className="container-custom py-32" aria-labelledby="skills-heading">
                <h2
                    id="skills-heading"
                    className="text-2xl font-bold text-[hsl(var(--color-text-primary))] mb-16 pt-12"
                >
                    Technical Skills
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Languages */}
                    <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6
              text-[hsl(var(--color-text-tertiary))]">
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.languages.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md
                    bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))]
                    transition-colors"
                                >
                                    <SkillIcon name={skill} className="w-4 h-4 text-[hsl(var(--color-accent-primary))]" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6
              text-[hsl(var(--color-text-tertiary))]">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.frontend.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md
                    bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))]
                    transition-colors"
                                >
                                    <SkillIcon name={skill} className="w-4 h-4 text-[hsl(var(--color-accent-secondary))]" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6
              text-[hsl(var(--color-text-tertiary))]">
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.backend.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md
                    bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))]
                    transition-colors"
                                >
                                    <SkillIcon name={skill} className="w-4 h-4 text-[hsl(var(--color-warning))]" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Blockchain */}
                    <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))]">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6
              text-[hsl(var(--color-text-tertiary))]">
                            Blockchain
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.blockchain.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md
                    bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))]
                    transition-colors"
                                >
                                    <SkillIcon name={skill} className="w-4 h-4 text-[hsl(var(--color-accent-ethereum))]" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-secondary))]
            border border-[hsl(var(--color-border))] sm:col-span-2 lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6
              text-[hsl(var(--color-text-tertiary))]">
                            Tools & DevOps
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.tools.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md
                    bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))]
                    transition-colors"
                                >
                                    <SkillIcon name={skill} className="w-4 h-4 text-[hsl(var(--color-text-tertiary))]" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Achievements */}
            <section
                className="py-32 bg-[hsl(var(--color-bg-tertiary))]"
            // aria-labelledby="education-heading"
            >
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Education */}
                        <div>
                            <h2
                                id="education-heading"
                                className="text-2xl font-bold text-[hsl(var(--color-text-primary))] mb-12"
                            >
                                Education
                            </h2>
                            <div className="p-10 rounded-xl bg-[hsl(var(--color-bg-secondary))]
                border border-[hsl(var(--color-border))]">
                                <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-4">
                                    {aboutData.education.institution}
                                </h3>
                                <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-3">
                                    {aboutData.education.degree}
                                </p>
                                <p className="text-[hsl(var(--color-text-tertiary))]">
                                    {aboutData.education.period}
                                </p>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div>
                            <h2 className="text-2xl font-bold text-[hsl(var(--color-text-primary))] mb-12">
                                Achievements
                            </h2>
                            <ul className="space-y-6">
                                {aboutData.achievements.map((achievement, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-5 p-6 rounded-xl
                      bg-[hsl(var(--color-bg-secondary))]
                      border border-[hsl(var(--color-border))]"
                                    >
                                        <span
                                            className="flex items-center justify-center w-8 h-8 rounded-full
                        bg-[hsl(var(--color-accent-primary)/0.1)]
                        text-[hsl(var(--color-accent-primary))]
                        text-base font-bold shrink-0 mt-0.5"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                        <span className="text-lg text-[hsl(var(--color-text-secondary))]">
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 bg-[hsl(var(--color-bg-secondary))]">
                <div className="container-custom text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--color-text-primary))] mb-8">
                        Let&apos;s Build Something
                    </h2>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))] mb-12 max-w-lg mx-auto">
                        Interested in working together on a production-grade system or blockchain project?
                    </p>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="btn-primary text-lg px-8 py-4"
                    >
                        Get in Touch
                        <svg
                            className="w-6 h-6"
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
                    </a>
                </div>
            </section>
        </div>
    );
}
