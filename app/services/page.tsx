"use client";

import ScrollSection from "@/components/ui/ScrollSection";
import Button from "@/components/ui/Button";
import { ASSETS } from "@/lib/assets";
import { SERVICES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SERVICE_ASSETS = {
    dubbing: ASSETS.serviceDubbing,
    thumbnails: ASSETS.serviceThumbnails,
    growth: ASSETS.serviceGrowth,
    seo: ASSETS.serviceSEO,
};

export default function ServicesPage() {
    return (
        <main className="bg-black">
            {/* 1. HERO - Intro */}
            <ScrollSection
                backgroundImage={ASSETS.servicesBg}
                overlayOpacity={0.6}
                scrollBuffer="200vh"
            >
                <div className="max-w-4xl mx-auto text-center text-white">
                    <AnimatedSection>
                        <p className="text-[var(--color-accent)] text-xs font-bold tracking-[0.3em] uppercase mb-8">
                            Our Expertise
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <h1 className="mb-8 leading-tight text-5xl md:text-7xl font-serif">
                            Everything You Need <br />
                            <span className="italic text-[var(--color-accent)]">to Grow</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl mx-auto leading-relaxed font-light">
                            From reaching new audiences through dubbing to optimizing every click.
                            We handle the complexity so you can focus on creating.
                        </p>
                    </AnimatedSection>
                </div>
            </ScrollSection>

            {/* 2. SERVICES LIST - One ScrollSection per Service */}
            {SERVICES.map((service, index) => {
                const bgImage = SERVICE_ASSETS[service.id as keyof typeof SERVICE_ASSETS] || ASSETS.servicesBg;
                const isEven = index % 2 === 0;

                return (
                    <ScrollSection
                        key={service.id}
                        backgroundImage={bgImage}
                        overlayOpacity={0.7}
                        scrollBuffer="200vh"
                    >
                        <div className={`grid md:grid-cols-2 gap-12 items-center text-white ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                            {/* Content Side */}
                            <div className={`${!isEven ? 'md:order-2' : ''}`}>
                                <AnimatedSection>
                                    <div className="text-[var(--color-accent)] text-5xl mb-6 opacity-90">{service.icon}</div>
                                    <h2 className="text-4xl md:text-5xl font-serif mb-6">{service.title}</h2>
                                    <p className="text-[var(--color-text-secondary)] mb-8 text-lg font-light leading-relaxed">
                                        {service.subtitle}
                                    </p>

                                    <div className="space-y-6">
                                        <div className="border-l-2 border-[var(--color-accent)] pl-4">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">The Problem</h3>
                                            <p className="text-gray-200 font-light">{service.problem}</p>
                                        </div>
                                        <div className="border-l-2 border-white pl-4">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Our Solution</h3>
                                            <p className="text-gray-200 font-light">{service.solution}</p>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs">
                                            Inquire About {service.title}
                                        </Button>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Visual Side (Spacer or specialized content) */}
                            <div className={`hidden md:flex justify-center items-center ${!isEven ? 'md:order-1' : ''}`}>
                                <div className="w-full h-[400px] border border-white/10 rounded-sm flex items-center justify-center backdrop-blur-sm bg-white/5">
                                    <span className="text-white/20 font-serif text-8xl italic opacity-50">0{index + 1}</span>
                                </div>
                            </div>
                        </div>
                    </ScrollSection>
                );
            })}

            {/* CTA */}
            <ScrollSection
                backgroundImage={ASSETS.ctaBg}
                overlayOpacity={0.6}
                scrollBuffer="150vh"
            >
                <div className="max-w-3xl mx-auto text-center text-white">
                    <AnimatedSection>
                        <h2 className="text-5xl md:text-7xl font-serif mb-12">
                            Ready to Scale?
                        </h2>
                        <Button href="/contact" size="lg" className="min-w-[240px] bg-[var(--color-accent)] text-black hover:bg-white uppercase tracking-widest text-xs font-bold">
                            Let's Talk
                        </Button>
                    </AnimatedSection>
                </div>
            </ScrollSection>
        </main>
    );
}
