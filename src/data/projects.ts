import type { Project } from "@/types/project.types";

export const projects: Project[] = [
    {
        id: "dino-gold-international",
        badge: "Personal Project",
        title: "Dino Gold International",
        description:
            "Business website for a car care brand focused on presenting services and improving customer conversion.",
        problem:
            "Provides a clear and modern way to showcase services, pricing, and booking options for a local car wash business.",
        stack: ["React", "JavaScript", "Sass"],
        role: "Full ownership — UI/UX design, development, structure, and deployment.",
        highlights: [
            "Responsive design",
            "Conversion-focused layout",
            "Reusable components",
            "Service-based UI",
        ],
        live: "https://dinogoldmobilecarwash.com/",
        github: "https://github.com/omar-estevez/web-DinoGoldInternational",
        featured: true,
    },
    {
        id: "magic-333-boutique",
        badge: "Client Project",
        title: "Magic 333 Boutique",
        description:
            "Modern e-commerce web application built for a clothing and footwear boutique focused on product presentation, customer experience, and online sales.",
        problem:
            "Helps the business manage products, showcase inventory, and improve customer conversion through a responsive shopping experience and admin dashboard.",
        stack: [
            "React",
            "TypeScript",
            "Vite",
            "Zustand",
            "Axios",
            "Firebase",
            "Sass",
        ],
        role:
            "Full ownership — UI/UX design, frontend architecture, authentication flow, dashboard development, state management, Firebase integration, deployment, and responsive optimization.",
        highlights: [
            "Authentication system",
            "Admin dashboard",
            "Product catalog",
            "Shopping cart flow",
            "Global state management with Zustand",
            "Firebase authentication and database",
            "Axios API integration",
            "Responsive UI",
            "Modern boutique design",
            "Reusable component architecture",
            "Optimized user experience",
            "Protected routes",
        ],
        live: "https://magiicstore333.magiicstore333.workers.dev/",
        github: "https://github.com/omar-estevez/Magiic-store333",
        featured: false,
    },
    {
        id: "123-auto-cash",
        badge: "Client Project",
        title: "123 Auto Cash",
        description:
            "Landing page built for a junk car buyer business focused on SEO and lead generation.",
        problem:
            "Helps attract local customers and convert traffic into leads through clear messaging and optimized structure.",
        stack: ["React", "Vite", "React Icons"],
        role:
            "Full ownership — design, development, SEO structure, hosting, and content optimization using AI tools.",
        highlights: [
            "SEO-focused structure",
            "Strong CTA flow",
            "Responsive UI",
            "Optimized landing experience",
        ],
        live: "https://123autocash.com",
        github: "https://github.com/omar-estevez/123-auto-cash",
        featured: false,
    },
    {
        id: "triidy-platform",
        badge: "Enterprise Experience",
        title: "Triidy Platform",
        description:
            "Enterprise web platform developed over 3 years as part of a development team.",
        problem:
            "Provides a scalable system for managing accounts, dashboards, and interconnected business processes.",
        stack: ["Angular", "TypeScript", "AWS S3", "APIs"],
        role:
            "Frontend developer working on dashboards, UI systems, and integration between multiple applications.",
        highlights: [
            "Authentication systems",
            "Modular architecture",
            "Multi-project integration",
            "Enterprise-level UI",
        ],
        companySite: "https://triidy.com",
        dashboard: "https://accounts.triidypluss.com/",
        note: "Code unavailable due to company ownership.",
        featured: false,
    },
];