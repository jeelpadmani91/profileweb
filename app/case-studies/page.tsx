import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "See real results from our YouTube dubbing and growth services. Before and after metrics, CTR improvements, and subscriber growth.",
};

export default function CaseStudiesPage() {
    return (
        <>
            <CaseStudiesContent />
            <CTASection />
        </>
    );
}
