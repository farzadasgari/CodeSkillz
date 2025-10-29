import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
    language: string;
    isRTL: boolean;
    changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [isRTL, setIsRTL] = useState(i18n.language === 'fa');

    useEffect(() => {
        const rtlLanguages = ['fa', 'ar', 'he'];
        const currentIsRTL = rtlLanguages.includes(i18n.language);
        setIsRTL(currentIsRTL);

        document.documentElement.dir = currentIsRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;

        if (i18n.language === 'fa') {
            document.body.classList.add('font-persian');
        } else {
            document.body.classList.remove('font-persian');
        }
    }, [i18n.language]);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, isRTL, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
