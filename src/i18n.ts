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

// Маппинг стран на языки (для GeoIP)
export const countryToLocale: Record<string, Locale> = {
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  US: 'en',
  GB: 'en',
  AU: 'en',
  RU: 'ru',
  BY: 'ru',
  KZ: 'ru',
  UA: 'ru',
};

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale - новый API в next-intl v3
  let locale = await requestLocale;

  // Валидация локали
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
