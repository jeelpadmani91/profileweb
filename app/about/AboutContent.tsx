"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export default function AboutContent() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-[var(--color-bg-secondary)]">
                <div className="container">
                    <div className="max-w-3xl">
                        <AnimatedSection>
                            <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-4">
                                About Us
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <h1 className="mb-6">
                                We're Creators Who <span className="text-gradient">Get It</span>
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                                Born from the creator community, we understand the challenges of
                                growing a YouTube channel. We're here to handle the complex work
                                so you can focus on what you do best — creating.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-12">
                    <AnimatedSection>
                        <div className="p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] h-full">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                To democratize YouTube growth by providing world-class dubbing
                                and optimization services that help creators reach global
                                audiences. We believe every great content creator deserves to be
                                discovered, regardless of language barriers.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div className="p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] h-full">
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                A world where borders don't limit content reach. We envision
                                creators freely connecting with audiences worldwide, with
                                professional-grade localization and growth strategies available
                                to channels of all sizes.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* Process */}
            <SectionWrapper background="secondary">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-3">
                            Our Process
                        </p>
                        <h2>How We Work</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            A transparent, collaborative approach that keeps you informed
                            every step of the way.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROCESS_STEPS.map((step, index) => (
                        <AnimatedSection key={step.step} delay={index * 0.1}>
                            <div className="relative p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] h-full">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] flex items-center justify-center font-bold mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    {step.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </SectionWrapper>

            {/* Why Different */}
            <SectionWrapper>
                <div className="max-w-3xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-3">
                                What Sets Us Apart
                            </p>
                            <h2>Why We're Different</h2>
                        </div>
                    </AnimatedSection>

                    <div className="space-y-6">
                        <AnimatedSection delay={0.1}>
                            <div className="flex gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <div className="text-2xl">🎯</div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Creator-First Mentality
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)]">
                                        We're not just service providers — we're creators ourselves.
                                        Every recommendation comes from real experience building
                                        channels from the ground up.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="flex gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <div className="text-2xl">📊</div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Data-Driven Everything
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)]">
                                        No guesswork. Every strategy, every thumbnail, every
                                        optimization is backed by analytics and A/B testing. We
                                        measure what matters.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="flex gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <div className="text-2xl">🤝</div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        True Partnership
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)]">
                                        We succeed when you succeed. That's why we focus on
                                        long-term relationships and sustainable growth, not quick
                                        wins that fade.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
