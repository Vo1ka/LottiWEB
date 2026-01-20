'use client';

import { useTranslations } from 'next-intl';
import { Sparkles, Download } from 'lucide-react';

export function PromoBar() {
  const t = useTranslations('promo');

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0f5132] via-[#1a6b47] to-[#0f5132] text-white py-4 px-4 shadow-lg z-10">
      {/* Мерцающие огоньки (оставляем для акцента) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer"></div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {/* Текст с иконкой */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          <p className="text-sm md:text-lg font-bold text-center">
            {t('message')}
          </p>
        </div>

        {/* CTA кнопка */}
        <a
          href="https://lotti.delivery/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0f5132] rounded-full font-bold text-sm md:text-base hover:bg-yellow-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          {t('cta')}
        </a>
      </div>
    </div>
  );
}
