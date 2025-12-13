import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
    const [tab, setTab] = useState<'login' | 'register'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { toast } = useToast();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: 'Login Successful!',
            description: 'Welcome back to CodeSkillz',
        });
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: 'Registration Successful!',
            description:
                'Welcome to CodeSkillz! Check your email to verify your account.',
        });
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 opacity-5">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-primary font-mono text-sm animate-fade-in"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                            }}
                        >
                            {`<code>${Math.random() > 0.5 ? '/' : ''}</code>`}
                        </div>
                    ))}
                </div>
            </div>

            {/* Header */}
            <header className="relative z-10 bg-gradient-hero/95 backdrop-blur-sm border-b border-primary/20">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2 group">
                            <Code2 className="w-8 h-8 text-secondary transition-transform group-hover:scale-110" />
                            <span className="text-2xl font-heading font-bold text-primary-foreground">
                                Code
                                <span className="text-secondary">Skillz</span>
                            </span>
                        </Link>
                        <Link
                            to="/"
                            className="text-primary-foreground hover:text-secondary transition-colors font-medium"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <div className="relative z-10 container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="hidden lg:block">
                        <div className="bg-gradient-card p-8 rounded-lg shadow-purple">
                            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
                                Join the Code
                                <span className="text-secondary">
                                    Skillz
                                </span>{' '}
                                Revolution
                            </h2>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Live classes via Google Meet',
                                    'Learn from Pros',
                                    'Hands-on coding projects',
                                    'Access to exclusive community',
                                ].map((benefit, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                        <span className="text-primary-foreground">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/courses">
                                <Button
                                    variant="secondary"
                                    className="w-full mt-6"
                                    size="lg"
                                >
                                    Browse Courses
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full max-w-md mx-auto lg:mx-0">
                        <Tabs
                            value={tab}
                            onValueChange={(v) =>
                                setTab(v as 'login' | 'register')
                            }
                            className="w-full"
                        >
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="register">
                                    Register
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <div className="bg-card p-8 rounded-lg shadow-purple border border-primary/10">
                                    <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                                        Welcome Back!
                                    </h2>
                                    <form
                                        onSubmit={handleLogin}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <Label htmlFor="login-email">
                                                Email
                                            </Label>
                                            <Input
                                                id="login-email"
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                className="border-primary/30 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="login-password">
                                                Password
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="login-password"
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    placeholder="Enter your password"
                                                    required
                                                    className="border-primary/30 focus:border-primary pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="remember" />
                                                <label
                                                    htmlFor="remember"
                                                    className="text-sm font-medium leading-none cursor-pointer"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <Link
                                                to="/forgot-password"
                                                className="text-sm text-primary hover:text-secondary transition-colors"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Button
                                            type="submit"
                                            variant="secondary"
                                            className="w-full"
                                            size="lg"
                                        >
                                            Log In
                                        </Button>
                                    </form>
                                    <p className="text-center mt-6 text-sm text-muted-foreground">
                                        New to CodeSkillz?{' '}
                                        <button
                                            type="button"
                                            onClick={() => setTab('register')}
                                            className="text-primary hover:text-secondary transition-colors font-medium"
                                        >
                                            Sign up to join live classes!
                                        </button>
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="register">
                                <div className="bg-card p-8 rounded-lg shadow-purple border border-primary/10">
                                    <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                                        Start Your Journey
                                    </h2>
                                    <form
                                        onSubmit={handleRegister}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <Label htmlFor="register-name">
                                                Full Name
                                            </Label>
                                            <Input
                                                id="register-name"
                                                type="text"
                                                placeholder="Your full name"
                                                required
                                                className="border-primary/30 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="register-email">
                                                Email
                                            </Label>
                                            <Input
                                                id="register-email"
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                className="border-primary/30 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="register-password">
                                                Password
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="register-password"
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    placeholder="Create a password"
                                                    required
                                                    className="border-primary/30 focus:border-primary pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="register-confirm-password">
                                                Confirm Password
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="register-confirm-password"
                                                    type={
                                                        showConfirmPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    placeholder="Confirm your password"
                                                    required
                                                    className="border-primary/30 focus:border-primary pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowConfirmPassword(
                                                            !showConfirmPassword
                                                        )
                                                    }
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80"
                                                >
                                                    {showConfirmPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <Checkbox id="terms" required />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm leading-relaxed cursor-pointer"
                                            >
                                                I agree to the{' '}
                                                <Link
                                                    to="/terms-of-service"
                                                    className="text-primary hover:text-secondary transition-colors"
                                                >
                                                    Terms of Service
                                                </Link>{' '}
                                                and{' '}
                                                <Link
                                                    to="/privacy-policy"
                                                    className="text-primary hover:text-secondary transition-colors"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </label>
                                        </div>
                                        <Button
                                            type="submit"
                                            variant="secondary"
                                            className="w-full"
                                            size="lg"
                                        >
                                            Sign Up
                                        </Button>
                                    </form>
                                    <p className="text-center mt-6 text-sm text-muted-foreground">
                                        Already have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() => setTab('login')}
                                            className="text-primary hover:text-secondary transition-colors font-medium"
                                        >
                                            Log in now!
                                        </button>
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="lg:hidden">
                        <div className="bg-gradient-card p-6 rounded-lg shadow-purple">
                            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-4">
                                Why Join CodeSkillz?
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Live classes via Google Meet',
                                    'Learn from Pros',
                                    'Hands-on coding projects',
                                ].map((benefit, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                                        <span className="text-primary-foreground text-sm">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
