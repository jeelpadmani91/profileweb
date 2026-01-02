"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesContent() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-[var(--color-bg-secondary)]">
                <div className="container">
                    <div className="max-w-3xl">
                        <AnimatedSection>
                            <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-4">
                                Case Studies
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <h1 className="mb-6">
                                Real Results, <span className="text-gradient">Real Growth</span>
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                                Numbers don't lie. Here's a look at what we've achieved for
                                creators across different niches.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CASE_STUDIES.map((study, index) => (
                        <AnimatedSection key={study.id} delay={index * 0.1}>
                            <div className="p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] h-full">
                                <div className="mb-6">
                                    <p className="text-xs text-[var(--color-accent)] font-medium tracking-wide uppercase mb-2">
                                        {study.category}
                                    </p>
                                    <h3 className="text-xl font-bold">{study.title}</h3>
                                    <p className="text-sm text-[var(--color-text-tertiary)] mt-1">
                                        {study.duration}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {/* Before */}
                                    <div className="p-4 rounded-lg bg-[var(--color-bg-primary)]">
                                        <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide mb-3">
                                            Before
                                        </p>
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                                    Views
                                                </p>
                                                <p className="font-semibold">{study.before.views}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                                    CTR
                                                </p>
                                                <p className="font-semibold">{study.before.ctr}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                                    Subscribers
                                                </p>
                                                <p className="font-semibold">
                                                    {study.before.subscribers}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* After */}
                                    <div className="p-4 rounded-lg bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20">
                                        <p className="text-xs text-[var(--color-accent)] uppercase tracking-wide mb-3">
                                            After
                                        </p>
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                                    Views
                                                </p>
                                                <p className="font-semibold text-[var(--color-accent)]">
                                                    {study.after.views}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                                    CTR
                                                </p>
                                                <p className="font-semibold text-[var(--color-accent)]">
                                                    {study.after.ctr}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                                    Subscribers
                                                </p>
                                                <p className="font-semibold text-[var(--color-accent)]">
                                                    {study.after.subscribers}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Services Used */}
                                <div className="flex flex-wrap gap-2">
                                    {study.services.map((service) => (
                                        <span
                                            key={service}
                                            className="px-3 py-1 text-xs rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </SectionWrapper>

            {/* Summary Stats */}
            <SectionWrapper background="secondary">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2>Aggregate Results</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)]">
                            Combined impact across all our creator partnerships
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatedSection delay={0.1}>
                        <div className="text-center p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                            <p className="text-4xl font-bold text-gradient mb-2">5M+</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Additional Monthly Views
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="text-center p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                            <p className="text-4xl font-bold text-gradient mb-2">65%</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Average CTR Improvement
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <div className="text-center p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                            <p className="text-4xl font-bold text-gradient mb-2">200+</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Videos Dubbed
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <div className="text-center p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                            <p className="text-4xl font-bold text-gradient mb-2">25+</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Channels Scaled
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </SectionWrapper>
        </>
    );
}
