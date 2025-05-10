import { metaData } from '@/app/config'
import { getBlogPosts } from '@/lib/posts'
import { MetadataRoute } from 'next'

const BaseUrl = metaData.baseUrl.endsWith('/')
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = getBlogPosts().map((post) => ({
    url: `${BaseUrl}blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', 'blog', 'projects', '_photos'].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
