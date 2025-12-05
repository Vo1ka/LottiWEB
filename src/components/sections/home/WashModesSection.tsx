'use client'

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

  // Чередование: верх, низ, верх, низ, верх, низ
  const timeline = [
    { mode: modes[0], position: 'top' },    // Холодный
    { mode: modes[1], position: 'bottom' }, // Деликатный
    { mode: modes[2], position: 'top' },    // Тёплый 30
    { mode: modes[3], position: 'bottom' }, // Тёплый 40
    { mode: modes[4], position: 'top' },    // Без кондиционера
    { mode: modes[5], position: 'bottom' }, // Горячий 60
  ];

  return (
    <section id="modos" className="py-20 lg:py-28 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile View - Stack */}
          <div className="lg:hidden space-y-8">
            {modes.map((mode) => (
              <div key={mode.id} className="space-y-3">
                <h3 className="text-2xl font-serif text-gray-900">
                  {mode.name}
                </h3>
                <p className="text-base text-gray-700">
                  {mode.description}
                </p>
                <p className="text-base text-gray-900">
                  {mode.temperature} {mode.spin}
                </p>
                <div className="space-y-1 text-base text-gray-700">
                  <p>Стирка: {mode.washTime}</p>
                  <p>Сушка: {mode.dryTime}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Timeline */}
          <div className="hidden lg:block relative" style={{ minHeight: '600px' }}>
            {/* Horizontal Line */}
            <div className="absolute left-0 right-0 h-px bg-[#c0dce8]" style={{ top: '300px' }} />

            {/* Grid */}
            <div className="grid grid-cols-6 gap-8">
              {timeline.map((item, index) => (
                <div key={item.mode.id} className="relative">
                  {/* Vertical Line */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-px bg-[#c0dce8]`}
                    style={{
                      top: item.position === 'top' ? '300px' : '0',
                      height: item.position === 'top' ? '100px' : '300px',
                    }}
                  />

                  {/* Dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#d4e8f0] border-2 border-[#5a9fb8] shadow-sm z-10"
                    style={{ top: '300px' }}
                  />

                  {/* Content */}
                  <div
                    className="space-y-3 px-2"
                    style={{
                      position: 'absolute',
                      top: item.position === 'top' ? '0' : '420px',
                      left: '0',
                      right: '0',
                    }}
                  >
                    <h3 className="text-xl font-serif text-gray-900 leading-tight">
                      {item.mode.name}
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      {item.mode.description}
                    </p>
                    <p className="text-sm text-gray-900">
                      {item.mode.temperature} {item.mode.spin}
                    </p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>Стирка: {item.mode.washTime}</p>
                      <p>Сушка: {item.mode.dryTime}</p>
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
