'use client'

import { Button } from '@/components/ui/Button'
import { useModal } from '@/hooks/useModal'
import { useTranslations } from 'next-intl'

/**
 * Call-to-Action section component for the homepage
 * 
 * This component displays a prominent call-to-action section with buttons
 * to encourage user engagement.
 */
export default function CTASection() {
  const t = useTranslations('HomePage')
  const { openModal } = useModal()

  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            as="a"
            href="#resume"
          >
            {t('cta.trial')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => openModal('contactDialog')}
          >
            {t('cta.contact')}
          </Button>
        </div>
      </div>
    </section>
  )
}