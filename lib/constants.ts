// Site-wide constants and data

export const SITE_CONFIG = {
    name: "Vox Media Agency",
    tagline: "YouTube Growth & Dubbing Experts",
    email: "hello@voxmedia.agency",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
} as const;

export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
    {
        id: "dubbing",
        title: "YouTube Dubbing",
        subtitle: "English → Hindi",
        description:
            "Professional dubbing services that help you reach the massive Hindi-speaking audience. Natural voice-overs that retain the emotion and impact of your original content.",
        icon: "🎙️",
        problem:
            "Your English content is missing out on 600+ million Hindi speakers. Language barriers limit your potential reach and revenue.",
        solution:
            "We provide studio-quality dubbing with native Hindi voice artists, maintaining the original emotion, timing, and impact of your content.",
        outcome:
            "Unlock the Indian market with content that resonates. Expect 2-3x viewer retention and significant subscriber growth from Hindi audiences.",
    },
    {
        id: "thumbnails",
        title: "Thumbnail & CTR Optimization",
        subtitle: "Design That Converts",
        description:
            "Data-driven thumbnail designs that stop the scroll and drive clicks. A/B tested visuals that outperform your competition.",
        icon: "🎨",
        problem:
            "Low click-through rates mean the algorithm doesn't push your content. Great videos go unwatched because thumbnails don't grab attention.",
        solution:
            "We design high-impact thumbnails using proven psychological triggers, contrast principles, and platform-specific optimization techniques.",
        outcome:
            "Average 40-80% CTR improvement. More clicks mean better algorithm performance and organic reach multiplication.",
    },
    {
        id: "growth",
        title: "Channel Growth Strategy",
        subtitle: "Sustainable Scaling",
        description:
            "Comprehensive growth strategies tailored to your niche. From content planning to audience engagement, we help you build a lasting presence.",
        icon: "📈",
        problem:
            "Random uploads without strategy lead to stagnant growth. Without a clear plan, you're leaving views and subscribers on the table.",
        solution:
            "We analyze your niche, competitors, and audience to create a custom growth roadmap including content calendar, upload optimization, and engagement tactics.",
        outcome:
            "Consistent month-over-month growth. Clear milestones, measurable results, and a sustainable path to monetization goals.",
    },
    {
        id: "seo",
        title: "SEO & Analytics",
        subtitle: "Data-Driven Decisions",
        description:
            "Deep analytics and SEO optimization to ensure your content gets discovered. Make every upload count with strategic optimization.",
        icon: "🔍",
        problem:
            "Your videos aren't ranking in search. Valuable content gets buried because metadata and SEO aren't optimized for discovery.",
        solution:
            "We optimize titles, descriptions, tags, and timestamps using keyword research. Plus, we provide actionable insights from your analytics.",
        outcome:
            "Higher search rankings, improved browse features placement, and data-backed decisions for your content strategy.",
    },
] as const;

export const WHY_CHOOSE_US = [
    {
        title: "Creator-First Approach",
        description:
            "We understand creators because we are creators. Every strategy is designed with your unique voice and goals in mind.",
        icon: "🎯",
    },
    {
        title: "Proven Results",
        description:
            "Our clients see measurable improvements within 30 days. We track everything and optimize continuously.",
        icon: "📊",
    },
    {
        title: "End-to-End Support",
        description:
            "From dubbing to thumbnails to strategy—we handle everything so you can focus on creating great content.",
        icon: "🤝",
    },
    {
        title: "Transparent Process",
        description:
            "No black boxes. You get full visibility into our process, timelines, and the reasoning behind every recommendation.",
        icon: "✨",
    },
] as const;

export const CASE_STUDIES = [
    {
        id: 1,
        title: "Tech Review Channel",
        category: "Dubbing + CTR",
        before: {
            views: "50K/month",
            ctr: "2.8%",
            subscribers: "45K",
        },
        after: {
            views: "280K/month",
            ctr: "6.2%",
            subscribers: "120K",
        },
        duration: "3 months",
        services: ["YouTube Dubbing", "Thumbnail Optimization"],
    },
    {
        id: 2,
        title: "Educational Content Creator",
        category: "Full Growth Package",
        before: {
            views: "20K/month",
            ctr: "3.1%",
            subscribers: "12K",
        },
        after: {
            views: "150K/month",
            ctr: "7.8%",
            subscribers: "65K",
        },
        duration: "4 months",
        services: ["Channel Strategy", "SEO", "Thumbnails"],
    },
    {
        id: 3,
        title: "Lifestyle Vlogger",
        category: "Hindi Market Entry",
        before: {
            views: "80K/month",
            ctr: "4.2%",
            subscribers: "90K",
        },
        after: {
            views: "350K/month",
            ctr: "5.9%",
            subscribers: "210K",
        },
        duration: "5 months",
        services: ["YouTube Dubbing", "Growth Strategy"],
    },
] as const;

export const PROCESS_STEPS = [
    {
        step: 1,
        title: "Discovery Call",
        description:
            "We start with a deep dive into your channel, goals, and challenges. Understanding your vision is the foundation of our strategy.",
    },
    {
        step: 2,
        title: "Strategy Development",
        description:
            "Our team analyzes your niche, audience, and competitors to craft a custom growth plan tailored to your specific needs.",
    },
    {
        step: 3,
        title: "Execution",
        description:
            "We get to work—whether it's dubbing, designing thumbnails, or implementing SEO. You stay updated every step of the way.",
    },
    {
        step: 4,
        title: "Measure & Optimize",
        description:
            "We track performance metrics, share detailed reports, and continuously refine our approach based on real data.",
    },
] as const;
