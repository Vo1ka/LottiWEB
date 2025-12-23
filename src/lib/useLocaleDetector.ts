import { useState, useEffect } from 'react';

const supported = ['en', 'ru', 'es']
const fallback = 'en';

export function useLocaleDetector() {
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored && supported.includes(stored)) {
      setLocale(stored);
      return;
    }
    const browserLang = navigator.language.split('-')[0];
    if (supported.includes(browserLang)) {
      setLocale(browserLang);
    } else {
      setLocale(fallback);
    }
  }, []);

  return locale;
}
