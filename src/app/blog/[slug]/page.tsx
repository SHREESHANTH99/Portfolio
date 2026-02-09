import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getPostSlugs, formatDate, getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/data";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import components from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

/**
 * Blog Post Page
 * 
 * Dynamic route for individual blog posts.
 * Uses next-mdx-remote for server-side MDX compilation.
 */

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get adjacent posts for navigation
    const allPosts = getAllPosts();
    const currentIndex = allPosts.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

    return (
        <div className="pt-24 pb-16">
            {/* Back Link */}
            <div className="container-custom py-6">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm
            text-[hsl(var(--color-text-secondary))]
            hover:text-[hsl(var(--color-text-primary))] transition-colors"
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
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Blog
                </Link>
            </div>

            {/* Article Header */}
            <header className="container-custom pb-8">
                <div className="max-w-3xl">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm 
            text-[hsl(var(--color-text-tertiary))] mb-4">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{post.readingTime}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold 
            text-[hsl(var(--color-text-primary))] mb-4 leading-tight">
                        {post.title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-6">
                        {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full
                  bg-[hsl(var(--color-bg-secondary))]
                  border border-[hsl(var(--color-border))]
                  text-[hsl(var(--color-text-secondary))]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-6 border-t border-[hsl(var(--color-border))]">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center
                bg-[hsl(var(--color-bg-tertiary))] text-[hsl(var(--color-text-secondary))]
                font-semibold"
                            aria-hidden="true"
                        >
                            {post.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                            <p className="font-medium text-[hsl(var(--color-text-primary))]">
                                {post.author}
                            </p>
                            <p className="text-sm text-[hsl(var(--color-text-tertiary))]">
                                {siteConfig.role.split(" | ")[0]}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="container-custom pb-12">
                <div className="prose max-w-3xl">
                    <MDXRemote
                        source={post.content}
                        components={components}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [
                                    rehypeSlug,
                                    [rehypePrismPlus, { ignoreMissing: true }],
                                ],
                            },
                        }}
                    />
                </div>
            </article>

            {/* Post Navigation */}
            <nav
                className="container-custom py-8 border-t border-[hsl(var(--color-border))]"
                aria-label="Post navigation"
            >
                <div className="max-w-3xl grid sm:grid-cols-2 gap-4">
                    {prevPost ? (
                        <Link
                            href={`/blog/${prevPost.slug}`}
                            className="group p-4 rounded-lg bg-[hsl(var(--color-bg-secondary))]
                border border-[hsl(var(--color-border))]
                hover:border-[hsl(var(--color-border-hover))] transition-colors"
                        >
                            <span className="text-xs text-[hsl(var(--color-text-tertiary))] mb-1 block">
                                ← Previous
                            </span>
                            <span className="font-medium text-[hsl(var(--color-text-primary))]
                group-hover:text-[hsl(var(--color-accent-primary))] transition-colors
                line-clamp-1">
                                {prevPost.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextPost && (
                        <Link
                            href={`/blog/${nextPost.slug}`}
                            className="group p-4 rounded-lg bg-[hsl(var(--color-bg-secondary))]
                border border-[hsl(var(--color-border))]
                hover:border-[hsl(var(--color-border-hover))] transition-colors
                sm:text-right"
                        >
                            <span className="text-xs text-[hsl(var(--color-text-tertiary))] mb-1 block">
                                Next →
                            </span>
                            <span className="font-medium text-[hsl(var(--color-text-primary))]
                group-hover:text-[hsl(var(--color-accent-primary))] transition-colors
                line-clamp-1">
                                {nextPost.title}
                            </span>
                        </Link>
                    )}
                </div>
            </nav>

            {/* Share / Actions */}
            <section className="container-custom pb-8">
                <div className="max-w-3xl p-6 rounded-xl bg-[hsl(var(--color-bg-secondary))]
          border border-[hsl(var(--color-border))]">
                    <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-4">
                        Found this article helpful? Let me know your thoughts.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={`mailto:${siteConfig.email}?subject=Re: ${encodeURIComponent(post.title)}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2
                text-sm font-medium rounded-lg
                bg-[hsl(var(--color-bg-tertiary))]
                text-[hsl(var(--color-text-secondary))]
                hover:text-[hsl(var(--color-text-primary))]
                hover:bg-[hsl(var(--color-bg-elevated))]
                transition-colors"
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
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Send Feedback
                        </a>
                        <a
                            href={siteConfig.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2
                text-sm font-medium rounded-lg
                bg-[hsl(var(--color-bg-tertiary))]
                text-[hsl(var(--color-text-secondary))]
                hover:text-[hsl(var(--color-text-primary))]
                hover:bg-[hsl(var(--color-bg-elevated))]
                transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Follow on GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
