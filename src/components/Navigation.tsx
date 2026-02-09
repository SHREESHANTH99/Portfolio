"use client";

/**
 * Navigation Component
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Glass effect with blur backdrop
 * - Smooth scroll-based visibility changes
 * - ARIA-compliant for accessibility
 * - Keyboard navigation support
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
            setIsScrolled(window.scrollY > 20);
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
            if (e.key === "Escape") {
                setIsOpen(false);
            }
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
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
                    ? "glass border-b border-[hsl(var(--color-border))]"
                    : "bg-transparent"
                }`}
            role="banner"
        >
            <nav
                className="container-custom flex items-center justify-between h-16 md:h-20"
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="relative z-50 font-semibold text-lg tracking-tight 
            hover:text-[hsl(var(--color-accent-primary))] transition-colors"
                    aria-label={`${siteConfig.name} - Home`}
                >
                    <span className="hidden sm:inline">{siteConfig.name.split(" ")[0]}</span>
                    <span className="sm:hidden">SS</span>
                    <span className="text-[hsl(var(--color-accent-primary))]">.</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${pathname === item.href
                                        ? "text-[hsl(var(--color-text-primary))] bg-[hsl(var(--color-bg-tertiary))]"
                                        : "text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-text-primary))] hover:bg-[hsl(var(--color-bg-tertiary))]"
                                    }`}
                                aria-current={pathname === item.href ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="relative z-50 md:hidden w-10 h-10 flex items-center justify-center
            rounded-lg hover:bg-[hsl(var(--color-bg-tertiary))] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <span
                            className={`block h-0.5 bg-current transition-transform origin-center
                ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                        />
                        <span
                            className={`block h-0.5 bg-current transition-opacity
                ${isOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-0.5 bg-current transition-transform origin-center
                ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                        />
                    </div>
                </button>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`fixed inset-0 bg-[hsl(var(--color-bg-primary))] md:hidden
            transition-opacity duration-300
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    aria-hidden={!isOpen}
                >
                    <div className="container-custom pt-24 pb-8">
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item, index) => (
                                <li
                                    key={item.href}
                                    className={`transform transition-all duration-300
                    ${isOpen
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-4 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors
                      ${pathname === item.href
                                                ? "text-[hsl(var(--color-text-primary))] bg-[hsl(var(--color-bg-tertiary))]"
                                                : "text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-text-primary))] hover:bg-[hsl(var(--color-bg-tertiary))]"
                                            }`}
                                        aria-current={pathname === item.href ? "page" : undefined}
                                        tabIndex={isOpen ? 0 : -1}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Social Links in Mobile Menu */}
                        <div className="mt-8 pt-8 border-t border-[hsl(var(--color-border))]">
                            <div className="flex gap-4">
                                <a
                                    href={siteConfig.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))] transition-colors"
                                    aria-label="GitHub Profile"
                                    tabIndex={isOpen ? 0 : -1}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href={siteConfig.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[hsl(var(--color-bg-tertiary))] 
                    text-[hsl(var(--color-text-secondary))]
                    hover:text-[hsl(var(--color-text-primary))] transition-colors"
                                    aria-label="LinkedIn Profile"
                                    tabIndex={isOpen ? 0 : -1}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
