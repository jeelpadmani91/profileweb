"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <nav className="container flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                    aria-label={`${SITE_CONFIG.name} - Home`}
                >
                    <span className="text-gradient">{SITE_CONFIG.name}</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${pathname === link.href
                                        ? "text-[var(--color-accent)]"
                                        : "text-[var(--color-text-secondary)]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button - Desktop */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-[var(--color-bg-primary)] rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-[var(--color-text-primary)]"
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden glass border-t border-[var(--color-border)]"
                    >
                        <ul className="container py-4 space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block py-2 text-base font-medium transition-colors ${pathname === link.href
                                                ? "text-[var(--color-accent)]"
                                                : "text-[var(--color-text-secondary)]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-5 py-3 text-sm font-medium bg-[var(--color-accent)] text-[var(--color-bg-primary)] rounded-lg"
                                >
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
