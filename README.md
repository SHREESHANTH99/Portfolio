# Shreeshanth Shetty - Developer Portfolio

A high-end, engineering-driven portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX for blog posts
- **3D Effects**: Three.js with React Three Fiber
- **Deployment**: Vercel-ready

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── projects/page.tsx  # Projects page
│   │   ├── blog/              # Blog pages
│   │   │   ├── page.tsx       # Blog index
│   │   │   └── [slug]/page.tsx # Dynamic blog post
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ProjectCard.tsx    # Project display card
│   │   ├── NetworkBackground.tsx  # Three.js background
│   │   ├── HomeBackground.tsx # Client wrapper for Three.js
│   │   └── mdx-components.tsx # Custom MDX components
│   ├── content/
│   │   └── blog/              # MDX blog posts
│   ├── lib/
│   │   ├── data.ts            # Site configuration & data
│   │   └── blog.ts            # Blog utilities
│   └── types/
│       └── mdx.d.ts           # MDX type definitions
├── public/                    # Static assets
└── next.config.ts             # Next.js configuration
```

## Features

### Pages
- **Home**: Minimal hero with Three.js animated background
- **About**: Technical bio, skills, education, achievements
- **Projects**: Categorized project showcase (Full-Stack & Blockchain)
- **Blog**: MDX-based technical writing with syntax highlighting
- **Contact**: Email, GitHub, LinkedIn links

### Design System
- Dark theme by default
- Clean, modern typography (Inter + JetBrains Mono)
- Subtle hover animations
- Accessible (ARIA, contrast, keyboard nav)
- Responsive across all devices

### Technical Features
- SEO-optimized with OpenGraph metadata
- Three.js background with:
  - FPS throttling for performance
  - `prefers-reduced-motion` support
  - Non-interactive (autonomous animation)
- MDX blog with:
  - Syntax highlighting (Prism)
  - Custom callout components
  - Reading time estimates
  - Tag system

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

No environment variables required for basic setup.

## Blog Posts

Blog posts are written in MDX and stored in `src/content/blog/`. Each post requires frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2024-01-15"
tags: ["Tag1", "Tag2"]
author: "Your Name"
---

Your content here...
```

### Custom Components

**Callout**:
```mdx
<Callout type="info" title="Note">
  Your callout content here.
</Callout>
```

Types: `info`, `warning`, `error`, `success`

## Architecture Decisions

1. **App Router**: Using Next.js App Router for better layouts and server components
2. **Client Components for Three.js**: Dynamic import with SSR disabled in a client component wrapper
3. **File-based Blog**: MDX files with frontmatter for simple content management
4. **next-mdx-remote**: Server-side MDX compilation for blog posts
5. **Tailwind v4**: Using the latest Tailwind with `@theme` directive

## Customization

### Personal Data
Edit `src/lib/data.ts` to update:
- Site configuration (name, role, links)
- About page content
- Project information
- Skills list

### Styling
Modify `src/app/globals.css` to change:
- Color palette (CSS custom properties)
- Typography
- Animation timings

## License

MIT License - feel free to use this as a template for your own portfolio.

## Author

**Shreeshanth Shetty**
- GitHub: [@SHREESHANTH99](https://github.com/SHREESHANTH99)
- LinkedIn: [Shreeshanth Shetty](https://www.linkedin.com/in/shreeshanth-shetty-38b86a331)
- Email: shreeshanthshetty@gmail.com
