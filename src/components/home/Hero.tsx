import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight, ArrowLeft, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
    const { t } = useTranslation('home');
    const { language } = useLanguage();
    return (
        <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden pt-32 pb-20">
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

            <div className="grid lg:grid-cols-2 gap-5 items-center mx-auto pt-4">
                <div className="container px-4 z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-6">
                            <div>{t('hero.title')}</div>
                            <div className="text-secondary mt-4">
                                {t('hero.titleHighlight')}
                            </div>
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
                                    {language === 'fa' ? (
                                        <ArrowLeft className="mr-2" />
                                    ) : (
                                        <ArrowRight className="ml-2" />
                                    )}
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

                <div className="relative mx-4 md:mx-0 font-bold">
                    <div className="bg-card/10 backdrop-blur-xl rounded-lg border border-secondary/30 shadow-2xl overflow-hidden">
                        <div className="bg-secondary/20 px-4 py-3 flex items-center gap-2 border-b border-secondary/20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-muted text-sm font-mono">
                                codeskillz.py
                            </span>
                        </div>
                        <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
                            <div className="text-secondary">
                                $ python learn_with_farzad.py
                            </div>
                            <div className="text-primary-foreground/80">
                                Initializing CodeSkillz environment...
                            </div>
                            <div className="text-green-400">
                                ✓ Python modules loaded
                            </div>
                            <div className="text-green-400">
                                ✓ Machine Learning libraries ready
                            </div>
                            <div className="text-green-400">
                                ✓ Web Development tools configured
                            </div>
                            <div className="text-secondary mt-4">
                                &gt;&gt;&gt; print("Welcome to CodeSkillz!")
                            </div>
                            <div className="text-primary-foreground/90">
                                Welcome to CodeSkillz!
                            </div>
                            <div className="text-secondary">
                                &gt;&gt;&gt; next_class = get_live_session()
                            </div>
                            <div className="text-primary-foreground/90">
                                📅 Next Live Class: "Python Advanced Concepts"
                            </div>
                            <div className="text-primary-foreground/90">
                                🎓 Instructor: Farzad
                            </div>
                            <div className="text-primary-foreground/90">
                                🕐 Starting soon
                            </div>
                            <div className="text-secondary animate-pulse">
                                ▊
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-4 -top-4 bg-secondary rounded-lg p-4 shadow-lg border border-secondary/50 animate-float hidden lg:block">
                        <div className="text-center">
                            <div className="text-3xl mb-1">🏆</div>
                            <div className="text-xs text-background font-semibold">
                                Top Rated
                            </div>
                            <div className="text-xs text-background/70">
                                By Students
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
