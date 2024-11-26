import type { MetadataRoute } from 'next'

import { getBaseUrl } from "@/helpers/main"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/u',
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  }
}
