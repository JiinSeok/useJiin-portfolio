'use client'

import { Button } from '@/components/ui/Button'
import { useModal } from '@/hooks/useModal'
import { useTranslations } from 'next-intl'

/**
 * Hero section component for the homepage
 * 
 * This component displays the main hero section with a title, description,
 * call-to-action buttons, and a code snippet example.
 */
export default function HeroSection() {
  const t = useTranslations('HomePage')
  const { openModal } = useModal()

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}{' '}
            <span className="text-primary">{t('hero.title-highlight1')}</span>{' '}
            <span className="text-primary">{t('hero.title-highlight2')}</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t('hero.cta-resume')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              {t('hero.cta-projects')}
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-primary hover:bg-primary/10"
              onClick={() => openModal('contactDialog')}
            >
              {t('hero.cta-contact')}
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-80 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-3 rounded-lg opacity-20 blur-xl"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">
                    {t('hero.code-snippet')}
                  </span>
                  <div className="h-3 w-3 rounded-full bg-chart-1"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-secondary p-3 rounded-lg text-sm">
                    {t('hero.code-question')}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg text-sm">
                    {t('hero.code-answer')}
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg text-sm font-mono">
                    <pre className="text-xs overflow-x-auto">
                      {`// Example TypeScript code
type User = {
  id: string;
  name: string;
  email: string;
};

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`}
                    </pre>
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