import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LocalePageProps } from '@/types/pages';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Política de Privacidad - Lotti',
    en: 'Privacy Policy - Lotti',
    ru: 'Политика конфиденциальности - Lotti',
  };

  return {
    title: titles[locale as keyof typeof titles],
  };
}

export default async function PrivacyPage({ params }: LocalePageProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f5f5]">
        <article className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
              <PrivacyContent />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function PrivacyContent() {
  const t = useTranslations('privacy');

  return (
    <>
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-600">{t('lastUpdated')}</p>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-8">{t('intro')}</p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section1.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section1.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {(t.raw('section1.items') as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section2.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section2.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {(t.raw('section2.items') as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section3.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section3.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>{t('section3.contract').split(':')[0]}:</strong>{' '}
              {t('section3.contract').split(':')[1]}
            </li>
            <li>
              <strong>{t('section3.consent').split(':')[0]}:</strong>{' '}
              {t('section3.consent').split(':')[1]}
            </li>
            <li>
              <strong>{t('section3.legitimate').split(':')[0]}:</strong>{' '}
              {t('section3.legitimate').split(':')[1]}
            </li>
            <li>
              <strong>{t('section3.legal').split(':')[0]}:</strong>{' '}
              {t('section3.legal').split(':')[1]}
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section4.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section4.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>{t('section4.providers').split(':')[0]}:</strong>{' '}
              {t('section4.providers').split(':')[1]}
            </li>
            <li>
              <strong>{t('section4.partners').split(':')[0]}:</strong>{' '}
              {t('section4.partners').split(':')[1]}
            </li>
            <li>
              <strong>{t('section4.authorities').split(':')[0]}:</strong>{' '}
              {t('section4.authorities').split(':')[1]}
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            {t('section4.noSale')}
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section5.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section5.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {(t.raw('section5.items') as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section6.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section6.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>{t('section6.access').split(':')[0]}:</strong>{' '}
              {t('section6.access').split(':')[1]}
            </li>
            <li>
              <strong>{t('section6.rectification').split(':')[0]}:</strong>{' '}
              {t('section6.rectification').split(':')[1]}
            </li>
            <li>
              <strong>{t('section6.erasure').split(':')[0]}:</strong>{' '}
              {t('section6.erasure').split(':')[1]}
            </li>
            <li>
              <strong>{t('section6.restriction').split(':')[0]}:</strong>{' '}
              {t('section6.restriction').split(':')[1]}
            </li>
            <li>
              <strong>{t('section6.portability').split(':')[0]}:</strong>{' '}
              {t('section6.portability').split(':')[1]}
            </li>
            <li>
              <strong>{t('section6.objection').split(':')[0]}:</strong>{' '}
              {t('section6.objection').split(':')[1]}
            </li>
            <li>
              <strong>{t('section6.withdraw').split(':')[0]}:</strong>{' '}
              {t('section6.withdraw').split(':')[1]}
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            {t('section6.contact')}
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section7.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section7.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>{t('section7.account').split(':')[0]}:</strong>{' '}
              {t('section7.account').split(':')[1]}
            </li>
            <li>
              <strong>{t('section7.transactions').split(':')[0]}:</strong>{' '}
              {t('section7.transactions').split(':')[1]}
            </li>
            <li>
              <strong>{t('section7.marketing').split(':')[0]}:</strong>{' '}
              {t('section7.marketing').split(':')[1]}
            </li>
            <li>
              <strong>{t('section7.cookies').split(':')[0]}:</strong>{' '}
              {t('section7.cookies').split(':')[1]}
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section8.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section8.intro')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {(t.raw('section8.items') as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section9.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t('section9.content')}</p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section10.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('section10.content')}{' '}
            <Link href="/legal/cookies" className="text-[#5a9fb8] hover:underline">
              {t('section10.link')}
            </Link>
            .
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section11.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t('section11.content')}</p>
        </section>

        {/* Section 12 - Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            {t('section12.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('section12.intro')}
          </p>
          <div className="bg-[#f5f5f5] rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-2">
              {t('section12.company')}
            </p>
            <p className="text-gray-700">
              {t('section12.email')}{' '}
              <a
                href="mailto:privacy@lotti.com"
                className="text-[#5a9fb8] hover:underline"
              >
                privacy@lotti.com
              </a>
            </p>
            <p className="text-gray-700">
              {t('section12.phone')} +34 XXX XXX XXX
            </p>
            <p className="text-gray-700">
              {t('section12.address')} {t('section12.location')}
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            {t('section12.complaint')}{' '}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a9fb8] hover:underline"
            >
              www.aepd.es
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
