import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kleetechnologies.com';
  
  // You can dynamically fetch portfolio, blog, or other dynamic routes here.
  // For static routes:
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/recognition',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
