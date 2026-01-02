"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[var(--color-bg-primary)]">
            {/* Abstract Luxury Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-bg-secondary)] via-[var(--color-bg-primary)] to-[var(--color-bg-primary)] opacity-80" />

            {/* Subtle animated glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)] opacity-[0.03] blur-[100px] rounded-full animate-pulse" />

            <div className="container relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <p className="text-[var(--color-accent)] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                            YouTube Growth & Localization
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <h1 className="mb-8 leading-tight">
                            Crafting Global <br />
                            <span className="text-gradient font-serif italic">Success Stories</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            We translate your vision into growth. Professional dubbing and
                            strategic optimization for the world's most ambitious creators.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button href="/contact" size="lg" className="min-w-[200px] uppercase tracking-widest text-xs font-bold">
                                Start Growing
                            </Button>
                            <Button href="/services" variant="outline" size="lg" className="min-w-[200px] uppercase tracking-widest text-xs font-bold">
                                Our Services
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
