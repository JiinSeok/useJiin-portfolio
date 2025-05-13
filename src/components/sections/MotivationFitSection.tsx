'use client'

import { useTranslations } from 'next-intl'

/**
 * Motivation Fit section component for the homepage
 *
 * This component displays information about professional strengths and motivations,
 * helping companies understand what the person is good at and what gives them
 * a sense of fulfillment (sustainable motivation, motivation fit).
 */
export default function MotivationFitSection() {
  const t = useTranslations('HomePage')

  return (
    <section id="motivation-fit" className="w-full py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t('motivation-fit.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto break-keep">
            {t('motivation-fit.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Strengths */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">💪</span> {t('motivation-fit.strengths-title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-primary text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">{t('motivation-fit.strength-1-title')}</h4>
                  <p className="text-muted-foreground break-keep">{t('motivation-fit.strength-1-description')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">{t('motivation-fit.strength-2-title')}</h4>
                  <p className="text-muted-foreground break-keep">{t('motivation-fit.strength-2-description')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">{t('motivation-fit.strength-3-title')}</h4>
                  <p className="text-muted-foreground break-keep">{t('motivation-fit.strength-3-description')}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Motivations */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔥</span> {t('motivation-fit.motivations-title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-primary text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">{t('motivation-fit.motivation-1-title')}</h4>
                  <p className="text-muted-foreground break-keep">{t('motivation-fit.motivation-1-description')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">{t('motivation-fit.motivation-2-title')}</h4>
                  <p className="text-muted-foreground break-keep">{t('motivation-fit.motivation-2-description')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">{t('motivation-fit.motivation-3-title')}</h4>
                  <p className="text-muted-foreground break-keep">{t('motivation-fit.motivation-3-description')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
          <p className="text-lg font-semibold mb-2">{t('motivation-fit.conclusion-title')}</p>
          <p className="text-lg break-keep">{t('motivation-fit.conclusion-description')}</p>
        </div>
      </div>
    </section>
  )
}
