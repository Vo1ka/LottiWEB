import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutStorySection } from '@/components/sections/about/AboutStorySection';
import { AboutBenefitsSection } from '@/components/sections/about/AboutBenefitsSection';
import { AboutCTASection } from '@/components/sections/about/AboutCTASection';
import { Metadata } from 'next';
import { LocalePageProps } from '@/types/pages';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Sobre Nosotros - Lotti Lavandería Barcelona | Nuestra Historia',
    en: 'About Us - Lotti Laundry Barcelona | Our Story',
    ru: 'О нас - Lotti Прачечная Барселона | Наша история',
  };

  const descriptions = {
    es: 'Conoce la historia de Lotti: cómo un equipo de amigos transformó la lavandería en Barcelona. Más de 10,000 clientes confían en nosotros. Servicio rápido, profesional y ecológico.',
    en: 'Learn about Lotti: how a team of friends transformed laundry in Barcelona. Over 10,000 customers trust us. Fast, professional, and eco-friendly service.',
    ru: 'Узнайте историю Lotti: как команда друзей изменила прачечную в Барселоне. Более 10,000 клиентов доверяют нам. Быстрый, профессиональный и экологичный сервис.',
  };

  const keywords = [
    'о lotti',
    'прачечная барселона',
    'история компании',
    'команда lotti',
    'доставка стирки',
    'онлайн прачечная',
    'about lotti',
    'laundry barcelona',
    'sobre lotti',
    'lavandería barcelona',
  ];

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    keywords: keywords,
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ['/images/og-about.jpg'],
      locale: locale,
      type: 'website',
      url: `https://lotti.delivery/${locale}/about`,
    },
    alternates: {
      canonical: `https://lotti.delivery/${locale}/about`,
      languages: {
        'es': 'https://lotti.delivery/es/about',
        'en': 'https://lotti.delivery/en/about',
        'ru': 'https://lotti.delivery/ru/about',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function AboutPage({ params }: LocalePageProps) {
  const { locale } = await params;

  // JSON-LD Schema для организации
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lotti',
    description: 'Servicio de lavandería profesional con recogida y entrega a domicilio en Barcelona',
    url: 'https://lotti.delivery',
    logo: 'https://lotti.delivery/logo.png',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-635-669-900',
      contactType: 'Customer Service',
      areaServed: 'ES',
      availableLanguage: ['Spanish', 'English', 'Russian'],
    },
    sameAs: [
      'https://www.instagram.com/lotti',
      'https://www.facebook.com/lotti',
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Header />
      <main>
        <AboutStorySection />
        <AboutBenefitsSection />
        <AboutCTASection />
      </main>
      <Footer />
    </>
  );
}
