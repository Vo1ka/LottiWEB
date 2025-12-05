import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'GPTBot', // block AI-скрапер
        disallow: '/',
      },
    ],
    sitemap: 'https://yoursite.com/sitemap.xml',
  };
}
