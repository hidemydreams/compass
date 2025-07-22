// app/robots.ts
import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/dashboard'],
    },
    // sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
