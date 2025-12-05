import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';
import { LocalePageProps } from '@/types/pages';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Contacto - Lotti Lavandería Barcelona',
    en: 'Contact - Lotti Laundry Barcelona',
    ru: 'Контакты - Lotti Прачечная Барселона',
  };

  return {
    title: titles[locale as keyof typeof titles],
  };
}

export default async function ContactPage({ params }: LocalePageProps) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
                <ContactPageContent locale={locale} />
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl lg:text-3xl font-serif text-gray-900 mb-8">
                  <FormTitle locale={locale} />
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Info Card */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
                  <h2 className="text-2xl font-serif text-gray-900 mb-6">
                    <InfoTitle locale={locale} />
                  </h2>
                  <div className="space-y-6">
                    <ContactInfo locale={locale} />
                  </div>
                </div>

                {/* Social Card */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
                  <h2 className="text-2xl font-serif text-gray-900 mb-6">
                    <SocialTitle locale={locale} />
                  </h2>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Helper components for translations
function ContactPageContent({ locale }: { locale: string }) {
  const t = useTranslations('contacts');
  return (
    <>
      {t('title')}
      <p className="text-lg lg:text-xl text-gray-700 mt-4">
        {t('subtitle')}
      </p>
    </>
  );
}

function FormTitle({ locale }: { locale: string }) {
  const t = useTranslations('contacts.form');
  return <>{t('title')}</>;
}

function InfoTitle({ locale }: { locale: string }) {
  const t = useTranslations('contacts.info');
  return <>{t('title')}</>;
}

function ContactInfo({ locale }: { locale: string }) {
  const t = useTranslations('contacts.info');
  
  return (
    <>
      <div className="flex items-start gap-4">
        <MapPin className="h-6 w-6 text-[#5a9fb8] flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Адрес</p>
          <p className="text-gray-700">{t('address')}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className="h-6 w-6 text-[#5a9fb8] flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Телефон</p>
          <a
            href={`tel:${t('phone')}`}
            className="text-gray-700 hover:text-[#5a9fb8] transition-colors"
          >
            {t('phone')}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="h-6 w-6 text-[#5a9fb8] flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Email</p>
          <a
            href={`mailto:${t('email')}`}
            className="text-gray-700 hover:text-[#5a9fb8] transition-colors"
          >
            {t('email')}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className="h-6 w-6 text-[#5a9fb8] flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Часы работы</p>
          <p className="text-gray-700">{t('hours')}</p>
        </div>
      </div>
    </>
  );
}

function SocialTitle({ locale }: { locale: string }) {
  const t = useTranslations('contacts.social');
  return <>{t('title')}</>;
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://instagram.com/lotti"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d4e8f0] hover:bg-[#5a9fb8] text-gray-900 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://facebook.com/lotti"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d4e8f0] hover:bg-[#5a9fb8] text-gray-900 hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/34XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d4e8f0] hover:bg-[#5a9fb8] text-gray-900 hover:text-white transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
