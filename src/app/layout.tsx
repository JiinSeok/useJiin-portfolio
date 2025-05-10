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
  title: '석지인 - 프론트엔드 개발자 포트폴리오',
  description:
    'Pain Point를 위한 문제 해결, 실전형 프론트엔드 개발자 석지인의 포트폴리오입니다.',
  keywords: '프론트엔드, 개발자, 포트폴리오, 석지인, React, Next.js, TypeScript',
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
