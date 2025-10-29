import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation('master');

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { name: t('header.home'), path: '/' },
        { name: t('header.courses'), path: '/courses' },
        { name: t('header.about'), path: '/about' },
        { name: t('header.blog'), path: '/blog' },
        { name: t('header.contact'), path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary to-primary-dark backdrop-blur-sm border-b border-secondary/20 shadow-xl">
            <nav className="container mx-auto px-4 py-5">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <Code2 className="w-8 h-8 text-secondary transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-heading font-bold text-primary-foreground">
                            Code<span className="text-secondary">Skillz</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors relative group ${
                                    isActive(link.path)
                                        ? 'text-secondary'
                                        : 'text-primary-foreground hover:text-secondary'
                                }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all ${
                                        isActive(link.path)
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link to="/auth">
                            <Button
                                variant="secondary"
                                className="font-semibold shadow-lg"
                            >
                                {t('header.getStarted')}
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <div className="md:hidden">
                            <LanguageSwitcher />
                        </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-primary-foreground hover:text-secondary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium transition-colors py-2 ${
                                        isActive(link.path)
                                            ? 'text-secondary'
                                            : 'text-primary-foreground hover:text-secondary'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-4">

                                <Link to="/auth" className="w-full">
                                    <Button
                                        variant="secondary"
                                        className="w-full font-semibold shadow-lg"
                                    >
                                        {t('header.getStarted')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
