import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n';

const baseUrl = 'https://yoursite.com';

const staticPages = [
  '',
  '/como-funciona',
  '/tarifas',
  '/contacto',
  '/preguntas-frecuentes',
  '/sobre-nosotros',
  '/legal/cookies',
  '/legal/privacidad',
  '/legal/terminos',
  '/legal/devolucion',
];

const cities = ['madrid', 'barcelona', 'valencia']; // Добавь все города

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Статические страницы для всех локалей
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      urls.push({
        url: `${baseUrl}${locale === defaultLocale ? '' : `/${locale}`}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${baseUrl}${l === defaultLocale ? '' : `/${l}`}${page}`,
            ])
          ),
        },
      });
    });

    // Страницы городов
    cities.forEach((city) => {
      urls.push({
        url: `${baseUrl}${locale === defaultLocale ? '' : `/${locale}`}/zonas-servicio/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return urls;
}
