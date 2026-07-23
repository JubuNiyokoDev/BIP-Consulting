import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import fr from './locales/fr';
import sv from './locales/sv';

export type Language = 'en' | 'fr' | 'sv';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
];

const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('bip_lang')) as Language | null;
const browserLang = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'en';
const defaultLang: Language = (savedLang ?? (['en', 'fr', 'sv'].includes(browserLang) ? browserLang : 'en')) as Language;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    sv: { translation: sv },
  },
  lng: defaultLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export function setLanguage(lang: Language) {
  i18n.changeLanguage(lang);
  localStorage.setItem('bip_lang', lang);
}

export default i18n;
