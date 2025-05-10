'use client'

import { FOOTER_MENU_ITEMS, SOCIAL_LINKS } from '@/constants/menu'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

/**
 * Footer section component for the homepage
 *
 * This component displays the site footer with navigation links,
 * social media links, and copyright information.
 */
export default function FooterSection() {
  const t = useTranslations('HomePage')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile layout - 2 columns for better Korean text display */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* About */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Jiin Seok</h3>
            <p className="text-muted-foreground text-sm leading-relaxed break-keep">
              {t('footer.description')}
            </p>
          </div>

          {/* Sections */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">
              {t('footer.sections')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_MENU_ITEMS.SECTIONS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={
                      item.path.startsWith('/#')
                        ? `#${item.path.slice(2)}` // '/#ux' → '#ux'
                        : item.path
                    }
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
                    alt=""
                  >
                    {t(`footer.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_MENU_ITEMS.RESOURCES.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
                  >
                    {t(`footer.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">
              {t('footer.connect')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_MENU_ITEMS.CONNECT.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
                  >
                    {t(`footer.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-center md:text-left break-keep mb-4 md:mb-0">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.id}
                href={social.path}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">
                  {t(`footer.social.${social.id}`)}
                </span>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
