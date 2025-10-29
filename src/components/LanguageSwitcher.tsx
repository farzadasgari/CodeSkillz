import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Flag from './Flag';

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧', dir:'ltr' },
        { code: 'fa', name: 'فارسی', flag: '🇮🇷', dir:'rtl' },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-primary-foreground hover:text-secondary hover:bg-primary/20 transition-colors"
                >
                    <Globe className="h-4 w-4" />
                    <span className="inline-flex items-center">
                        <Flag
                            emoji={
                                languages.find((l) => l.code === language)
                                    ?.flag || '🇬🇧'
                            }
                            size={20}
                        />
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`cursor-pointer gap-2 ${
                            language === lang.code
                                ? 'bg-primary/10 text-primary'
                                : ''
                        }`}
                    >
                        <span className="text-lg inline-flex items-center align-middle">
                            <Flag emoji={lang.flag} size={20} />
                        </span>
                        <span>{lang.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
