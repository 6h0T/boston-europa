import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = [
    'https://bostonam.eu',
    'https://bostonam.es',
    'https://bostonam.de',
    'https://bostonam.fr',
    'https://bostonam.it',
    'https://bostonam.se',
  ]

  const routes = [
    '',
    '/laempresa',
    '/contacto',
    '/abrircuenta',
    '/inversiones',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  baseUrls.forEach(baseUrl => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
