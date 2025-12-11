// src/components/sections/home/TestimonialsSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  text: string;
  usage: string;
  avatar: string;
  rating: number;
}

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const testimonials: Testimonial[] = t.raw('items') || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Адаптивное количество карточек
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else if (width < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Расчёт смещения с учётом gap
  const getTransform = () => {
    if (itemsPerPage === 1) {
      return `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`;
    }
    
    const slidePercentage = 100 / itemsPerPage;
    const gapSize = itemsPerPage === 4 ? 24 : 16;
    const totalGapCompensation = (currentIndex * gapSize * (itemsPerPage - 1)) / itemsPerPage;
    
    return `translateX(calc(-${currentIndex * slidePercentage}% - ${totalGapCompensation}px))`;
  };

  return (
    <section id="resenas" className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-[#E8F4F8] to-[#F0F8FB]">
      <div className="section-wrapper">
        {/* Header with Navigation */}
        <div className="flex items-end justify-between mb-8 md:mb-16 lg:mb-20">
          {/* Title - SF Pro Rounded Bold */}
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-pre-line leading-tight">
            {t('title')}
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-8 md:mb-12">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 lg:gap-6"
            style={{
              transform: getTransform(),
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * (itemsPerPage === 4 ? 24 : 16)) / itemsPerPage}px)`,
                }}
              >
                <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4 md:mb-6">
                    <Quote
                      className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#70CCFF]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 md:h-5 md:w-5 ${
                          i < (testimonial.rating || 5)
                            ? 'fill-[#70CCFF] text-[#70CCFF]'
                            : 'fill-gray-300 text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text - SF Pro Rounded Regular */}
                  <p className="text-[15px] md:text-sm lg:text-base text-gray-700 leading-relaxed font-regular flex-grow mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author Section */}
                  <div className="border-t border-gray-200 pt-4 md:pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full mb-3 md:mb-4 overflow-hidden relative bg-[#d4e8f0]">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="font-bold text-base md:text-base lg:text-lg text-gray-900 mb-0.5 md:mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-xs lg:text-sm text-gray-500 font-regular">
                        {testimonial.usage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#70CCFF] w-6 md:w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA Button - Now Clickable with new color */}
        <div className="text-center">
          <a
            href="https://lotti.delivery/download/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 md:px-10 py-3 text-base lg:text-lg font-bold text-white bg-[#70CCFF] rounded-full hover:bg-[#5CB8E6] transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('writeReview')}
          </a>
          <p className="mt-4 text-sm font-regular text-gray-600">
            Оставьте отзыв в App Store или Google Play
          </p>
        </div>
      </div>
    </section>
  );
}
