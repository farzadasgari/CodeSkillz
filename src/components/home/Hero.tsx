import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight, Video} from "lucide-react";
import {useTranslation} from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation('home');
    return (
        <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden pt-32">
            <div className="absolute inset-0 z-0">
                <img
                    src="/CodeSkillz/images/coding.jpg"
                    alt="Coding workspace"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-secondary/50 md:text-secondary/70 text-6xl font-mono animate-pulse">
                    &lt;/&gt;
                </div>
                <div className="absolute bottom-10 right-10 text-secondary/50 md:text-secondary/60 text-6xl font-mono animate-pulse delay-500">
                    &#123;&#125;
                </div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl animate-slide-up">
                    <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight">
                        {t('hero.title')}{' '}
                        <span className="text-secondary">
                                {t('hero.titleHighlight')}
                            </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                        {t('hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Link to="/courses">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto text-lg"
                            >
                                {t('hero.browseCourses')}
                                <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto text-lg text-primary-foreground border-primary-foreground/50 hover:border-primary-foreground hover:bg-primary-foreground/10"
                        >
                            <Video className="mr-2" />
                            {t('hero.watchIntro')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}