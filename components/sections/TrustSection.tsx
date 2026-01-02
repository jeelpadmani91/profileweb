"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

const testimonials = [
    {
        quote:
            "Our Hindi channel went from 0 to 50K subscribers in 4 months. The dubbing quality is exceptional.",
        author: "Tech Creator",
        role: "500K+ Subscribers",
    },
    {
        quote:
            "CTR jumped from 3% to 8% after implementing their thumbnail strategies. Game changer.",
        author: "Education Creator",
        role: "200K+ Subscribers",
    },
    {
        quote:
            "Finally found an agency that understands YouTube. Professional, data-driven, and results-focused.",
        author: "Lifestyle Vlogger",
        role: "300K+ Subscribers",
    },
];

export default function TrustSection() {
    return (
        <SectionWrapper background="secondary">
            <AnimatedSection>
                <div className="text-center mb-12">
                    <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-3">
                        Testimonials
                    </p>
                    <h2>Creators Trust Us</h2>
                </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <AnimatedSection key={testimonial.author} delay={index * 0.1}>
                        <div className="p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] h-full flex flex-col">
                            <svg
                                className="w-8 h-8 text-[var(--color-accent)] opacity-50 mb-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <p className="font-semibold text-sm">{testimonial.author}</p>
                                <p className="text-xs text-[var(--color-text-tertiary)]">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            {/* Client logos placeholder */}
            <AnimatedSection delay={0.3}>
                <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
                    <p className="text-center text-sm text-[var(--color-text-tertiary)] mb-8">
                        Trusted by creators across niches
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 items-center opacity-40">
                        <span className="text-xl font-semibold">TechVerse</span>
                        <span className="text-xl font-semibold">EduFlow</span>
                        <span className="text-xl font-semibold">LifeStyle+</span>
                        <span className="text-xl font-semibold">GameOn</span>
                        <span className="text-xl font-semibold">CookMaster</span>
                    </div>
                </div>
            </AnimatedSection>
        </SectionWrapper>
    );
}
