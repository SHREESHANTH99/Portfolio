import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags, formatDate } from "@/lib/blog";
import { siteConfig } from "@/lib/data";

/**
 * Blog Index Page
 * 
 * Features:
 * - List of all blog posts
 * - Tags for filtering
 * - Reading time estimates
 * - SEO-optimized
 */

export const metadata: Metadata = {
    title: "Blog",
    description: `Technical articles by ${siteConfig.name} covering blockchain internals, smart contract design, backend architecture, and engineering trade-offs.`,
};

export default function BlogPage() {
    const posts = getAllPosts();
    const tags = getAllTags();

    return (
        <div className="pt-40 pb-32">
            {/* Header */}
            <section className="container-custom" aria-labelledby="blog-heading">
                <div className="max-w-3xl mb-20">
                    <h1
                        id="blog-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold 
              text-[hsl(var(--color-text-primary))] mb-8"
                    >
                        Blog
                    </h1>
                    <p className="text-xl text-[hsl(var(--color-text-secondary))]">
                        Technical deep dives into blockchain internals, smart contract architecture,
                        backend engineering patterns, and the trade-offs that shape production systems.
                    </p>
                </div>
            </section>

            {/* Tags */}
            {tags.length > 0 && (
                <section className="container-custom mb-16" aria-labelledby="tags-heading">
                    <h2 id="tags-heading" className="sr-only">Filter by Topic</h2>
                    <div className="flex flex-wrap gap-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-5 py-2.5 text-base rounded-full
                  bg-[hsl(var(--color-bg-secondary))]
                  border border-[hsl(var(--color-border))]
                  text-[hsl(var(--color-text-secondary))]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Posts List */}
            <section className="container-custom mb-32" aria-labelledby="posts-heading">
                <h2 id="posts-heading" className="sr-only">All Posts</h2>

                {posts.length === 0 ? (
                    <div className="text-center py-32">
                        <p className="text-xl text-[hsl(var(--color-text-secondary))]">
                            No posts yet. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-10 max-w-3xl mt-12 mb-12">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="group p-10 rounded-xl bg-[hsl(var(--color-bg-secondary))]
                  border border-[hsl(var(--color-border))]
                  hover:border-[hsl(var(--color-border-hover))]
                  transition-all card-hover"
                            >
                                <Link href={`/blog/${post.slug}`} className="block">
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-base text-[hsl(var(--color-text-tertiary))] mb-5">
                                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                                        <span aria-hidden="true">·</span>
                                        <span>{post.readingTime}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4
                    text-[hsl(var(--color-text-primary))]
                    group-hover:text-[hsl(var(--color-accent-primary))]
                    transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-8 line-clamp-2">
                                        {post.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 text-sm rounded
                          bg-[hsl(var(--color-bg-tertiary))]
                          text-[hsl(var(--color-text-tertiary))]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {/* Topics Overview */}
            <section
                className="py-32 bg-[hsl(var(--color-bg-secondary))]"
                aria-labelledby="topics-heading"
            >
                <div className="container-custom">
                    <h2
                        id="topics-heading"
                        className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-16"
                    >
                        Topics I Write About
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Blockchain */}
                        <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-tertiary))]
              border border-[hsl(var(--color-border))]">
                            <div
                                className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center
                  bg-[hsl(var(--color-accent-ethereum)/0.1)] text-[hsl(var(--color-accent-ethereum))]"
                                aria-hidden="true"
                            >
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-3">
                                Blockchain Internals
                            </h3>
                            <p className="text-[hsl(var(--color-text-secondary))]">
                                Ethereum, Bitcoin, consensus mechanisms, and protocol design
                            </p>
                        </div>

                        {/* Smart Contracts */}
                        <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-tertiary))]
              border border-[hsl(var(--color-border))]">
                            <div
                                className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center
                  bg-[hsl(var(--color-accent-primary)/0.1)] text-[hsl(var(--color-accent-primary))]"
                                aria-hidden="true"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-3">
                                Smart Contracts
                            </h3>
                            <p className="text-[hsl(var(--color-text-secondary))]">
                                Security patterns, gas optimization, and contract design
                            </p>
                        </div>

                        {/* Backend */}
                        <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-tertiary))]
              border border-[hsl(var(--color-border))]">
                            <div
                                className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center
                  bg-[hsl(var(--color-accent-secondary)/0.1)] text-[hsl(var(--color-accent-secondary))]"
                                aria-hidden="true"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-3">
                                Backend Architecture
                            </h3>
                            <p className="text-[hsl(var(--color-text-secondary))]">
                                APIs, databases, and distributed systems
                            </p>
                        </div>

                        {/* Trade-offs */}
                        <div className="p-8 rounded-xl bg-[hsl(var(--color-bg-tertiary))]
              border border-[hsl(var(--color-border))]">
                            <div
                                className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center
                  bg-[hsl(var(--color-warning)/0.1)] text-[hsl(var(--color-warning))]"
                                aria-hidden="true"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-xl text-[hsl(var(--color-text-primary))] mb-3">
                                Engineering Trade-offs
                            </h3>
                            <p className="text-[hsl(var(--color-text-secondary))]">
                                Decision-making in system design and architecture
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
