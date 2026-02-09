/**
 * Blog Utilities
 * 
 * Functions for reading and processing MDX blog posts.
 * 
 * Architecture Decision: Using file-system based content management
 * for simplicity and performance. Posts are stored as MDX files with
 * frontmatter metadata.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// Blog posts directory
const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  readingTime: string;
}

/**
 * Get all blog post slugs
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }
  
  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    tags: data.tags || [],
    author: data.author || "Shreeshanth Shetty",
    readingTime: readingTime(content).text,
    content,
  };
}

/**
 * Get all blog posts with metadata (sorted by date, newest first)
 */
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs();
  
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      
      // Return metadata only (exclude content for list pages)
      const { content, ...meta } = post;
      return meta;
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
