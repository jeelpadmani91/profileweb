import type { Metadata } from "next";
import ServiceDetail from "./ServiceDetail";
import CTASection from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Professional YouTube dubbing, thumbnail optimization, channel growth strategy, and SEO services. Comprehensive solutions to scale your YouTube presence.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-[var(--color-bg-secondary)]">
                <div className="container">
                    <div className="max-w-3xl">
                        <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-4">
                            Our Services
                        </p>
                        <h1 className="mb-6">
                            Everything You Need to <span className="text-gradient">Grow</span>
                        </h1>
                        <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                            From reaching new audiences through dubbing to optimizing every
                            click — we handle the growth so you can focus on creating.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="section">
                <div className="container">
                    <div className="space-y-24">
                        {SERVICES.map((service, index) => (
                            <ServiceDetail
                                key={service.id}
                                service={service}
                                isReversed={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
