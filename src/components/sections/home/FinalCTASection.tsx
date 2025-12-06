'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function FinalCTASection() {
  const t = useTranslations('finalCta');
  const features: string[] = t.raw('features') || [];

  const appLinks = {
    ios: process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://lotti.delivery/download/',
    android: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || 'https://lotti.delivery/download/',
  };

  return (
    <section className="bg-[#E9F7FE]">
      {/* Mobile: custom 20px padding */}
      <div className="px-5 md:px-8 lg:px-0">
        <div className="lg:section-wrapper">
          {/* Внутренний контейнер с точными отступами из макета */}
          <div className="py-8 md:py-12 lg:py-[84px] lg:px-[139px]">
            <div className="flex flex-row items-start lg:items-center gap-4 md:gap-8 lg:gap-0 lg:justify-between max-w-[962px] mx-auto">
              {/* Left Content */}
              <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-8 lg:max-w-[520px]">
                {/* Title & Subtitle */}
                <div className="space-y-2 md:space-y-3 lg:space-y-4">
                  <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-serif text-gray-900 leading-tight">
                    {t('title')}
                  </h2>
                  <p className="text-[15px] md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                    {t('subtitle')}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 md:space-y-4 lg:space-y-5">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 lg:gap-4">
                      <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 relative">
                        <Image
                          src="/images/icons/Tick.png"
                          alt=""
                          fill
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-[17px] md:text-xl lg:text-[26px] text-gray-900 font-serif leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* App Store Buttons */}
                <div className="flex flex-row gap-2 md:gap-3 lg:gap-4 pt-1 md:pt-2">
                  <a
                    href={appLinks.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 md:px-8 py-2.5 md:py-3 bg-white text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm md:text-base lg:text-lg font-serif"
                  >
                    App Store
                  </a>
                  <a
                    href={appLinks.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 md:px-8 py-2.5 md:py-3 bg-white text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm md:text-base lg:text-lg font-serif"
                  >
                    Android
                  </a>
                </div>
              </div>

              {/* Right - Phone Mockup */}
              <div className="flex-shrink-0 -mr-5 md:mr-0 lg:flex lg:justify-end">
                <div className="relative w-[160px] h-[320px] md:w-[240px] md:h-[480px] lg:w-[300px] lg:h-[600px]">
                  <Image
                    src="/images/AppPreview.png"
                    alt={t('mockupAlt') || 'Lotti App'}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
