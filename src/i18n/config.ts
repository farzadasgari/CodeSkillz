import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import homeEN from '@/locales/en/home.json';
import homeFA from '@/locales/fa/home.json';
import masterEN from '@/locales/en/master.json';
import masterFA from '@/locales/fa/master.json';

const resources = {
    en: {
        home: homeEN,
        master: masterEN,
    },
    fa: {
        home: homeFA,
        master: masterFA,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
