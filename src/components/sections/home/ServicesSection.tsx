'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: '/images/icons/icon-basket.png',
      title: t('items.0.title'),
      description: t('items.0.description'),
    },
    {
      icon: '/images/icons/icon-time.png',
      title: t('items.1.title'),
      description: t('items.1.description'),
    },
    {
      icon: '/images/icons/icon-tracking.png',
      title: t('items.2.title'),
      description: t('items.2.description'),
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex items-center justify-center mb-8 lg:mb-10">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-serif text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
