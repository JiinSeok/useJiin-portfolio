'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`text-sm font-medium ${locale === 'ko' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
        onClick={() => switchLocale('ko')}
        disabled={isPending || locale === 'ko'}
      >
        한국어
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        className={`text-sm font-medium ${locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
        onClick={() => switchLocale('en')}
        disabled={isPending || locale === 'en'}
      >
        English
      </button>
    </div>
  )
}
