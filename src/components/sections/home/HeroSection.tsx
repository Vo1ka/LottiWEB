'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-white pt-12 lg:pt-16 pb-0 overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#A8D5E2]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#E8B4D9]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="section-wrapper relative z-10">
        {/* Content - Centered */}
        <div className="max-w-5xl mx-auto text-center space-y-6 lg:space-y-8 pb-12 lg:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight whitespace-pre-line">
            {t('title')}
          </h1>

          <div className="space-y-2 lg:space-y-3 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>{t('features.0')}</p>
            <p>{t('features.1')}</p>
            <p>{t('features.2')}</p>
          </div>

          <div className="pt-6 lg:pt-8">
            <a
              href="https://lotti.delivery/download/"
              className="inline-flex items-center justify-center px-10 py-3 text-base lg:text-lg font-normal text-gray-900 bg-[#d4e8f0] rounded-full hover:bg-[#c0dce8] transition-colors"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>

      {/* Illustration - Full Width */}
      <div className="relative w-full">
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px]">
          <Image
            src="/images/hero-illustration.png"
            alt="Lotti Barcelona Laundry Service"
            fill
            className="object-contain object-bottom"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
