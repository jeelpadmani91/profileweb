import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Vox Media Agency's mission, process, and what makes us different. We're a creator-first YouTube growth agency.",
};

export default function AboutPage() {
    return (
        <>
            <AboutContent />
            <CTASection />
        </>
    );
}
