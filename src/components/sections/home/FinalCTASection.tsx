'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Smartphone, ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  const t = useTranslations('finalCta');
  const features: string[] = t.raw('features') || [];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#E8F4F8] to-[#F0F8FB] overflow-hidden">
      <div className="section-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('title')}
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-regular">
                {t('subtitle')}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-8 h-8 relative">
                    <Image
                      src="/images/icons/Tick.svg"
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-lg font-regular text-gray-900 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://lotti.delivery/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all font-bold shadow-lg hover:-translate-y-0.5"
              >
                <Smartphone className="h-5 w-5" />
                {t('cta')}
              </a>
              <a
                href="https://lotti.delivery/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all font-bold shadow-lg hover:-translate-y-0.5"
              >
                {t('orderNow')}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right - App Preview Image - Unoptimized for max quality */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[560px] md:w-[360px] md:h-[720px] lg:w-[400px] lg:h-[800px]">
              <Image
                src="/images/AppPreview.png"
                alt={t('mockupAlt') || 'Lotti App'}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
