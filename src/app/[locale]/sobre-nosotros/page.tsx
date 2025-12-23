import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f5f5]">
        {/* Hero */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-serif text-gray-900 mb-6">
                О нас
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Мы — команда профессионалов, которая делает стирку простой и удобной
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
                <h2 className="text-3xl font-serif text-gray-900 mb-6">
                  Наша история
                </h2>
                                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Lotti начался с простой идеи: сделать стирку максимально удобной для жителей Барселоны. 
                    Мы знаем, как ценно ваше время, и создали сервис, который экономит его.
                  </p>
                  <p>
                    С 2020 года мы обслужили более 10,000 клиентов, выстирали более 50,000 кг белья 
                    и стали любимым сервисом для занятых людей, которые ценят качество и скорость.
                  </p>
                  <p>
                    Наша команда — это профессионалы своего дела: от курьеров до специалистов по стирке. 
                    Мы используем только экологичные средства и современное оборудование.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
                <h2 className="text-3xl font-serif text-gray-900 mb-8">
                  Наши ценности
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Качество', desc: 'Профессиональная стирка с заботой о каждой вещи' },
                    { title: 'Скорость', desc: 'Забор за 30 минут, возврат через 3 часа' },
                    { title: 'Экология', desc: 'Используем только экологичные средства' },
                    { title: 'Прозрачность', desc: 'Честные цены без скрытых платежей' },
                  ].map((value, i) => (
                    <div key={i} className="flex gap-4">
                      <Check className="h-6 w-6 text-[#5a9fb8] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-700">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
