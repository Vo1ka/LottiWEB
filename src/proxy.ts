import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, countryToLocale, Locale } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Пропускаем статику, API и служебные файлы
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|woff|woff2|ttf|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // 1. Проверяем сохранённую локаль в cookie
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value as Locale;
  if (savedLocale && locales.includes(savedLocale)) {
    return intlMiddleware(request);
  }

  // 2. Определяем локаль по GeoIP (Vercel Edge)
  const country = request.headers.get('x-vercel-ip-country');
  let detectedLocale: Locale | null = null;

  if (country && countryToLocale[country]) {
    detectedLocale = countryToLocale[country];
  } else {
    // 3. Fallback на Accept-Language
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const preferredLang = acceptLanguage
        .split(',')[0]
        .split('-')[0]
        .toLowerCase();

      if (locales.includes(preferredLang as Locale)) {
        detectedLocale = preferredLang as Locale;
      }
    }
  }

  // 4. Применяем определённую локаль
  if (detectedLocale) {
    const response = intlMiddleware(request);
    response.cookies.set('NEXT_LOCALE', detectedLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 год
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Все пути кроме API, статики и служебных файлов
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
