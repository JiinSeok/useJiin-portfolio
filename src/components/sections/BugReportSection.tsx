'use client'

import { useTranslations } from 'next-intl'

/**
 * Site build link section component for the homepage
 *
 * This component displays a link to the site build page.
 */
export default function BugReportSection() {
  const t = useTranslations('HomePage')

  return (
    <section
      id="site-build-link"
      className="w-full py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-3 text-center">
        <div className="text-sm text-muted-foreground">
          <p>
            {t('release.site-build-link-text')}{' '}
            <a href="/site-build" className="text-primary hover:underline">
              {t('site-build.title')}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
