'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function AboutStorySection() {
  const t = useTranslations('about.story');

  const teamMembers = [
    {
      image: '/images/team/founder.jpg',
      name: 'Основатель',
      position: 'top-0 left-0',
    },
    {
      image: '/images/team/designer.jpg',
      name: 'Дизайнер',
      position: 'top-0 right-0',
    },
    {
      image: '/images/team/dev.jpg',
      name: 'Команда',
      position: 'bottom-0 left-1/4',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Team Photos */}
          <div className="relative h-[400px] lg:h-[600px] order-2 lg:order-1">
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#70CCFF]/10" />
            
            {/* Team Member Photos */}
            <div className="absolute top-0 left-0 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/team/founder.jpg"
                alt="Команда Lotti"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute top-0 right-0 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/team/designer.jpg"
                alt="Команда Lotti"
                fill
                className="object-cover grayscale"
              />
            </div>
            
            <div className="absolute bottom-0 left-1/4 w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/team/dev.jpg"
                alt="Команда Lotti"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Dot */}
            <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-[#70CCFF]" />
          </div>

          {/* Right - Story Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {t('title')}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#70CCFF]">
                {t('subtitle')}
              </h2>
            </div>

            <div className="space-y-4 text-base lg:text-lg font-regular text-gray-700 leading-relaxed">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
              <p>{t('paragraph4')}</p>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/+34635669900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-3 text-base lg:text-lg font-bold text-white bg-[#70CCFF] rounded-full hover:bg-[#5CB8E6] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
