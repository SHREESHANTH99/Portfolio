import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

/**
 * Contact Page
 * 
 * Features:
 * - Email, GitHub, LinkedIn links
 * - Clean, minimal design
 * - Accessible contact cards
 */

export const metadata: Metadata = {
    title: "Contact",
    description: `Get in touch with ${siteConfig.name} for collaboration opportunities, project inquiries, or technical discussions.`,
};

export default function ContactPage() {
    const contactLinks = [
        {
            label: "Email",
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
            description: "Best for project inquiries and collaboration",
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            label: "GitHub",
            value: "SHREESHANTH99",
            href: siteConfig.github,
            description: "View source code and contributions",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            value: "Shreeshanth Shetty",
            href: siteConfig.linkedin,
            description: "Connect professionally",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="pt-40 pb-32">
            {/* Header */}
            <section className="container-custom" aria-labelledby="contact-heading">
                <div className="max-w-3xl mb-24">
                    <h1
                        id="contact-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold 
              text-[hsl(var(--color-text-primary))] mb-8"
                    >
                        Contact
                    </h1>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))]">
                        Interested in collaborating on a project, discussing technical challenges,
                        or just want to connect? Feel free to reach out.
                    </p>
                </div>
            </section>

            {/* Contact Links */}
            <section className="container-custom mb-32" aria-labelledby="links-heading">
                <h2 id="links-heading" className="sr-only">Contact Methods</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mt-12 mb-12">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.label !== "Email" ? "_blank" : undefined}
                            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                            className="group relative p-10 rounded-xl bg-[hsl(var(--color-bg-secondary))]
                border border-[hsl(var(--color-border))]
                hover:border-[hsl(var(--color-border-hover))]
                hover:bg-[hsl(var(--color-bg-tertiary))]
                transition-all card-hover"
                            aria-label={`${link.label}: ${link.value}`}
                        >
                            <div
                                className="w-16 h-16 rounded-xl mb-8 flex items-center justify-center
                  bg-[hsl(var(--color-bg-tertiary))]
                  text-[hsl(var(--color-text-secondary))]
                  group-hover:text-[hsl(var(--color-accent-primary))]
                  transition-colors"
                                aria-hidden="true"
                            >
                                {link.icon}
                            </div>

                            <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-3">
                                {link.label}
                            </h3>
                            <p className="text-lg text-[hsl(var(--color-accent-primary))] mb-4
                break-all">
                                {link.value}
                            </p>
                            <p className="text-[hsl(var(--color-text-tertiary))]">
                                {link.description}
                            </p>

                            {/* External link indicator */}
                            {link.label !== "Email" && (
                                <div
                                    className="absolute top-8 right-8 opacity-0 group-hover:opacity-100
                    transition-opacity text-[hsl(var(--color-text-tertiary))]"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </section>

            {/* Location */}
            <section
                className="py-32 bg-[hsl(var(--color-bg-secondary))]"
                aria-labelledby="location-heading"
            >
                <div className="container-custom">
                    <div className="max-w-2xl">
                        <h2
                            id="location-heading"
                            className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-12"
                        >
                            Location
                        </h2>
                        <div className="flex items-center gap-6">
                            <div
                                className="p-5 rounded-xl bg-[hsl(var(--color-bg-tertiary))]
                  text-[hsl(var(--color-text-secondary))]"
                                aria-hidden="true"
                            >
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-2xl text-[hsl(var(--color-text-primary))] mb-2">
                                    {siteConfig.location}
                                </p>
                                <p className="text-lg text-[hsl(var(--color-text-secondary))]">
                                    Open to remote opportunities worldwide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Time */}
            <section className="container-custom py-32" aria-labelledby="response-heading">
                <div className="max-w-2xl mx-auto text-center">
                    <h2
                        id="response-heading"
                        className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-8 mt-12"
                    >
                        Response Time
                    </h2>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))] mb-12">
                        I typically respond to emails within <strong className="text-[hsl(var(--color-text-primary))]">24-48 hours</strong>.
                        For urgent matters, please mention it in the subject line.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="container-custom">
                <div className="p-16 rounded-xl bg-[hsl(var(--color-bg-secondary))]
          border border-[hsl(var(--color-border))] text-center">
                    <h2 className="text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-6">
                        Ready to Start a Conversation?
                    </h2>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))] mb-12 max-w-md mx-auto">
                        Whether it&apos;s about a project, an opportunity, or just a technical discussion.
                    </p>
                    <a
                        href={`mailto:${siteConfig.email}?subject=Let's Connect`}
                        className="btn-primary text-lg px-8 py-4"
                    >
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
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Send an Email
                    </a>
                </div>
            </section>
        </div>
    );
}
