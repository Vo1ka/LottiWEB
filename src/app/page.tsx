import { HeroSection } from '@/components/sections/home/HeroSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { WashModesSection } from '@/components/sections/home/WashModesSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { FAQSection } from '@/components/sections/home/FAQSection';
import { FinalCTASection } from '@/components/sections/home/FinalCTASection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { LocalePageProps } from '@/types/pages';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Lotti - Lavandería Online Barcelona | Recogida y Entrega en 3 Horas',
    en: 'Lotti - Online Laundry Barcelona | Pickup and Delivery in 3 Hours',
    ru: 'Lotti - Онлайн-прачечная Барселона | Забор и доставка за 3 часа',
  };

  const descriptions = {
    es: 'Servicio de lavandería profesional en Barcelona. Recogemos en 30 minutos, devolvemos en 3 horas. Desde €3.99/kg. Descarga la app y obtén 30% de descuento.',
    en: 'Professional laundry service in Barcelona. Pickup in 30 minutes, return in 3 hours. From €3.99/kg. Download the app and get 30% off.',
    ru: 'Профессиональная прачечная в Барселоне. Забор за 30 минут, возврат через 3 часа. От €3.99/кг. Скачайте приложение и получите скидку 30%.',
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  };
}

export default async function HomePage({ params }: LocalePageProps) {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WashModesSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
