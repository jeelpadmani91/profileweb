import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Vox Media Agency. Schedule a call to discuss your YouTube growth strategy, dubbing needs, or optimization goals.",
};

export default function ContactPage() {
    return <ContactContent />;
}
