import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleCursorClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 5) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setClickCount(0);
        setShowEasterEgg(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/10 to-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan text-xs font-mono animate-float"
            style={{
              left: `${i * 5}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 15 }, () => 
              String.fromCharCode(33 + Math.floor(Math.random() * 94))
            ).join('\n')}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl text-cyan/40 font-mono animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {'{ 404 }'}
          </div>
        ))}
      </div>

      <div 
        className="absolute top-8 right-8 text-cyan text-2xl font-mono cursor-pointer hover:scale-125 transition-transform"
        onClick={handleCursorClick}
        title="Click me..."
      >
        <span className="animate-pulse">_</span>
      </div>

      {showEasterEgg && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan/90 text-background px-8 py-6 rounded-lg shadow-glow animate-scale-in z-50">
          <div className="text-center space-y-3">
            <div className="text-3xl">🎮</div>
            <div className="font-bold text-xl">Matrix Explorer Badge Unlocked!</div>
            <div className="text-sm">You've discovered the secret! Check your profile.</div>
          </div>
        </div>
      )}

      <div className="text-center space-y-8 max-w-2xl relative z-10">
        <div className="space-y-4">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-heading font-bold text-cyan animate-pulse relative">
              404
            </h1>
            <h1 className="text-9xl md:text-[12rem] font-heading font-bold text-primary absolute inset-0 opacity-70 animate-pulse" style={{ animationDelay: '0.1s', transform: 'translate(2px, 2px)' }}>
              404
            </h1>
            <h1 className="text-9xl md:text-[12rem] font-heading font-bold text-destructive absolute inset-0 opacity-50 animate-pulse" style={{ animationDelay: '0.2s', transform: 'translate(-2px, -2px)' }}>
              404
            </h1>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Houston, we have a syntax error.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The page you're looking for has been deleted, renamed, or is temporarily unavailable.
            </p>
            <p className="text-cyan text-sm italic">
              Either the URL is drunk, or you just discovered a secret level.<br />
              Either way… let's get you back on track.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/">
            <Button size="lg" className="gap-2 shadow-cyan w-full sm:w-auto">
              <Home className="w-5 h-5" />
              Beam Me Home
            </Button>
          </Link>
          <Link to="/courses">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
              <BookOpen className="w-5 h-5" />
              Explore Courses
            </Button>
          </Link>
        </div>

        <div className="pt-2">
          <a 
            href="mailto:khufarzadasgari@gmail.com?subject=Bug Report - 404 Page" 
            className="text-sm text-muted-foreground hover:text-cyan transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Tell Farzad (Report Bug)
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
