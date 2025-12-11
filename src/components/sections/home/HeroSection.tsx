'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-white pt-0 pb-0 overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full aspect-[21/9] md:aspect-[24/9] lg:aspect-[28/9] bg-[#B8E6F5] overflow-hidden rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px]">
          <Image
            src="/images/lotti-barcelona.png"
            alt="Lotti Barcelona"
            fill
            className="object-contain object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ top: '420px' }}>
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
        <div className="bubble bubble-4" />
        <div className="bubble bubble-5" />
        <div className="bubble bubble-6" />
        <div className="bubble bubble-7" />
        <div className="bubble bubble-8" />
        <div className="bubble bubble-9" />
        <div className="bubble bubble-10" />
        <div className="bubble bubble-11" />
        <div className="bubble bubble-12" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-[420px] right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#A8D5E2]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#E8B4D9]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="section-wrapper relative z-10 pt-12 lg:pt-16">
        {/* Content - Centered */}
        <div className="max-w-5xl mx-auto text-center space-y-6 lg:space-y-8 pb-12 lg:pb-16">
          {/* Title - SF Pro Rounded Bold */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-pre-line">
            {t('title')}
          </h1>

          {/* Features - SF Pro Rounded Regular */}
          <div className="space-y-2 lg:space-y-3 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-regular">
            <p>{t('features.0')}</p>
            <p>{t('features.1')}</p>
            <p>{t('features.2')}</p>
          </div>

          {/* CTA Buttons - Two buttons side by side */}
          <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button - Download App */}
            <a
              href="https://lotti.delivery/download/"
              target="_blank"
              rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-3 text-base lg:text-lg font-bold text-white bg-[#70CCFF] rounded-full hover:bg-[#5CB8E6] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('cta')}
            </a>

            {/* Secondary Button - Order on Website */}
            <a
              href="https://lotti.delivery/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-3 text-base lg:text-lg font-bold text-gray-900 bg-white border-2 border-gray-300 rounded-full hover:border-[#70CCFF] hover:text-[#70CCFF] transition-all"
            >
              {t('ctaOrder')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
