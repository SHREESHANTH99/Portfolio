"use client";

/**
 * HomeClient Component
 * 
 * Client-side wrapper for the home page to enable Three.js background.
 * This is needed because dynamic imports with ssr: false must be in client components.
 */

import dynamic from "next/dynamic";

// Lazy load the Three.js background to avoid SSR issues
const NetworkBackground = dynamic(
    () => import("@/components/NetworkBackground"),
    { ssr: false }
);

export default function HomeBackground() {
    return <NetworkBackground />;
}
