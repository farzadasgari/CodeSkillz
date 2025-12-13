import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseNotFound = () => {
    const { t } = useTranslation('courses');

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary/20 relative overflow-hidden flex items-center justify-center">
            {/* Animated code rain background */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-cyan text-xs font-mono animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    >
                        {Math.random() > 0.5 ? '{ }' : '< />'}
                    </div>
                ))}
            </div>

            {/* Floating brackets */}
            <div className="absolute top-1/4 left-1/4 text-cyan/30 text-9xl font-mono animate-pulse">
                {'{'}
            </div>
            <div
                className="absolute bottom-1/4 right-1/4 text-cyan/30 text-9xl font-mono animate-pulse"
                style={{ animationDelay: '1s' }}
            >
                {'}'}
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    {/* Glitchy 404 */}
                    <div className="relative">
                        <h1
                            className="text-9xl md:text-[12rem] font-bold text-cyan animate-glitch leading-none mb-4"
                            style={{
                                textShadow:
                                    '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
                                fontFamily: 'monospace',
                            }}
                        >
                            404
                        </h1>
                        <div
                            className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-secondary/50 animate-glitch-2 leading-none"
                            style={{ fontFamily: 'monospace' }}
                        >
                            404
                        </div>
                    </div>

                    {/* Main message */}
                    <div className="space-y-4 text-white">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold">
                            Houston, we have a{' '}
                            <span className="text-cyan">syntax error</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            The course you're looking for has been deleted,
                            renamed, or is temporarily unavailable.
                        </p>
                        <p className="text-base text-cyan/90">
                            Either the URL is drunk, or you just discovered a
                            secret level. Either way… let's get you back on
                            track.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full sm:w-auto shadow-cyan text-lg px-8"
                            asChild
                        >
                            <Link to="/">
                                <Home className="mr-2 h-5 w-5" />
                                Beam Me Home
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-cyan text-cyan hover:bg-cyan hover:text-primary text-lg px-8"
                            asChild
                        >
                            <Link to="/courses">
                                <BookOpen className="mr-2 h-5 w-5" />
                                Explore Courses
                            </Link>
                        </Button>
                    </div>

                    {/* Report bug link */}
                    <div className="pt-6">
                        <a
                            href="mailto:khufarzadasgari@gmail.com"
                            className="text-sm text-white/70 hover:text-cyan transition-colors inline-flex items-center gap-2"
                        >
                            <Mail className="h-4 w-4" />
                            Tell Farzad (Report Bug)
                        </a>
                    </div>

                    {/* Terminal cursor */}
                    <div className="pt-8 text-cyan text-xl font-mono animate-pulse">
                        <span className="inline-block w-2 h-6 bg-cyan ml-1 animate-blink"></span>
                    </div>
                </div>
            </div>

            {/* Scan lines effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent animate-scan"></div>
            </div>

            <style>{`
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-1px, -1px);
          }
        }

        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          25% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(-2px, 2px);
          }
          75% {
            transform: translate(1px, 1px);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .animate-glitch {
          animation: glitch 4s infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 4s infinite;
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
        </div>
    );
};

export default CourseNotFound;
