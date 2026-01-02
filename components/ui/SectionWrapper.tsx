import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "primary" | "secondary";
}

export default function SectionWrapper({
    children,
    className = "",
    id,
    background = "primary",
}: SectionWrapperProps) {
    const bgStyles = {
        primary: "bg-[var(--color-bg-primary)]",
        secondary: "bg-[var(--color-bg-secondary)]",
    };

    return (
        <section id={id} className={`section ${bgStyles[background]} ${className}`}>
            <div className="container">{children}</div>
        </section>
    );
}
