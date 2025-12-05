import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/seo/StructuredData';

const citiesData = {
  Barcelona: {
    name: 'Barcelona',
    districts: ['Centro', 'Salamanca', 'Chamberí', '...'],
    geo: { lat: 40.4168, lng: -3.7038 },
  },
  // ...
};

export async function generateStaticParams() {
  return Object.keys(citiesData).map((ciudad) => ({ ciudad }));
}

export default function CityPage({ params }: { params: { ciudad: string } }) {
  const cityData = citiesData[params.ciudad as keyof typeof citiesData];
  
  if (!cityData) {
    notFound();
  }

  return (
    <>
      <StructuredData 
        type="Service" 
        data={{
          serviceType: 'Laundry Delivery',
          areaServed: cityData.name,
          providerName: 'LaundryApp',
        }} 
      />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Servicio de Lavandería en {cityData.name}
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Zonas de Cobertura</h2>
          <ul className="grid md:grid-cols-3 gap-4">
            {cityData.districts.map((district) => (
              <li key={district} className="p-4 bg-gray-50 rounded">
                {district}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cómo Funciona</h2>
          {/* Повтори основной контент с локальной адаптацией */}
        </section>
      </div>
    </>
  );
}
