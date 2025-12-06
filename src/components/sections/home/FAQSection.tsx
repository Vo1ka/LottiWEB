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
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[36px] font-serif font-medium text-gray-900">
            {t('title')}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-3xl overflow-hidden transition-all hover:bg-[#EEEEEE]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between text-left transition-colors"
              >
                <span className="text-lg lg:text-xl font-serif text-gray-900 pr-8 leading-tight">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-6 w-6 text-gray-600 flex-shrink-0 transition-transform duration-300',
                    openIndex === index && 'transform rotate-180'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="px-6 lg:px-8 pb-5 lg:pb-6">
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
