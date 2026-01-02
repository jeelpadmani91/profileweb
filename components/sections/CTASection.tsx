"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-subtle)] via-transparent to-[var(--color-accent-subtle)] opacity-50" />

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="mb-6">
                            Ready to Scale Your Channel?
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
                            Let's discuss how we can help you reach new audiences, improve
                            your metrics, and grow your YouTube presence sustainably.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" size="lg">
                                Schedule a Call
                            </Button>
                            <Button href="/case-studies" variant="outline" size="lg">
                                See Our Results
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
