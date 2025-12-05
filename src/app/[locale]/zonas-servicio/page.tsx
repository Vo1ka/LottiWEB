'use client'

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const cities = [
//   { slug: 'madrid', name: 'Madrid', districts: 28 },
  { slug: 'barcelona', name: 'Barcelona', districts: 10 },
//   { slug: 'valencia', name: 'Valencia', districts: 19 },
 
];

export default function ServiceAreasPage() {
  const t = useTranslations('serviceAreas');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/zonas-servicio/${city.slug}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{city.name}</h2>
            <p className="text-gray-600">
              {city.districts} {t('districts')}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
