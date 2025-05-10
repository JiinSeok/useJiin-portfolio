'use client'

import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { useTranslations } from 'next-intl'

/**
 * FAQ section component for the homepage
 * 
 * This component displays frequently asked questions in an accordion format.
 */
export default function FAQSection() {
  const t = useTranslations('HomePage')

  // FAQ items - could be moved to constants file if needed
  const faqItems = [
    { question: 'faq.q1', answer: 'faq.a1' },
    { question: 'faq.q2', answer: 'faq.a2' },
    { question: 'faq.q3', answer: 'faq.a3' },
    { question: 'faq.q4', answer: 'faq.a4' },
    { question: 'faq.q5', answer: 'faq.a5' },
  ]

  return (
    <section id="faq" className="w-full py-20 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('faq.description')}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={t(item.question)}>
                <p>{t(item.answer)}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}