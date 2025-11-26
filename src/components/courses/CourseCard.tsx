import { Link } from "react-router-dom";
import {Clock, BarChart3, Euro} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
    featured?: boolean;
}

const CourseCard = ({
                        id,
                        title,
                        description,
                        image,
                        duration,
                        level,
                        price,
                        featured = false,
                    }: CourseCardProps) => {
    const levelColors = {
        Beginner: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        Advanced: "bg-secondary/10 text-secondary border-secondary/20",
    };

    return (
        <div
            className={`group relative bg-card rounded-lg overflow-hidden transition-all duration-300 
                hover:shadow-purple hover:-translate-y-2
                ${featured ? "border-2 border-secondary shadow-crimson" : "border border-border"}
                h-full flex flex-col`}
        >
            {featured && (
                <Badge className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground font-semibold">
                    Best Seller
                </Badge>
            )}

            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex flex-col flex-wrap gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {duration}</span>
                    </div>

                    <Badge variant="outline" className={levelColors[level]}>
                        <BarChart3 className="w-3 h-3 mr-1" />
                        {level}
                    </Badge>

                    <div className="flex items-center gap-1 font-semibold">
                        Price:
                        <Euro className="w-4 h-4 text-emerald-700" />
                        <span>
                            {price}
                        </span>
                    </div>
                </div>

                <div className="mt-auto">
                    <Link to={`/courses/${id}`}>
                        <Button
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
