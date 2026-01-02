"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    subtitle?: string;
    description: string;
    icon: string;
    href?: string;
}

export default function ServiceCard({
    title,
    subtitle,
    description,
    icon,
    href,
}: ServiceCardProps) {
    const cardContent = (
        <>
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            {subtitle && (
                <p className="text-sm text-[var(--color-accent)] mb-3">{subtitle}</p>
            )}
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {description}
            </p>
            {href && (
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]">
                    Learn more
                    <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            )}
        </>
    );

    const cardStyles =
        "group block p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 h-full";

    if (href) {
        return (
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
            >
                <Link href={href} className={cardStyles}>
                    {cardContent}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={cardStyles}
        >
            {cardContent}
        </motion.div>
    );
}
