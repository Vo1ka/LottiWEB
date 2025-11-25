import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, countryToLocale, Locale } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Пропускаем статику и API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Проверяем, есть ли уже выбранный язык в cookie
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value as Locale;

  if (savedLocale && locales.includes(savedLocale)) {
    return intlMiddleware(request);
  }

  // GeoIP определение через Vercel headers
  // Vercel автоматически добавляет x-vercel-ip-country
  const country = request.headers.get('x-vercel-ip-country');

  if (country && countryToLocale[country]) {
    const detectedLocale = countryToLocale[country];
    const response = intlMiddleware(request);

    // Сохраняем определённый язык
    response.cookies.set('NEXT_LOCALE', detectedLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 год
      path: '/',
    });

    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
