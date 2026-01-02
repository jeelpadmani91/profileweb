"use client";

import { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ScrollSectionProps {
    children: ReactNode;
    backgroundImage?: string;
    backgroundVideo?: string;
    overlayOpacity?: number;
    className?: string;
    scrollBuffer?: string; // height of the scrollable area, e.g. "200vh"
}

export default function ScrollSection({
    children,
    backgroundImage,
    backgroundVideo,
    overlayOpacity = 0.4,
    className = "",
    scrollBuffer = "200vh",
}: ScrollSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"], // Track when the container is in view
    });

    // Background effects
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]); // Slow zoom in
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]); // Fade out at end

    // Content effects
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]); // Slight parallax
    const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div
            ref={containerRef}
            style={{ "--scroll-buffer": scrollBuffer } as React.CSSProperties}
            className={`relative h-auto md:h-[var(--scroll-buffer)] ${className}`}
        >
            <div className="relative h-screen md:sticky md:top-0 md:overflow-hidden flex items-center justify-center">

                {/* Background Wrapper */}
                <motion.div
                    style={{ scale, opacity }}
                    className="absolute inset-0 z-0"
                >
                    {backgroundVideo ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={backgroundVideo} type="video/mp4" />
                        </video>
                    ) : backgroundImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    ) : null}

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black"
                        style={{ opacity: overlayOpacity }}
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ y: contentY, opacity: contentOpacity }}
                    className="relative z-10 container mx-auto px-6 md:px-12 py-20 md:py-0"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
