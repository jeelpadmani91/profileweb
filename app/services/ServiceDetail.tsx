"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

interface ServiceDetailProps {
    service: {
        id: string;
        title: string;
        subtitle: string;
        icon: string;
        problem: string;
        solution: string;
        outcome: string;
    };
    isReversed?: boolean;
}

export default function ServiceDetail({
    service,
    isReversed = false,
}: ServiceDetailProps) {
    return (
        <div
            id={service.id}
            className={`grid lg:grid-cols-2 gap-12 items-start scroll-mt-24 ${isReversed ? "lg:flex-row-reverse" : ""
                }`}
        >
            <AnimatedSection className={isReversed ? "lg:order-2" : ""}>
                <div className="sticky top-24">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                    <p className="text-[var(--color-accent)] font-medium">
                        {service.subtitle}
                    </p>
                </div>
            </AnimatedSection>

            <div className={`space-y-8 ${isReversed ? "lg:order-1" : ""}`}>
                <AnimatedSection delay={0.1}>
                    <div className="p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                        <h3 className="flex items-center gap-3 text-lg font-semibold mb-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-sm">
                                ✕
                            </span>
                            The Problem
                        </h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {service.problem}
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                        <h3 className="flex items-center gap-3 text-lg font-semibold mb-3">
                            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">
                                ⚡
                            </span>
                            Our Solution
                        </h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {service.solution}
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="p-6 rounded-xl bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20">
                        <h3 className="flex items-center gap-3 text-lg font-semibold mb-3">
                            <span className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center text-sm">
                                ✓
                            </span>
                            The Outcome
                        </h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {service.outcome}
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
