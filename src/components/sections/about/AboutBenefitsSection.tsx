'use client';

import { useTranslations } from 'next-intl';
import { Clock, Shield, Heart, Sparkles, Users, TrendingUp } from 'lucide-react';

const iconMap = {
  clock: Clock,
  shield: Shield,
  heart: Heart,
  sparkles: Sparkles,
  users: Users,
  trending: TrendingUp,
};

interface Benefit {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

export function AboutBenefitsSection() {
  const t = useTranslations('about.benefits');
  const benefits: Benefit[] = t.raw('items') || [];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#E8F4F8] to-[#F0F8FB]">
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg lg:text-xl font-regular text-gray-700 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#70CCFF]/10 mb-6">
                  <Icon className="h-8 w-8 text-[#70CCFF]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-base font-regular text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
