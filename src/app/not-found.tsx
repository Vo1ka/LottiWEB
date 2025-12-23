'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft } from 'lucide-react';


export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F8] to-[#F0F8FB] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
        <div className="bubble bubble-4" />
        <div className="bubble bubble-5" />
        <div className="bubble bubble-6" />
      </div>

      <div className="text-center max-w-3xl relative z-10">
        {/* Axolotl Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] animate-bounce-slow">
            <Image
              src="/images/icons/axolotl_stirka.png"
              alt="Lotti Axolotl"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[180px] font-bold text-[#70CCFF] leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl font-regular text-gray-700 leading-relaxed max-w-xl mx-auto">
            Looks like this page went to the laundry with your clothes. Let's get you back home!
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all font-bold shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
              <Home className="h-5 w-5" />
              Back to Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-full hover:border-[#70CCFF] hover:text-[#70CCFF] transition-all font-bold w-full sm:w-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
          <p className="text-sm md:text-base font-regular text-gray-600">
            💡 <span className="font-bold">Did you know?</span> Axolotls can regenerate their limbs, just like we refresh your clothes!
          </p>
        </div>
      </div>
    </div>
  );
}
