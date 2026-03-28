import type { StackCategory } from "@/types/stack.types";

export const stackCategories: StackCategory[] = [
    {
        id: "frontend",
        title: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass"],
    },
    {
        id: "mobile",
        title: "Mobile",
        items: ["React Native", "Expo", "Ionic"],
    },
    {
        id: "state-and-data",
        title: "State & Data",
        items: ["Zustand", "Context API", "Axios"],
    },
    {
        id: "backend",
        title: "Backend",
        items: ["Node.js", "Express", "MongoDB"],
    },
    {
        id: "tools",
        title: "Tools",
        items: ["Git", "GitHub", "Vite", "Postman", "Figma"],
    },
    {
        id: "other",
        title: "Other",
        items: ["Basic Python", "Basic Java"],
    },
];