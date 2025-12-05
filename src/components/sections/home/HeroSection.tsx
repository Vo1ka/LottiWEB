import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-[#f5f5f5] pt-16 lg:pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Content - Centered */}
        <div className="max-w-5xl mx-auto text-center space-y-6 lg:space-y-8 pb-12 lg:pb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
            {t('title')}
          </h1>

          {/* Features - Each paragraph on new line */}
          <div className="space-y-3 lg:space-y-4 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>{t('features.0')}</p>
            <p>{t('features.1')}</p>
            <p>{t('features.2')}</p>
            <p>{t('features.3')}</p>
          </div>

          {/* CTA Button */}
          <div className="pt-6 lg:pt-8">
            <a
              href="#tarifas"
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-normal text-gray-900 bg-[#d4e8f0] rounded-full hover:bg-[#c0dce8] transition-colors shadow-sm hover:shadow-md"
            >
              {t('cta')}
            </a>
          </div>
        </div>

        {/* Illustration - Full Width at Bottom */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] -mx-4 lg:-mx-8">
          <Image
            src="/images/hero-illustration.png"
            alt="Lotti Barcelona Laundry Service"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
