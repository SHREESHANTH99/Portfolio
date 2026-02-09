"use client";

/**
 * Navigation Component with Transparent Backdrop
 * 
 * Key Features:
 * - Semi-transparent backdrop (shows background animation)
 * - Visible navigation bar on all devices
 * - Smooth slide-in drawer
 * - Professional design
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            {/* Navigation Bar */}
            <header
                className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300
                    ${isScrolled
                        ? "bg-[#0a0e13]/98 backdrop-blur-xl border-b border-white/10 shadow-lg"
                        : "bg-[#0a0e13]/80 backdrop-blur-md border-b border-white/5 lg:bg-transparent lg:border-transparent"
                    }`}
                role="banner"
            >
                {/* Container */}
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 max-w-7xl mx-auto">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="relative z-[110] font-bold text-lg sm:text-xl lg:text-2xl
                                text-white hover:text-[hsl(var(--color-accent-primary))] 
                                transition-colors flex-shrink-0"
                            aria-label={`${siteConfig.name} - Home`}
                        >
                            <span className="hidden sm:inline">{siteConfig.name}</span>
                            <span className="sm:hidden text-xl font-black tracking-tighter">
                                SS<span className="text-[hsl(var(--color-accent-primary))]">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Desktop navigation">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 xl:px-5 py-2.5 rounded-full text-sm xl:text-base font-medium 
                                        transition-all duration-300
                                        ${pathname === item.href
                                            ? "text-white bg-white/10 shadow-sm backdrop-blur-sm"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                        }`}
                                    aria-current={pathname === item.href ? "page" : undefined}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Desktop Social Icons */}
                            <div className="ml-4 pl-4 border-l border-white/10 flex items-center gap-3">
                                <SocialLink href={siteConfig.github} icon="github" label="GitHub" />
                                <SocialLink href={siteConfig.linkedin} icon="linkedin" label="LinkedIn" />
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="relative z-[110] lg:hidden w-11 h-11 sm:w-12 sm:h-12 
                                flex items-center justify-center
                                text-white rounded-lg
                                hover:bg-white/10 active:bg-white/15
                                transition-colors flex-shrink-0"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="w-6 h-5 flex flex-col justify-between relative">
                                <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                    ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
                                />
                                <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300
                                    ${isOpen ? "opacity-0 scale-0" : ""}`}
                                />
                                <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                    ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Backdrop - LIGHTER to show background animation */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[95] lg:hidden 
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <aside
                id="mobile-menu"
                className={`fixed top-0 right-0 bottom-0 
                    w-[280px] xs:w-[300px] sm:w-[340px]
                    z-[100] lg:hidden
                    bg-[#0f1419]/95 backdrop-blur-xl
                    border-l border-white/10
                    shadow-2xl
                    transform transition-transform duration-300 ease-out
                    flex flex-col
                    overflow-hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                aria-hidden={!isOpen}
            >
                {/* Drawer Header */}
                <div className="flex-shrink-0 h-16 sm:h-18 flex items-center justify-between px-5 sm:px-6
                    border-b border-white/10">
                    <span className="text-lg font-bold text-white">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-lg
                            text-gray-400 hover:text-white
                            hover:bg-white/10 active:bg-white/15
                            transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-5 sm:px-6 py-6 overflow-y-auto" aria-label="Mobile navigation">
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Pages
                    </span>
                    <ul className="space-y-1.5">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-4 py-3.5 rounded-xl
                                        text-base font-medium transition-all duration-200
                                        ${pathname === item.href
                                            ? "text-white bg-white/10 shadow-sm"
                                            : "text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Drawer Footer - Social Links */}
                <div className="flex-shrink-0 p-5 sm:p-6 border-t border-white/10 bg-white/[0.02]">
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
                        Connect
                    </span>
                    <div className="flex items-center justify-center gap-4">
                        <SocialLink href={siteConfig.github} icon="github" label="GitHub" size="lg" mobile />
                        <SocialLink href={siteConfig.linkedin} icon="linkedin" label="LinkedIn" size="lg" mobile />
                    </div>
                </div>
            </aside>
        </>
    );
}

// Social Link Component
function SocialLink({
    href,
    icon,
    label,
    size = "sm",
    mobile = false
}: {
    href: string;
    icon: 'github' | 'linkedin';
    label: string;
    size?: "sm" | "lg";
    mobile?: boolean;
}) {
    const isLg = size === 'lg';

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg transition-all flex items-center justify-center
                border border-white/10
                ${mobile
                    ? "text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
                active:scale-95
                ${isLg ? "p-4" : "p-2.5"}`}
            aria-label={label}
        >
            {icon === 'github' ? (
                <svg
                    className={isLg ? "w-6 h-6" : "w-5 h-5"}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg
                    className={isLg ? "w-6 h-6" : "w-5 h-5"}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )}
        </a>
    );
}