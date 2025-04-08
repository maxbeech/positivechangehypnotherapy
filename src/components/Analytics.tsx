'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export const Analytics = () => {
  // Here you would add your analytics initialization
  useEffect(() => {
    // Initialize analytics when component mounts
  }, []);

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Positive Change Hypnotherapy',
            description: 'Solution Focused Hypnotherapy services helping clients overcome anxiety, stress, depression and more',
            image: 'https://positivechangehypnotherapy.co.uk/media/logo-icon_only.png',
            telephone: '07305 229101',
            email: 'pcsfhypnotherapy@gmail.com',
            url: 'https://positivechangehypnotherapy.co.uk',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Leicester',
              addressRegion: 'Leicestershire',
              addressCountry: 'United Kingdom'
            },
            priceRange: '££',
            openingHours: 'Mo-Fr 09:00-18:00',
            sameAs: [
              'https://www.facebook.com/positivechangehypnotherapy',
              'https://www.instagram.com/positivechangehypnotherapy'
            ],
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 52.6369,
                longitude: -1.1398
              },
              geoRadius: '50000'
            }
          })
        }}
      />

      {/* Place for future analytics scripts */}
    </>
  );
};

export default Analytics; 