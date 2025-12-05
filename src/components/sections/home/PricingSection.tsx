import { useTranslations } from 'next-intl';
import { Check, Sparkles } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export function PricingSection() {
  const t = useTranslations('pricing');
  
  // Безопасное получение планов
  let plans: PricingPlan[] = [];
  try {
    plans = t.raw('plans') as PricingPlan[];
  } catch (error) {
    console.error('Error loading pricing plans:', error);
  }

  return (
    <section id="tarifas" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-[#f5f5f5] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating sparkles */}
        <div className="sparkle sparkle-1" />
        <div className="sparkle sparkle-2" />
        <div className="sparkle sparkle-3" />
        <div className="sparkle sparkle-4" />
        <div className="sparkle sparkle-5" />
        <div className="sparkle sparkle-6" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#A8D5E2]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#E8B4D9]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#A8D5E2]/30 to-[#E8B4D9]/30 backdrop-blur-sm ring-2 ring-[#5a9fb8] shadow-2xl scale-105'
                  : 'bg-white/80 backdrop-blur-sm hover:shadow-xl shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#5a9fb8] to-[#4a8fa8] text-white shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl lg:text-3xl font-serif text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900">
                    €{plan.price}
                  </span>
                  <span className="ml-2 text-gray-600">{t('perKg')}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular 
                        ? 'bg-[#5a9fb8]' 
                        : 'bg-[#d4e8f0]'
                    }`}>
                      <Check className={`h-3 w-3 ${
                        plan.popular ? 'text-white' : 'text-[#5a9fb8]'
                      }`} strokeWidth={3} />
                    </div>
                    <span className="text-base text-gray-700 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#5a9fb8] to-[#4a8fa8] text-white hover:shadow-lg hover:scale-105'
                    : 'bg-[#d4e8f0] text-gray-900 hover:bg-[#c0dce8] border-2 border-transparent hover:border-[#5a9fb8]'
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
