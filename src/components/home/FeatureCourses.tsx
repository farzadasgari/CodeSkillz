import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { courses } from '@/data/courses';
import CourseCard from '@/components/courses/CourseCard';

export const FeatureCourses = () => {
    const { t } = useTranslation('');
    const featuredCourses = courses.slice(0, 8);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                        {t('featured.title')}{' '}
                        <span className="text-secondary">
                            {t('featured.titleHighlight')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('featured.description')}
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="items-stretch">
                        {featuredCourses.map((course) => (
                            <CarouselItem
                                key={course.id}
                                className="md:basis-1/2 lg:basis-1/4 flex items-stretch"
                            >
                                <div className="p-2 w-full h-full">
                                    <CourseCard {...course} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>

                <div className="text-center mt-12">
                    <Link to="/courses">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            {t('featured.viewAll')}
                            <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
