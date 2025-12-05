'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl lg:text-[200px] font-serif text-[#d4e8f0] leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('description')}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#d4e8f0] text-gray-900 rounded-full hover:bg-[#c0dce8] transition-colors w-full sm:w-auto">
              <Home className="h-5 w-5" />
              {t('backHome')}
            </button>
          </Link>
          <Link href="/#servicios">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 border-2 border-gray-300 transition-colors w-full sm:w-auto">
              <Search className="h-5 w-5" />
              Наши услуги
            </button>
          </Link>
        </div>

        {/* Decoration */}
        <div className="mt-16 text-6xl opacity-20">
          🧺
        </div>
      </div>
    </div>
  );
}
