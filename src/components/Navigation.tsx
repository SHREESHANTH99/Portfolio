"use client";

/**
 * Navigation Component - Cyberpunk Style
 * 
 * Key Features:
 * - Glassmorphic navbar with cyan glow effects
 * - Animated mobile drawer
 * - Neon accents and borders
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

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
                        ? "bg-[#020408]/95 backdrop-blur-xl border-b border-[#00f7ff]/20 shadow-[0_0_30px_rgba(0,247,255,0.1)]"
                        : "bg-transparent border-b border-transparent"
                    }`}
                role="banner"
            >
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 max-w-7xl mx-auto">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="relative z-[110] group flex-shrink-0"
                            aria-label={`${siteConfig.name} - Home`}
                        >
                            <span className="font-['Orbitron'] font-bold text-lg sm:text-xl lg:text-2xl
                                text-white tracking-wider
                                group-hover:text-[#00f7ff] transition-colors duration-300">
                                <span className="hidden sm:inline">{siteConfig.name.split(" ")[0]}</span>
                                <span className="text-[#00f7ff]">.</span>
                                <span className="hidden sm:inline text-[#00f7ff]/70">{siteConfig.name.split(" ")[1]?.[0]}</span>
                            </span>
                            <span className="sm:hidden font-['Orbitron'] font-black text-xl tracking-tighter">
                                SS<span className="text-[#00f7ff]">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1" aria-label="Desktop navigation">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm font-['JetBrains_Mono'] uppercase tracking-wider
                                        transition-all duration-300 group
                                        ${pathname === item.href
                                            ? "text-[#00f7ff]"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                    aria-current={pathname === item.href ? "page" : undefined}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {pathname === item.href && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 
                                            bg-[#00f7ff] rounded-full shadow-[0_0_10px_#00f7ff]" />
                                    )}
                                    <span className="absolute inset-0 bg-[#00f7ff]/5 rounded 
                                        opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}

                            {/* Social Icons */}
                            <div className="ml-4 pl-4 border-l border-[#00f7ff]/20 flex items-center gap-2">
                                <SocialLink href={siteConfig.github} icon="github" label="GitHub" />
                                <SocialLink href={siteConfig.linkedin} icon="linkedin" label="LinkedIn" />
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="relative z-[110] lg:hidden w-11 h-11 
                                flex items-center justify-center
                                text-[#00f7ff] rounded-lg border border-[#00f7ff]/30
                                hover:bg-[#00f7ff]/10 hover:border-[#00f7ff]/50
                                transition-all duration-300 flex-shrink-0"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="w-5 h-4 flex flex-col justify-between relative">
                                <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                    ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                                />
                                <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300
                                    ${isOpen ? "opacity-0 scale-0" : ""}`}
                                />
                                <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                    ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[95] lg:hidden 
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <aside
                id="mobile-menu"
                className={`fixed top-0 right-0 bottom-0 
                    w-[280px] sm:w-[320px]
                    z-[100] lg:hidden
                    bg-[#020408]/98 backdrop-blur-xl
                    border-l border-[#00f7ff]/20
                    shadow-[-10px_0_40px_rgba(0,247,255,0.1)]
                    transform transition-transform duration-300 ease-out
                    flex flex-col
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                aria-hidden={!isOpen}
            >
                {/* Drawer Header */}
                <div className="flex-shrink-0 h-16 flex items-center justify-between px-5
                    border-b border-[#00f7ff]/20">
                    <span className="font-['Orbitron'] text-lg font-bold text-[#00f7ff] tracking-wider">
                        MENU
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-lg
                            text-[#00f7ff] border border-[#00f7ff]/30
                            hover:bg-[#00f7ff]/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto" aria-label="Mobile navigation">
                    <span className="block text-xs font-['JetBrains_Mono'] text-[#00f7ff]/50 uppercase tracking-widest mb-4 px-2">
                    </span>
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-4 py-3 rounded-lg
                                        font-['JetBrains_Mono'] text-sm uppercase tracking-wider
                                        transition-all duration-200 border
                                        ${pathname === item.href
                                            ? "text-[#00f7ff] bg-[#00f7ff]/10 border-[#00f7ff]/30"
                                            : "text-gray-400 hover:text-white border-transparent hover:bg-[#00f7ff]/5"
                                        }`}
                                >
                                    {pathname === item.href && (
                                        <span className="w-1.5 h-1.5 bg-[#00f7ff] rounded-full mr-3 
                                            shadow-[0_0_10px_#00f7ff]" />
                                    )}
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Drawer Footer */}
                <div className="flex-shrink-0 p-5 border-t border-[#00f7ff]/20">
                    <span className="block text-xs font-['JetBrains_Mono'] text-[#00f7ff]/50 uppercase tracking-widest mb-4 text-center">
                    </span>
                    <div className="flex items-center justify-center gap-4">
                        <SocialLink href={siteConfig.github} icon="github" label="GitHub" size="lg" />
                        <SocialLink href={siteConfig.linkedin} icon="linkedin" label="LinkedIn" size="lg" />
                    </div>
                </div>
            </aside>
        </>
    );
}

function SocialLink({
    href,
    icon,
    label,
    size = "sm"
}: {
    href: string;
    icon: 'github' | 'linkedin';
    label: string;
    size?: "sm" | "lg";
}) {
    const isLg = size === 'lg';

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg transition-all flex items-center justify-center
                border border-[#00f7ff]/30 text-gray-400
                hover:text-[#00f7ff] hover:border-[#00f7ff]/50 hover:bg-[#00f7ff]/10
                hover:shadow-[0_0_15px_rgba(0,247,255,0.2)]
                ${isLg ? "p-3" : "p-2"}`}
            aria-label={label}
        >
            {icon === 'github' ? (
                <svg
                    className={isLg ? "w-5 h-5" : "w-4 h-4"}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg
                    className={isLg ? "w-5 h-5" : "w-4 h-4"}
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
