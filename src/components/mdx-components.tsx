/**
 * MDX Components
 * 
 * Custom components for rendering MDX content.
 * Includes callouts, code blocks, and other blog-specific elements.
 */

// import type { MDXComponents } from "mdx/types"; // Fix: Type import failing build
import Link from "next/link";
import React from "react";
import Mermaid from "./Mermaid";

type MDXComponents = Record<string, React.ComponentType<any> | React.ElementType>;

/**
 * Callout Component
 * Usage in MDX: <Callout type="info">Your content here</Callout>
 */
interface CalloutProps {
    type?: "info" | "warning" | "error" | "success";
    title?: string;
    children: React.ReactNode;
}

function Callout({ type = "info", title, children }: CalloutProps) {
    const icons = {
        info: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        warning: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        success: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };

    const titles = {
        info: "Info",
        warning: "Warning",
        error: "Error",
        success: "Success",
    };

    return (
        <div className={`callout callout-${type} flex gap-3 my-6`}>
            <div className="shrink-0 mt-0.5">{icons[type]}</div>
            <div>
                {title && (
                    <p className="font-semibold mb-1 text-[hsl(var(--color-text-primary))]">
                        {title}
                    </p>
                )}
                <div className="text-sm">{children}</div>
            </div>
        </div>
    );
}

/**
 * Custom MDX components
 */
const components: MDXComponents = {
    // Custom components
    Callout,

    // Override default elements
    h1: ({ children, ...props }) => (
        <h1
            className="text-3xl font-bold mt-0 mb-6 text-[hsl(var(--color-text-primary))]"
            {...props}
        >
            {children}
        </h1>
    ),

    h2: ({ children, ...props }) => (
        <h2
            className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-[hsl(var(--color-border))]
        text-[hsl(var(--color-text-primary))]"
            {...props}
        >
            {children}
        </h2>
    ),

    h3: ({ children, ...props }) => (
        <h3
            className="text-xl font-semibold mt-8 mb-3 text-[hsl(var(--color-text-primary))]"
            {...props}
        >
            {children}
        </h3>
    ),

    h4: ({ children, ...props }) => (
        <h4
            className="text-lg font-semibold mt-6 mb-2 text-[hsl(var(--color-text-primary))]"
            {...props}
        >
            {children}
        </h4>
    ),

    p: ({ children, ...props }) => (
        <p
            className="mb-5 leading-relaxed text-[hsl(var(--color-text-secondary))]"
            {...props}
        >
            {children}
        </p>
    ),

    a: ({ href, children, ...props }) => {
        const isExternal = href?.startsWith("http");

        if (isExternal) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--color-accent-primary))] underline underline-offset-2
            hover:text-[hsl(var(--color-accent-secondary))] transition-colors"
                    {...props}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                href={href || "/"}
                className="text-[hsl(var(--color-accent-primary))] underline underline-offset-2
          hover:text-[hsl(var(--color-accent-secondary))] transition-colors"
                {...props}
            >
                {children}
            </Link>
        );
    },

    ul: ({ children, ...props }) => (
        <ul className="list-disc pl-6 mb-5 space-y-2" {...props}>
            {children}
        </ul>
    ),

    ol: ({ children, ...props }) => (
        <ol className="list-decimal pl-6 mb-5 space-y-2" {...props}>
            {children}
        </ol>
    ),

    li: ({ children, ...props }) => (
        <li className="text-[hsl(var(--color-text-secondary))]" {...props}>
            {children}
        </li>
    ),

    blockquote: ({ children, ...props }) => (
        <blockquote
            className="border-l-4 border-[hsl(var(--color-accent-primary))] pl-4 my-6
        italic text-[hsl(var(--color-text-secondary))]"
            {...props}
        >
            {children}
        </blockquote>
    ),

    code: ({ children, ...props }) => {
        // Check if this is an inline code or code block
        const isInline = typeof children === "string";

        if (isInline) {
            return (
                <code
                    className="px-1.5 py-0.5 rounded bg-[hsl(var(--color-bg-tertiary))]
            font-mono text-sm text-[hsl(var(--color-accent-primary))]"
                    {...props}
                >
                    {children}
                </code>
            );
        }

        return <code {...props}>{children}</code>;
    },

    pre: ({ children, ...props }) => {
        // Extract text content from children (helper)
        const extractText = (node: any): string => {
            if (!node) return '';
            if (typeof node === 'string') return node;
            if (Array.isArray(node)) return node.map(extractText).join('');
            if (React.isValidElement(node)) return extractText((node.props as any).children);
            return '';
        };

        const className = (props as any).className || '';

        // Strategy 1: logic for nested code block
        // The structure is usually <pre><code class="language-mermaid">...</code></pre>
        if (React.isValidElement(children)) {
            const childProps = (children.props as any) || {};
            const childClassName = childProps.className || '';

            if (childClassName.includes('language-mermaid')) {
                const chartCode = extractText(childProps.children);
                return <Mermaid chart={chartCode} />;
            }
        }

        // Strategy 2: Check children array if present
        if (Array.isArray(children)) {
            const codeChild = children.find(child =>
                React.isValidElement(child) &&
                (child.props as any).className?.includes('language-mermaid')
            );

            if (codeChild) {
                const chartCode = extractText((codeChild.props as any).children);
                return <Mermaid chart={chartCode} />;
            }
        }

        // Strategy 3: logic when class is on pre tag itself (sometimes happens with rehype plugins)
        if (className.includes('language-mermaid')) {
            const chartCode = extractText(children);
            return <Mermaid chart={chartCode} />;
        }

        return (
            <pre
                className="rounded-lg overflow-x-auto p-4 my-6
            bg-[hsl(var(--color-bg-secondary))] border border-[hsl(var(--color-border))]"
                {...props}
            >
                {children}
            </pre>
        );
    },

    hr: (props) => (
        <hr className="my-8 border-t border-[hsl(var(--color-border))]" {...props} />
    ),

    table: ({ children, ...props }) => (
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm" {...props}>
                {children}
            </table>
        </div>
    ),

    th: ({ children, ...props }) => (
        <th
            className="px-4 py-2 text-left font-semibold
        bg-[hsl(var(--color-bg-tertiary))] text-[hsl(var(--color-text-primary))]
        border border-[hsl(var(--color-border))]"
            {...props}
        >
            {children}
        </th>
    ),

    td: ({ children, ...props }) => (
        <td
            className="px-4 py-2 border border-[hsl(var(--color-border))]
        text-[hsl(var(--color-text-secondary))]"
            {...props}
        >
            {children}
        </td>
    ),

    img: (props) => (
        <img
            {...props}
            className="rounded-lg my-6 w-full"
            loading="lazy"
        />
    ),

    strong: ({ children, ...props }) => (
        <strong className="font-semibold text-[hsl(var(--color-text-primary))]" {...props}>
            {children}
        </strong>
    ),

    em: ({ children, ...props }) => (
        <em className="italic" {...props}>
            {children}
        </em>
    ),
};

export default components;
export { Callout };
