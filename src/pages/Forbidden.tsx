import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lock, Home, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

const Forbidden = () => {
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const [keySequence, setKeySequence] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const newSequence = [...keySequence, e.key].slice(-4);
            setKeySequence(newSequence);

            if (newSequence.join('').toLowerCase() === 'sudo') {
                setShowEasterEgg(true);
                setTimeout(() => setShowEasterEgg(false), 3000);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [keySequence]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-destructive/5 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated red alert border */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 border-4 border-destructive/30 animate-pulse"
                    style={{ animationDuration: '3s' }}
                />
            </div>

            {/* Background effects */}
            <div className="absolute inset-0 opacity-20">
                {/* Spinning lock in background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Lock
                        className="w-96 h-96 text-primary/20 animate-spin"
                        style={{ animationDuration: '20s' }}
                    />
                </div>

                {/* Floating locked padlocks */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                        }}
                    >
                        <Lock className="w-8 h-8 text-cyan/30" />
                    </div>
                ))}
            </div>

            {/* Security camera */}
            <div className="absolute top-8 right-8 animate-pulse">
                <div className="relative">
                    <div className="w-16 h-12 bg-gradient-to-br from-primary to-destructive rounded-lg shadow-elegant flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-destructive animate-ping absolute" />
                        <div className="w-6 h-6 rounded-full bg-destructive/80 relative" />
                    </div>
                    <div className="text-xs text-muted-foreground text-center mt-1 font-mono">
                        SCANNING...
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="text-center space-y-8 max-w-2xl relative z-10">
                {/* Glitching 403 */}
                <div className="relative">
                    <h1 className="text-9xl font-heading font-bold bg-gradient-to-r from-destructive via-primary to-cyan bg-clip-text text-transparent animate-pulse">
                        403
                    </h1>
                    <div
                        className="absolute inset-0 text-9xl font-heading font-bold text-destructive/20 animate-pulse"
                        style={{ animationDelay: '0.1s' }}
                    >
                        403
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl font-heading font-bold text-foreground uppercase tracking-wider animate-fade-in">
                        ACCESS DENIED
                    </h2>

                    <div className="space-y-2">
                        <p className="text-xl font-bold text-foreground">
                            Nice try, hacker.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            You don't have permission to access this page.
                            <br />
                            Maybe you're not enrolled... yet?
                        </p>
                        <p className="text-cyan text-sm italic pt-2">
                            This area is guarded by Farzad's legendary firewall.
                            <br />
                            Only true CodeSkillz students may pass.
                        </p>
                    </div>

                    {/* Terminal output */}
                    <div className="bg-background/80 backdrop-blur-sm border border-cyan/30 rounded-lg p-6 text-left font-mono text-sm space-y-1 shadow-elegant">
                        <div className="text-cyan">
                            &gt; Checking credentials...
                        </div>
                        <div className="text-destructive">
                            &gt; Permission denied.
                        </div>
                        <div className="text-amber-500">
                            &gt; Intruder alert level: Medium
                        </div>
                        <div className="text-cyan">
                            &gt; Suggested action: Enroll in a course
                        </div>
                        <div className="animate-pulse">_</div>
                    </div>
                </div>

                {/* Easter egg message */}
                {showEasterEgg && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan/90 text-background px-8 py-4 rounded-lg shadow-glow animate-scale-in font-bold text-xl">
                        Nice try, but no root access here 😊
                    </div>
                )}

                {/* Call to action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to="/courses">
                        <Button
                            size="lg"
                            className="gap-2 shadow-cyan w-full sm:w-auto"
                        >
                            <BookOpen className="w-5 h-5" />
                            Enroll Now & Gain Access
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="gap-2 w-full sm:w-auto"
                        onClick={() => window.history.back()}
                    >
                        <Home className="w-5 h-5" />
                        Back to Safety
                    </Button>
                </div>

                <div className="pt-2">
                    <Link
                        to="/auth"
                        className="text-sm text-cyan hover:text-cyan/80 transition-colors underline"
                    >
                        Already Enrolled? Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;
