"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

export default function ServicesPreview() {
    return (
        <SectionWrapper background="secondary">
            <AnimatedSection>
                <div className="text-center mb-12">
                    <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-3">
                        What We Do
                    </p>
                    <h2>Services That Drive Results</h2>
                    <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        From dubbing to strategy, we provide everything you need to scale
                        your YouTube presence and reach new audiences.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, index) => (
                    <AnimatedSection key={service.id} delay={index * 0.1}>
                        <ServiceCard
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                            icon={service.icon}
                            href={`/services#${service.id}`}
                        />
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection delay={0.4}>
                <div className="text-center mt-10">
                    <Button href="/services" variant="outline">
                        View All Services
                    </Button>
                </div>
            </AnimatedSection>
        </SectionWrapper>
    );
}
