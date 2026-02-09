import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * Next.js Configuration
 * 
 * Architecture Decision: Using @next/mdx for MDX integration with the App Router.
 * This allows us to treat .mdx files as pages and use them with the new file-based routing.
 * 
 * Note: MDX plugins are configured in the blog/[slug]/page.tsx for server-side 
 * MDX compilation via next-mdx-remote.
 */
const nextConfig: NextConfig = {
  // Enable MDX pages
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  
  // Required for Three.js to work properly with SSR
  transpilePackages: ["three"],
  
  // Image optimization for external sources
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// Create MDX configuration
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
