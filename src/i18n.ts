import { getRequestConfig } from 'next-intl/server';

export const locales = ['es', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  ru: 'Русский',
};

export const countryToLocale: Record<string, Locale> = {
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es',
  HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es',
  UY: 'es', PR: 'es',
  US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en',
  ZA: 'en', SG: 'en', IN: 'en',
  RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'ru', UZ: 'ru', KG: 'ru',
  TJ: 'ru', AM: 'ru', AZ: 'ru', MD: 'ru',
};

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

export default getRequestConfig(async ({ locale }) => {
  // ✅ Если локаль невалидна, используем дефолтную
  const validLocale = locale && locales.includes(locale as Locale) 
    ? locale 
    : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
    timeZone: 'Europe/Madrid',
    now: new Date(),
  };
});
