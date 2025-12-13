import { Link } from "react-router-dom";
import { BookOpen, Users, Video, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { courses } from "@/data/courses";
import { blogPosts } from "@/data/blogPosts";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const { t } = useTranslation('home');
  const featuredCourses = courses.slice(0, 8);
  const latestPosts = blogPosts.slice(0, 8);

  return (
    <div className="min-h-screen">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/CodeSkillz/coding.jpg"
            alt="Coding workspace"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-secondary text-xs font-mono animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
              >
                {['{ }', '< >', '[ ]', '( )', '=> ', 'fn()', 'if', 'for', 'const', 'let'][i % 10]}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground space-y-8 animate-fade-in">

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t('hero.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/60 animate-pulse">
                  {t('hero.titleHighlight')}
                </span>
              </h1>

              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <p className="text-lg text-primary-foreground/80">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/courses">{t('hero.browseCourses')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-secondary text-secondary hover:bg-secondary/10">
                  <Link to="/about">{t('hero.watchIntro')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative" dir="ltr">
              <div className="bg-card/10 backdrop-blur-xl rounded-lg border border-secondary/30 shadow-2xl overflow-hidden">
                <div className="bg-secondary/20 px-4 py-3 flex items-center gap-2 border-b border-secondary/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-mono font-bold">codeskillz.py</span>
                </div>

                <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
                  <div className="text-cyan-400">$ python learn_with_farzad.py</div>
                  <div className="text-primary-foreground">Initializing CodeSkillz environment...</div>
                  <div className="text-emerald-400">✓ Python modules loaded</div>
                  <div className="text-emerald-400">✓ Machine Learning libraries ready</div>
                  <div className="text-emerald-400">✓ Web Development tools configured</div>
                  <div className="text-cyan-400 mt-4">&gt;&gt;&gt; print("Welcome to CodeSkillz!")</div>
                  <div className="text-primary-foreground/90">Welcome to CodeSkillz!</div>
                  <div className="text-cyan-400">&gt;&gt;&gt; next_class = get_live_session()</div>
                  <div className="text-primary-foreground/90">📅 Next Live Class: "Python Advanced Concepts"</div>
                  <div className="text-primary-foreground/90">🎓 Instructor: Farzad</div>
                  <div className="text-primary-foreground/90">🕐 Starting in: 2 hours</div>
                  <div className="text-secondary animate-pulse">▊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              {t('featured.title')} <span className="text-secondary">{t('featured.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('featured.description')}
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="items-stretch">
              {featuredCourses.map((course) => (
                <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/4 flex">
                  <div className="p-2 w-full">
                    <CourseCard {...course} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex rtl:rotate-180" />
            <CarouselNext className="hidden md:flex rtl:rotate-180" />
          </Carousel>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t('featured.viewAll')}
                <ArrowRight className="ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              {t('features.title')} <span className="text-secondary">{t('features.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-primary-foreground/10 border-secondary/20 hover:border-secondary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{t('features.curriculum.title')}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {t('features.curriculum.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-secondary/20 hover:border-secondary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Video className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{t('features.liveClasses.title')}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {t('features.liveClasses.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-secondary/20 hover:border-secondary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{t('features.expert.title')}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {t('features.expert.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-secondary/20 hover:border-secondary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Code className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{t('features.projects.title')}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {t('features.projects.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button variant="secondary" size="lg">
                {t('features.startLearning')}
                <ArrowRight className="ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              {t('blog.title')} <span className="text-secondary">{t('blog.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('blog.description')}
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="items-stretch">
              {latestPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/4 flex">
                  <div className="p-2 w-full">
                    <BlogCard post={post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex rtl:rotate-180" />
            <CarouselNext className="hidden md:flex rtl:rotate-180" />
          </Carousel>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t('blog.viewAll')}
                <ArrowRight className="ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
            {t('cta.title')} <span className="text-secondary">{t('cta.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link to="/courses">
            <Button variant="secondary" size="lg" className="text-lg">
              {t('cta.getStarted')}
              <ArrowRight className="ms-2 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
