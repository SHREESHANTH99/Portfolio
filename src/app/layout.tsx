import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

/**
 * Root Layout
 * 
 * Architecture Decision: Using Next.js 14 App Router with:
 * - Google Fonts optimization via next/font
 * - Centralized metadata configuration
 * - Persistent navigation and footer
 * - Skip to content link for accessibility
 */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f1012" },
    { media: "(prefers-color-scheme: light)", color: "#0f1012" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full-Stack Developer",
    "Smart Contract Developer",
    "Ethereum",
    "Solidity",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Backend Development",
    "Blockchain Development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(siteConfig.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
            focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg
            focus:bg-[hsl(var(--color-accent-primary))] focus:text-white
            focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
