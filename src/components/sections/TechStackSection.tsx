'use client'

import { TECH_SKILLS, TECH_STACK_FEATURES } from '@/constants/portfolio'
import { useTranslations } from 'next-intl'

/**
 * Tech Stack section component for the homepage
 *
 * This component displays the developer's technical skills and expertise,
 * including a visual representation of skill levels.
 */
export default function TechStackSection() {
  const t = useTranslations('HomePage')

  return (
    <section id="tech-stack" className="w-full py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('tech-stack.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('tech-stack.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tech Features */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {TECH_STACK_FEATURES.map((tech, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center">
                    <span className="text-lg">{tech.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t(tech.title)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(tech.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Chart */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-chart-2 to-chart-4 rounded-lg opacity-20 blur-xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        {t('tech-stack.skills.title')}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t('tech-stack.skills.subtitle')}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {TECH_SKILLS.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">{t(skill.name)}</span>
                          <span className="text-sm font-medium">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className={`${skill.colorClass} h-2 rounded-full`}
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
