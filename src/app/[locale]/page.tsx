import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { WashModesSection } from '@/components/sections/home/WashModesSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { FAQSection } from '@/components/sections/home/FAQSection';
import { FinalCTASection } from '@/components/sections/home/FinalCTASection';
import { locales } from '@/i18n';
import { Metadata } from 'next';
import { LocalePageProps } from '@/types/pages';
import { Header } from '@/components/layout/Header';


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamic = 'force-static';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Lotti - Lavandería Online Barcelona | Recogida y Entrega en 3 Horas',
    en: 'Lotti - Online Laundry Barcelona | Pickup and Delivery in 3 Hours',
    ru: 'Lotti - Онлайн Прачечная Барселона | Забор и Доставка за 3 Часа',
  };

  const descriptions = {
    es: 'Servicio de lavandería profesional en Barcelona. Recogemos tu ropa en 30 minutos y la devolvemos limpia en 3 horas. Más de 10,000 clientes satisfechos. ¡Descarga la app y obtén 30% de descuento!',
    en: 'Professional laundry service in Barcelona. We pick up your clothes in 30 minutes and return them clean in 3 hours. Over 10,000 satisfied customers. Download the app and get 30% off!',
    ru: 'Профессиональная прачечная в Барселоне. Забираем одежду за 30 минут, возвращаем чистой через 3 часа. Более 10,000 довольных клиентов. Скачайте приложение и получите скидку 30%!',
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ['/images/og-image.jpg'],
      locale: locale,
      type: 'website',
      url: `https://lotti.delivery/${locale}`,
    },
  };
}

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  return (
    <>
      <Header key={`header-${locale}`} />
      <main>
        <HeroSection />
        <ServicesSection />
        <WashModesSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer key={`footer-${locale}`} />
    </>
  );
}
