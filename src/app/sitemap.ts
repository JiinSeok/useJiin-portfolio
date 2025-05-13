import { metaData } from '@/app/config'
import { MetadataRoute } from 'next'

const BaseUrl = metaData.baseUrl.endsWith('/')
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await getBlogPosts()
  const posts = [
    'albaform-project',
    'custom-mdx-examples',
    'next-js-benefits',
    'typescript-benefits',
    'usestate-typescript',
  ]
  // const blogs = posts.map((post) => ({
  //   url: `${BaseUrl}_blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }))
  const blogs = posts.map((slug) => ({
    url: `${BaseUrl}blog/${slug}`,
    lastModified: '2025-01-01',
  }))

  const routes = ['til', 'projects', 'site-build', 'soft-skills'].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
