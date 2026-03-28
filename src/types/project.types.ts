export interface Project {
    id: string;
    badge: string;
    title: string;
    description: string;
    problem?: string;
    stack: string[];
    role: string;
    highlights: string[];
    live?: string;
    github?: string;
    companySite?: string;
    dashboard?: string;
    note?: string;
    featured?: boolean;
}