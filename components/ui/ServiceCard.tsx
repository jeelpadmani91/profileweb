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
            <div className="text-3xl mb-6 text-[var(--color-accent)] opacity-80 group-hover:scale-110 transition-transform duration-500">{icon}</div>
            <h3 className="text-lg font-serif font-bold mb-2 tracking-wide group-hover:text-[var(--color-accent)] transition-colors duration-300">{title}</h3>
            {subtitle && (
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-secondary)] mb-4">{subtitle}</p>
            )}
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                {description}
            </p>
            {/* Minimal Link Indicator */}
            {href && (
                <div className="mt-6 w-8 h-[1px] bg-[var(--color-accent)] group-hover:w-16 transition-all duration-300" />
            )}
        </>
    );

    const cardStyles =
        "group block p-8 rounded-sm bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors duration-500 h-full border-t border-[var(--color-border)] hover:border-[var(--color-accent)]";

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
