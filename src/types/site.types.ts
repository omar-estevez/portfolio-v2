export interface SocialLink {
    label: string;
    href: string;
}

export interface ContactLink {
    id: string;
    label: string;
    value: string;
    href?: string;
}

export interface SiteData {
    name: string;
    shortName: string;
    title: string;
    heroDescription: string;
    location: string;
    availabilityBadge: string;
    profileHighlights: string[];
    about: {
        paragraphOne: string;
        paragraphTwo: string;
        highlights: string[];
    };
    socialLinks: SocialLink[];
    contactTitle: string;
    contactDescription: string;
    contactLinks: ContactLink[];
    footerText: string;
    builtWith: string;
}