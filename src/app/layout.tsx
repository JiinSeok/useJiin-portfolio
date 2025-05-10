import '@/app/globals.css'
import { ClientSideProviders } from '@/components/ClientSideProviders'
import { Spinner } from '@/components/ui/Spinner'
import { cn } from '@/lib/utils/classnames'
import { LayoutProps } from '@/types/types'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'NEXCA - Next Generation AI Platform',
  description:
    'NEXCA is a next-generation AI platform that helps you build, deploy, and manage AI applications.',
  keywords: 'AI, artificial intelligence, machine learning, platform, NEXCA',
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
