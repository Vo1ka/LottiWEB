interface StructuredDataProps {
  type: 'LocalBusiness' | 'FAQPage' | 'Service' | 'MobileApplication';
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const schemas = {
    LocalBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: data.name || 'LaundryApp',
      image: data.image || '/logo.png',
      '@id': data.url || 'https://yoursite.com',
      url: data.url || 'https://yoursite.com',
      telephone: data.phone || '+34-XXX-XXX-XXX',
      priceRange: data.priceRange || '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address?.street,
        addressLocality: data.address?.city || 'Madrid',
        postalCode: data.address?.zip,
        addressCountry: data.address?.country || 'ES',
      },
      geo: data.geo && {
        '@type': 'GeoCoordinates',
        latitude: data.geo.lat,
        longitude: data.geo.lng,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
          'Friday', 'Saturday', 'Sunday'
        ],
        opens: '08:00',
        closes: '22:00',
      },
      sameAs: data.socialLinks || [],
    },
    
    MobileApplication: {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      name: data.name || 'LaundryApp',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: data.currency || 'EUR',
      },
      aggregateRating: data.rating && {
        '@type': 'AggregateRating',
        ratingValue: data.rating.value,
        ratingCount: data.rating.count,
      },
    },

    FAQPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.questions?.map((q: any) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    },

    Service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: data.serviceType || 'Laundry Service',
      provider: {
        '@type': 'LocalBusiness',
        name: data.providerName || 'LaundryApp',
      },
      areaServed: data.areaServed || 'Madrid',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Laundry Services',
        itemListElement: data.services?.map((service: any) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        })),
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type]),
      }}
    />
  );
}
