import { Award, BookOpen, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import farzadImage from '@/assets/farzad-portrait.jpg';

const About = () => {
    return (
        <div className="min-h-screen pb-20  mt-20">
            <section className="bg-gradient-hero py-16 mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
                        Meet <span className="text-secondary">Farzad</span>
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Your Coding Mentor - Researcher, Teacher, Passionate
                        Educator
                    </p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in">
                        <img
                            src={farzadImage}
                            alt="Farzad - CodeSkillz Instructor"
                            className="w-full max-w-md mx-auto rounded-lg shadow-purple border-4 border-primary/20"
                        />
                    </div>

                    <div className="space-y-6 animate-fade-in">
                        <h2 className="font-heading font-bold text-3xl text-foreground">
                            Passionate About{' '}
                            <span className="text-secondary">Teaching</span>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            With years of experience as a{' '}
                            <span className="font-semibold text-primary">
                                Researcher
                            </span>{' '}
                            and dedicated teacher, I've helped hundreds of
                            students transform their coding skills. My journey
                            in computer science research has given me deep
                            insights into programming paradigms, algorithms, and
                            software engineering best practices.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I believe in hands-on learning, real-world projects,
                            and building a strong foundation that empowers
                            students to tackle any coding challenge. Every
                            course at CodeSkillz is designed with one goal: to
                            help you become a confident, capable developer.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Whether you're starting your coding journey or
                            advancing your skills, I'm here to guide you every
                            step of the way with interactive live classes,
                            comprehensive resources, and personalized support.
                        </p>

                        <Link to="/courses">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="mt-4"
                            >
                                View My Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-muted py-16 mb-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                        The CodeSkillz{' '}
                        <span className="text-secondary">Mission</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Empowering aspiring developers through{' '}
                        <span className="font-semibold text-foreground">
                            hands-on learning
                        </span>
                        ,{' '}
                        <span className="font-semibold text-foreground">
                            expert instruction
                        </span>
                        , and a supportive community. We're here to make coding
                        education accessible, engaging, and transformative.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
                    What Drives <span className="text-secondary">Us</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-purple">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Award className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">
                            Excellence
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Delivering high-quality courses with cutting-edge
                            curriculum and best practices
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-secondary transition-all hover:shadow-crimson">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                            <BookOpen className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">
                            Learning
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Fostering continuous growth through interactive
                            lessons and real-world projects
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-purple">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">
                            Community
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Building a supportive network where students help
                            each other succeed
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-secondary transition-all hover:shadow-crimson">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                            <Heart className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">
                            Passion
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Teaching with genuine enthusiasm and dedication to
                            student success
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-card rounded-lg p-12 text-center">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                        Ready to Learn with Farzad?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                        Join the CodeSkillz community and start your coding
                        journey today
                    </p>
                    <Link to="/courses">
                        <Button variant="hero" size="lg">
                            Browse Courses
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
