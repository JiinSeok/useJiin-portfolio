import '@/app/globals.css'
import { ClientSideProviders } from '@/components/ClientSideProviders'
import { Spinner } from '@/components/ui/Spinner'
import { SITE_METADATA } from '@/constants/portfolio'
import { cn } from '@/lib/utils/classnames'
import { LayoutProps } from '@/types/types'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

/**
 * Metadata for the application
 * This information appears in browser tabs, search results, and social media shares
 */
export const metadata: Metadata = {
  title: SITE_METADATA.TITLE,
  description: SITE_METADATA.DESCRIPTION,
  keywords: SITE_METADATA.KEYWORDS,
}

export default async function LocaleLayout({ children }: LayoutProps) {
  const locale = await getLocale()
  const messages = (await import(`@/constants/locales/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body className={cn('min-h-screen w-full bg-background')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
          <ClientSideProviders />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
