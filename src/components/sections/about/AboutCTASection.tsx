'use client';

import { useTranslations } from 'next-intl';
import { Smartphone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function AboutCTASection() {
  const t = useTranslations('about.cta');

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#70CCFF] to-[#5CB8E6] text-white overflow-hidden">
      <div className="section-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('title')}
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-regular">
                {t('subtitle')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  10K+
                </div>
                <div className="text-sm lg:text-base text-white/80 font-regular">
                  Клиентов
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  50K+
                </div>
                <div className="text-sm lg:text-base text-white/80 font-regular">
                  Заказов
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  4.9
                </div>
                <div className="text-sm lg:text-base text-white/80 font-regular">
                  Рейтинг
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://lotti.delivery/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-white text-[#70CCFF] rounded-full hover:bg-gray-100 transition-all font-bold shadow-lg hover:-translate-y-0.5"
              >
                <Smartphone className="h-5 w-5" />
                {t('downloadApp')}
              </a>
              <a
                href="https://lotti.delivery/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-white/10 text-white border-2 border-white rounded-full hover:bg-white/20 transition-all font-bold"
              >
                {t('orderNow')}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>


          </div>

          {/* Right - App Preview Image (Larger) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[560px] md:w-[360px] md:h-[720px] lg:w-[400px] lg:h-[800px]">
              <Image
                src="/images/AppPreview.png"
                alt={'Lotti App'}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
