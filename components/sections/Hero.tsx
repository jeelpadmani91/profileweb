"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-secondary)] via-[var(--color-bg-primary)] to-[var(--color-bg-primary)]" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-[0.03] blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[var(--color-accent)] opacity-[0.02] blur-3xl rounded-full" />

            <div className="container relative z-10">
                <div className="max-w-3xl">
                    <AnimatedSection>
                        <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-4">
                            YouTube Growth Agency
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h1 className="mb-6">
                            Unlock Your Channel's{" "}
                            <span className="text-gradient">Global Potential</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl leading-relaxed">
                            Professional dubbing, conversion-focused thumbnails, and
                            data-driven growth strategies. We help creators reach millions
                            of new viewers.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" size="lg">
                                Start Growing Today
                            </Button>
                            <Button href="/services" variant="outline" size="lg">
                                Explore Services
                            </Button>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
                                Trusted by growing channels
                            </p>
                            <div className="flex flex-wrap gap-8 items-center opacity-50">
                                <span className="text-lg font-semibold">Creator 1</span>
                                <span className="text-lg font-semibold">Creator 2</span>
                                <span className="text-lg font-semibold">Creator 3</span>
                                <span className="text-lg font-semibold">Creator 4</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
