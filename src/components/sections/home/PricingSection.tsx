import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export function PricingSection() {
  const t = useTranslations('pricing');
  const plans: PricingPlan[] = t.raw('plans') || [];

  return (
    <section id="tarifas" className="py-20 lg:py-28 bg-white">
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-[#d4e8f0] ring-2 ring-[#5a9fb8] shadow-xl scale-105'
                  : 'bg-[#f5f5f5]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#5a9fb8] text-white">
                    Популярный
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    €{plan.price}
                  </span>
                  <span className="ml-2 text-gray-600">{t('perKg')}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#5a9fb8] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-full text-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-[#5a9fb8] text-white hover:bg-[#4a8fa8]'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                {t('cta')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
