// src/components/sections/home/WashModesSection.tsx
'use client';

import { useTranslations } from 'next-intl';

interface WashMode {
  id: string;
  name: string;
  description: string;
  temperature: string;
  spin: string;
  washTime: string;
  dryTime: string;
}

export function WashModesSection() {
  const t = useTranslations('washModes');
  const modes: WashMode[] = t.raw('modes') || [];

  // Порядок для десктопа: чередование низ/верх
  const timeline = [
    { mode: modes[1], position: 'bottom' as const }, // Деликатный
    { mode: modes[0], position: 'top' as const },    // Холодный
    { mode: modes[2], position: 'bottom' as const }, // Тёплый 30
    { mode: modes[3], position: 'top' as const },    // Тёплый 40
    { mode: modes[5], position: 'bottom' as const }, // Горячий 60
    { mode: modes[4], position: 'top' as const },    // Без кондиционера
  ];

  return (
    <section id="modos" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16 lg:mb-20">
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 whitespace-pre-line">
            {t('title')}
          </h2>
          <p className="text-[15px] md:text-base lg:text-lg text-gray-700 leading-relaxed px-4 md:px-0 whitespace-pre-line font-regular">
            {t('subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile View - Cards */}
          <div className="lg:hidden space-y-4 px-2">
            {modes.map((mode) => (
              <div 
                key={mode.id} 
                className="bg-[#E8F4F8] rounded-2xl p-5 flex justify-between items-start gap-4"
              >
                {/* Left Content */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {mode.name}
                  </h3>
                  <p className="text-sm font-regular text-gray-700">
                    {mode.temperature} {mode.spin}
                  </p>
                  <p className="text-sm font-regular text-gray-600">
                    {mode.description}
                  </p>
                </div>

                {/* Right Content - Times */}
                <div className="text-right text-sm font-regular text-gray-700 space-y-1 flex-shrink-0">
                  <p>{t('washLabel')}: {mode.washTime}</p>
                  <p>{t('dryLabel')}: {mode.dryTime}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Timeline */}
          <div className="hidden lg:block relative" style={{ minHeight: '420px' }}>
            {/* Horizontal Line */}
            <div 
              className="absolute left-0 right-0 bg-[#A8D5E2]" 
              style={{ 
                top: '200px',
                height: '2px'
              }} 
            />

            {/* Grid */}
            <div className="grid grid-cols-6 gap-6">
              {timeline.map((item) => (
                <div key={item.mode.id} className="relative">
                  {/* Vertical Line */}
                  <div
                    className="absolute bg-[#A8D5E2]"
                    style={{
                      width: '2px',
                      left: '0',
                      top: item.position === 'top' ? '80px' : '200px',
                      height: '120px',
                    }}
                  />

                  {/* Dot */}
                  <div
                    className="absolute w-5 h-5 rounded-full bg-[#A8D5E2] border-2 border-white shadow-sm z-10"
                    style={{ 
                      top: '191px',
                      left: '-8px'
                    }}
                  />

                  {/* Content */}
                  <div
                    className="space-y-2"
                    style={{
                      position: 'absolute',
                      top: item.position === 'top' ? '20px' : '240px',
                      left: '0',
                      right: '0',
                      paddingLeft: '20px',
                      textAlign: 'left',
                    }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.mode.name}
                    </h3>
                    <p className="text-sm font-regular text-gray-600 leading-snug">
                      {item.mode.description}
                    </p>
                                        <p className="text-sm font-regular text-gray-900">
                      {item.mode.temperature} {item.mode.spin}
                    </p>
                    <div className="space-y-0.5 text-sm font-regular text-gray-700">
                      <p>{t('washLabel')}: {item.mode.washTime}</p>
                      <p>{t('dryLabel')}: {item.mode.dryTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

