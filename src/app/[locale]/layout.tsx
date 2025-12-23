import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { CookieBanner } from '@/components/CookieConcent';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lotti.delivery'),
  title: 'Lotti - Lavandería Online Barcelona',
  description: 'Servicio de lavandería profesional con recogida y entrega a domicilio en Barcelona',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale} key={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
