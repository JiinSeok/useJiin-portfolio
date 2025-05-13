'use client'

import { CATEGORY_SUMMARIES } from '@/constants/category-summaries'
import { useTranslations } from 'next-intl'

/**
 * Category Summary section component for the homepage
 *
 * This component displays a grid of category summaries below the hero section.
 * It is responsive for sm (mobile), md (tablet), and lg (desktop/TV) breakpoints.
 */
export default function CategorySummarySection() {
  const t = useTranslations('HomePage')

  return (
    <section className="w-full py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('category-summary.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('category-summary.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORY_SUMMARIES.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{t(category.title)}</h3>
              <p className="text-muted-foreground flex-grow">{t(category.description)}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="#"
                  className="text-primary hover:underline text-sm flex items-center"
                >
                  <span>{t('category-summary.learn-more')}</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
