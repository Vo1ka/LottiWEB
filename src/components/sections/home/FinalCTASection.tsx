import { useTranslations } from 'next-intl';
import { Check, Smartphone } from 'lucide-react';

export function FinalCTASection() {
  const t = useTranslations('finalCta');
  const features: string[] = t.raw('features') || [];

  const appLinks = {
    ios: process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com',
    android:
      process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || 'https://play.google.com',
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#5a9fb8] to-[#4a8fa8] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                {t('title')}
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={appLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                <span className="font-semibold">App Store</span>
              </a>
              <a
                href={appLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                <span className="font-semibold">Google Play</span>
              </a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Placeholder для скриншота приложения */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <span className="text-gray-400">App Screenshot</span>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
