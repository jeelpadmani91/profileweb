"use client";

import ScrollSection from "@/components/ui/ScrollSection";
import Button from "@/components/ui/Button";
import { ASSETS } from "@/lib/assets";
import { SERVICES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HomePage() {
  return (
    <main className="bg-black">
      {/* 1. HERO SECTION - Video Background */}
      <ScrollSection
        backgroundVideo={ASSETS.heroVideo}
        overlayOpacity={0.5}
        scrollBuffer="250vh"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <AnimatedSection>
            <p className="text-[var(--color-accent)] text-xs font-bold tracking-[0.3em] uppercase mb-8">
              The Art of Global Reach
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="mb-8 leading-tight text-6xl md:text-8xl font-serif">
              Timeless <br />
              <span className="italic text-[var(--color-accent)]">Connections</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl mx-auto leading-relaxed font-light">
              We don't just translate words. We translate emotion, culture, and impact
              for the world's most discerning creators.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Button href="/contact" size="lg" className="min-w-[200px] bg-white text-black hover:bg-gray-200 border-none uppercase tracking-widest text-xs font-bold">
              Begin Journey
            </Button>
          </AnimatedSection>
        </div>
      </ScrollSection>

      {/* 2. PHILOSOPHY SECTION - Image Background */}
      <ScrollSection
        backgroundImage={ASSETS.philosophyBg}
        overlayOpacity={0.6}
        scrollBuffer="200vh"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center text-white">
          <div className="hidden md:block" /> {/** Spacer for layout */}
          <div className="max-w-xl">
            <AnimatedSection>
              <p className="text-[var(--color-accent)] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Our Philosophy
              </p>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                Precision in Every Detail
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                Like a fine watch movement, true channel growth requires absolute precision.
                From the nuance of a dubbed syllable to the psychology of a thumbnail
                pixel, we engineer perfection.
              </p>
              <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs">
                Learn More
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </ScrollSection>

      {/* 3. SERVICES SNEAK PEEK - Image Background */}
      <ScrollSection
        backgroundImage={ASSETS.servicesBg}
        overlayOpacity={0.7}
        scrollBuffer="250vh"
      >
        <div className="max-w-5xl mx-auto text-white">
          <AnimatedSection>
            <h2 className="text-center text-4xl md:text-5xl font-serif mb-16">Curated Services</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {SERVICES.slice(0, 4).map((service, idx) => (
              <AnimatedSection key={service.id} delay={idx * 0.1}>
                <div className="group border-t border-white/20 pt-6 transition-colors hover:border-[var(--color-accent)]">
                  <span className="text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-2 block">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="text-center mt-20">
              <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs">
                View Collection
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </ScrollSection>

      {/* 4. TRUST/RESULTS - Dark Background (Video or Image) */}
      <ScrollSection
        backgroundImage={ASSETS.trustBg}
        overlayOpacity={0.8}
        scrollBuffer="200vh"
      >
        <div className="text-center text-white max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">
              Legacy of <span className="text-[var(--color-accent)] italic">Trust</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <AnimatedSection delay={0.1}>
              <div className="p-4">
                <span className="block text-4xl md:text-5xl font-bold mb-2">5M+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Monthly View Growth</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-4">
                <span className="block text-4xl md:text-5xl font-bold mb-2">65%</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">CTR Improvement</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="p-4">
                <span className="block text-4xl md:text-5xl font-bold mb-2">25+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Channels Scaled</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ScrollSection>

      {/* 5. FINAL CTA - Image Background */}
      <ScrollSection
        backgroundImage={ASSETS.ctaBg}
        overlayOpacity={0.6}
        scrollBuffer="150vh"
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <AnimatedSection>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 italic">
              "The only way to do great work is to love what you do."
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">
              Start Your Legacy
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Button href="/contact" size="lg" className="min-w-[240px] bg-[var(--color-accent)] text-black hover:bg-white uppercase tracking-widest text-xs font-bold">
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </ScrollSection>
    </main>
  );
}
