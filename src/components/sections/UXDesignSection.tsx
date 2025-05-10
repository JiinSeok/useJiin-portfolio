'use client'

import { UX_DESIGN_FEATURES } from '@/constants/portfolio'
import { useTranslations } from 'next-intl'

/**
 * UX Design section component for the homepage
 * 
 * This component displays a grid of UX design features and capabilities.
 */
export default function UXDesignSection() {
  const t = useTranslations('HomePage')

  return (
    <section id="ux-design" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('ux-design.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('ux-design.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UX_DESIGN_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{t(feature.title)}</h3>
              <p className="text-muted-foreground">{t(feature.description)}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="#"
                  className="text-primary hover:underline text-sm flex items-center"
                >
                  <span>View example</span>
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