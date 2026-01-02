"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        channel: "",
        service: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Frontend only - in production, this would connect to a backend
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-[var(--color-bg-secondary)]">
                <div className="container">
                    <div className="max-w-3xl">
                        <AnimatedSection>
                            <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase mb-4">
                                Contact Us
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <h1 className="mb-6">
                                Let's Grow <span className="text-gradient">Together</span>
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                                Ready to take your channel to the next level? Get in touch and
                                let's discuss how we can help you reach your goals.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <AnimatedSection>
                            <div className="p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="text-5xl mb-4">✓</div>
                                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-[var(--color-text-secondary)]">
                                            We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-[var(--color-text-primary)]"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-[var(--color-text-primary)]"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="channel"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                YouTube Channel URL (Optional)
                                            </label>
                                            <input
                                                type="url"
                                                id="channel"
                                                name="channel"
                                                value={formData.channel}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-[var(--color-text-primary)]"
                                                placeholder="https://youtube.com/@yourchannel"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="service"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Interested In
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-[var(--color-text-primary)]"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="dubbing">YouTube Dubbing</option>
                                                <option value="thumbnails">
                                                    Thumbnail & CTR Optimization
                                                </option>
                                                <option value="growth">Channel Growth Strategy</option>
                                                <option value="seo">SEO & Analytics</option>
                                                <option value="full">Full Package</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-[var(--color-text-primary)] resize-none"
                                                placeholder="Tell us about your channel and goals..."
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full">
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection delay={0.1}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">
                                        Prefer to reach out directly?
                                    </h2>
                                    <p className="text-[var(--color-text-secondary)]">
                                        No forms needed. Connect with us through your preferred
                                        channel and we'll respond within 24 hours.
                                    </p>
                                </div>

                                {/* WhatsApp */}
                                <a
                                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-green-500"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                                            WhatsApp
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">
                                            Chat with us instantly
                                        </p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href={`mailto:${SITE_CONFIG.email}`}
                                    className="flex items-center gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-[var(--color-accent)]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                                            Email
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">
                                            {SITE_CONFIG.email}
                                        </p>
                                    </div>
                                </a>

                                {/* Response Time */}
                                <div className="p-6 rounded-xl border border-dashed border-[var(--color-border)]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xl">⚡</span>
                                        <p className="font-semibold">Quick Response</p>
                                    </div>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        We typically respond within 2-4 hours during business hours
                                        (IST). For urgent inquiries, WhatsApp is fastest.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
