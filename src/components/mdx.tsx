import { CaptionComponent } from '@/app/caption'
import { ImageGrid } from '@/components/image-grid'
import { YouTubeComponent } from '@/components/youtube'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { highlight } from 'sugar-high'
import 'katex/dist/katex.min.css'

type CustomLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href?: string
  alt?: string
  children?: ReactNode
}

function CustomLink({
  href = '',
  ...rest
}: Required<Pick<CustomLinkProps, 'href'>> & Omit<CustomLinkProps, 'href'>) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {rest.children}
      </Link>
    )
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} {...rest}>
        {rest.children}
      </a>
    )
  }
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {rest.children}
    </a>
  )
}

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />
}

type CodeProps = React.HTMLAttributes<HTMLElement> & { children: string }

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

type TableData = {
  headers: string[]
  rows: (string | number | React.ReactNode)[][]
}

type TableProps = { data: TableData }

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))
  return (
    <table>
      <thead>
        <tr className="text-left">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type StrikethroughProps = React.HTMLAttributes<HTMLElement>

function Strikethrough(props: StrikethroughProps) {
  return <del {...props} />
}

type CalloutProps = {
  emoji: React.ReactNode
  children: React.ReactNode
}

function Callout(props: CalloutProps) {
  return (
    <div className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout leading-relaxed">{props.children}</div>
    </div>
  )
}

function slugify(str: string | React.ReactNode): string {
  return String(str)
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

type HeadingProps = {
  children: React.ReactNode
}

function createHeading(level: number): React.FC<HeadingProps> {
  const Heading: React.FC<HeadingProps> = ({ children }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }
  Heading.displayName = `Heading${level}`
  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  ImageGrid,
  a: CustomLink,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  )
}
