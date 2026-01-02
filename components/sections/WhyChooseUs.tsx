"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
    return (
        <SectionWrapper>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection>
                    <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-3">
                        Why Choose Us
                    </p>
                    <h2 className="mb-6">
                        A Partner, Not Just a Service Provider
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        We've spent years understanding what makes YouTube channels grow.
                        Our approach combines creative excellence with data-driven
                        strategies to deliver measurable results.
                    </p>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 gap-6">
                    {WHY_CHOOSE_US.map((item, index) => (
                        <AnimatedSection key={item.title} delay={index * 0.1}>
                            <div className="p-5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    {item.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
