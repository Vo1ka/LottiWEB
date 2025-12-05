'use client'

import { useTranslations } from 'next-intl';
import { Truck, Clock, Sparkles } from 'lucide-react';

export function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Truck,
      title: t('items.0.title'),
      description: t('items.0.description'),
    },
    {
      icon: Clock,
      title: t('items.1.title'),
      description: t('items.1.description'),
    },
    {
      icon: Sparkles,
      title: t('items.2.title'),
      description: t('items.2.description'),
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#d4e8f0] mb-6">
                  <Icon className="h-12 w-12 text-[#5a9fb8]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
