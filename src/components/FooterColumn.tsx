'use client'

import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

type FooterHash =
  | '#'
  | '#ux-design'
  | '#tech-stack'
  | '#resume'
  | '#til'
  | '#contact'
  | '/til'
  | '/soft-skills'
  | '/site-build'

interface MenuItem {
  id: string
  name: string
  path: string
  external?: boolean
}

interface FooterColumnProps {
  title: string
  items: MenuItem[]
  translationPrefix: string
  hashType?: boolean
}

/**
 * FooterColumn component
 * 
 * A reusable component for rendering columns in the footer section
 * with a title and a list of links.
 */
export default function FooterColumn({ title, items, translationPrefix, hashType }: FooterColumnProps) {
  const t = useTranslations('HomePage')

  return (
    <div className="mb-4 md:mb-0">
      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={hashType ? (item.path as FooterHash) : (item.path as any)}
              className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
            >
              {t(`${translationPrefix}.${item.id}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
