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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jiin Seok</h3>
            <p className="text-muted-foreground">{t('footer.description')}</p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.sections')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_MENU_ITEMS.SECTIONS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`footer.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_MENU_ITEMS.RESOURCES.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`footer.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.connect')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_MENU_ITEMS.CONNECT.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`footer.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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
