import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  usage: string;
}

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const testimonials: Testimonial[] = t.raw('items') || [];

  return (
    <section id="resenas" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            {t('title')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-[#d4e8f0]" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.usage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-12 py-4 text-lg font-normal text-gray-900 bg-[#d4e8f0] rounded-full hover:bg-[#c0dce8] transition-colors">
            {t('writeReview')}
          </button>
        </div>
      </div>
    </section>
  );
}
