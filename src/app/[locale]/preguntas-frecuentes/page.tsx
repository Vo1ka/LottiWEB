import { useTranslations } from 'next-intl';
import { StructuredData } from '@/components/seo/StructuredData';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Preguntas Frecuentes | LaundryApp',
    description: 'Respuestas a las preguntas más comunes sobre nuestro servicio de lavandería.',
  };
}

export default function FAQPage() {
  const t = useTranslations('faq');

  const faqData = [
    {
      question: t('q1.question'),
      answer: t('q1.answer'),
    },
    {
      question: t('q2.question'),
      answer: t('q2.answer'),
    },
    // ... добавь минимум 10 вопросов
  ];

  return (
    <>
      <StructuredData type="FAQPage" data={{ questions: faqData }} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
        
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <details 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 group"
            >
              <summary className="font-semibold text-lg cursor-pointer list-none">
                {item.question}
                <span className="float-right group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
