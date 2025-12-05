'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const t = useTranslations('faq');
  const items: FAQItem[] = t.raw('items') || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            {t('title')}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg lg:text-xl font-semibold text-gray-900 pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-6 w-6 text-gray-600 flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'transform rotate-180'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-8 pb-6">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
