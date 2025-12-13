import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import commonEN from '@/locales/en/common.json';
import commonFA from '@/locales/fa/common.json';
import homeEN from '@/locales/en/home.json';
import homeFA from '@/locales/fa/home.json';
import coursesEN from '@/locales/en/courses.json';
import coursesFA from '@/locales/fa/courses.json';
import courseDataEN from '@/locales/en/courseData.json';
import courseDataFA from '@/locales/fa/courseData.json';
import blogDataEN from '@/locales/en/blogData.json';
import blogDataFA from '@/locales/fa/blogData.json';
import aboutEN from '@/locales/en/about.json';
import aboutFA from '@/locales/fa/about.json';
import contactEN from '@/locales/en/contact.json';
import contactFA from '@/locales/fa/contact.json';
import blogEN from '@/locales/en/blog.json';
import blogFA from '@/locales/fa/blog.json';
import faqEN from '@/locales/en/faq.json';
import faqFA from '@/locales/fa/faq.json';
import legalEN from '@/locales/en/legal.json';
import legalFA from '@/locales/fa/legal.json';
import authEN from '@/locales/en/auth.json';
import authFA from '@/locales/fa/auth.json';
import dashboardEN from '@/locales/en/dashboard.json';
import dashboardFA from '@/locales/fa/dashboard.json';

const resources = {
    en: {
        common: commonEN,
        home: homeEN,
        courses: coursesEN,
        courseData: courseDataEN,
        blogData: blogDataEN,
        about: aboutEN,
        contact: contactEN,
        blog: blogEN,
        faq: faqEN,
        legal: legalEN,
        auth: authEN,
        dashboard: dashboardEN,
    },
    fa: {
        common: commonFA,
        home: homeFA,
        courses: coursesFA,
        courseData: courseDataFA,
        blogData: blogDataFA,
        about: aboutFA,
        contact: contactFA,
        blog: blogFA,
        faq: faqFA,
        legal: legalFA,
        auth: authFA,
        dashboard: dashboardFA,
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
