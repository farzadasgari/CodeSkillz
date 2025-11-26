export interface Course {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
    featured: boolean;
    category: string;
    topics: string[];
}