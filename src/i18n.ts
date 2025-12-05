import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['es', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  ru: 'Русский',
};

// Расширенный маппинг стран
export const countryToLocale: Record<string, Locale> = {
  // Испаноязычные
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es',
  HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es',
  UY: 'es', PR: 'es',
  
  // Англоязычные
  US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en',
  ZA: 'en', SG: 'en', IN: 'en',
  
  // Русскоязычные
  RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'ru', UZ: 'ru', KG: 'ru',
  TJ: 'ru', AM: 'ru', AZ: 'ru', MD: 'ru',
};

// Конфигурация локалей для SEO
export const localeConfig: Record<Locale, {
  currency: string;
  currencySymbol: string;
  phonePrefix: string;
  dateFormat: string;
}> = {
  es: {
    currency: 'EUR',
    currencySymbol: '€',
    phonePrefix: '+34',
    dateFormat: 'dd/MM/yyyy',
  },
  en: {
    currency: 'USD',
    currencySymbol: '$',
    phonePrefix: '+1',
    dateFormat: 'MM/dd/yyyy',
  },
  ru: {
    currency: 'RUB',
    currencySymbol: '₽',
    phonePrefix: '+7',
    dateFormat: 'dd.MM.yyyy',
  },
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Europe/Madrid', // Меняй в зависимости от основного рынка
    now: new Date(),
  };
});
