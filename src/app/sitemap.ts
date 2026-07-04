import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bhaveshworks.online',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more URLs here as your portfolio grows, for example:
    // {
    //   url: 'https://bhaveshworks.online/projects',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
