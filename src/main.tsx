import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/config';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';
import './App.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </StrictMode>
);
