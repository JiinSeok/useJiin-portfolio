'use client'

import { Input } from '@/components/Form/Input'
import { Button } from '@/components/ui/Button'
import { useTranslations } from 'next-intl'

/**
 * Bug report section component for the homepage
 *
 * This component displays a bug report form to capture user feedback.
 */
export default function BugReportSection() {
  const t = useTranslations('HomePage')

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add bug report submission logic here
    console.log('Bug report submitted')
  }

  return (
    <section
      id="bug-report"
      className="w-full py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('release.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('release.description')}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <Input
            type="text"
            placeholder={t('release.email-placeholder')}
            className="flex-grow"
            required
            aria-label={t('release.email-placeholder')}
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {t('release.subscribe')}
          </Button>
        </form>
      </div>
    </section>
  )
}
