import { components } from '@/app/_blog/mdx-components'
import { promises as fs } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import remarkMath from 'remark-math'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  tags: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

async function getMDXFiles(dir: string) {
  const files = await fs.readdir(dir)
  return files.filter((file) => path.extname(file) === '.mdx')
}

async function readMDXFile(filePath: string) {
  const rawContent = await fs.readFile(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

async function getMDXData(dir: string) {
  const mdxFiles = await getMDXFiles(dir)
  const postsPromises = mdxFiles.map(async (file) => {
    const raw = await fs.readFile(path.join(dir, file), 'utf-8')
    const { metadata, content } = parseFrontmatter(raw)
    const slug = path.basename(file, path.extname(file))

    // 🔥 여기서 바로 JSX로 변환
    const compiled = await compileMDX({
      source: content,
      components,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkMath],
        },
      },
    })

    return {
      metadata,
      slug,
      content: compiled.content, // JSX
    }
  })

  return Promise.all(postsPromises)
}

export async function getBlogPosts() {
  // Return mock data for debugging
  return [
    {
      metadata: {
        title: 'Sample Post',
        publishedAt: '2023-01-01',
        summary: 'This is a sample post',
        tags: 'sample',
        image: '/images/sample.jpg',
      },
      slug: 'sample-post',
      content: 'Sample content',
    },
  ]
}

export async function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
