import type { MetadataRoute } from 'next';

import { getBaseUrl } from "@/helpers/main"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date('2024-05-01T14:41:11+01:00'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${getBaseUrl()}/about`,
      lastModified: new Date('2024-05-01T14:41:11+01:00'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${getBaseUrl()}/flights`,
      lastModified: new Date('2024-05-01T14:41:11+01:00'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${getBaseUrl()}/terms`,
      lastModified: new Date('2024-05-01T14:41:14+01:00'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${getBaseUrl()}/contact`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${getBaseUrl()}/destinations`,
      lastModified: new Date('2024-05-01T14:41:11+01:00'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${getBaseUrl()}/destinations/north-america`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/destinations/south-america`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/destinations/europe`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/destinations/africa`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/destinations/asia`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/destinations/australia-and-oceania`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/events`,
      lastModified: new Date('2024-05-01T14:41:11+01:00'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${getBaseUrl()}/events/north-america`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/events/south-america`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/events/africa`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/events/europe`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/events/asia`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/events/australia-and-oceania`,
      lastModified: new Date('2024-05-01T14:41:16+01:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
