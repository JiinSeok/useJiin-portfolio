/**
 * Hero section component for the homepage
 *
 * This component displays the main hero section with a title, description,
 * call-to-action buttons, and a code snippet example.
 * 
 * Refactored to use Compound Component Pattern for better separation of concerns.
 */
'use client'

import { Button } from '@/components/ui/Button'
import { ContentCard } from '@/components/ui/ContentCard'
import { TabComponent, TabItem } from '@/components/ui/TabComponent'
import { useModal } from '@/hooks/useModal'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// Context type definition
type HeroSectionContextType = {
  activeTab: string
  setActiveTab: (tab: string) => void
  openModal: (modalName: string) => void
  t: (key: string) => string
}

// Create context
const HeroSectionContext = createContext<HeroSectionContextType | undefined>(undefined)

// Hook to use the context
const useHeroSection = () => {
  const context = useContext(HeroSectionContext)
  if (!context) {
    throw new Error('useHeroSection must be used within a HeroSectionProvider')
  }
  return context
}

// Main component
export default function HeroSection() {
  const t = useTranslations('HomePage')
  const { openModal } = useModal()
  const [activeTab, setActiveTab] = useState<string>('code')

  // Define tab content
  const tabs: TabItem[] = [
    {
      id: 'code',
      label: t('hero.tab-code'),
      content: (
        <ContentCard
          title={t('hero.code-snippet')}
          icon={<div className="bg-chart-1"></div>}
        >
          <div className="bg-secondary p-4 rounded-lg text-responsive-sm">
            {t('hero.code-question')}
          </div>
          <div className="bg-primary/10 p-4 rounded-lg text-responsive-sm whitespace-pre-line">
            {t('hero.code-answer')}
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg font-mono">
            <pre className="text-responsive-sm whitespace-pre-wrap break-words">
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
        </ContentCard>
      ),
    },
    {
      id: 'seo',
      label: t('hero.tab-seo'),
      content: (
        <ContentCard
          title={t('hero.seo-title')}
          icon={<div className="bg-chart-3"></div>}
        >
          <div className="relative h-64 md:h-72 w-full rounded-lg overflow-hidden">
            <Image
              src="/notion-images/albaform/seo.png"
              alt="SEO Optimization"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-responsive-sm text-muted-foreground break-keep whitespace-pre-line leading-relaxed h-24 overflow-hidden">
            {t('hero.seo-description')}
          </p>
        </ContentCard>
      ),
    },
    {
      id: 'demo',
      label: t('hero.tab-demo'),
      content: (
        <ContentCard
          title={t('hero.demo-title')}
          icon={<div className="bg-chart-4"></div>}
        >
          <div className="relative h-64 md:h-72 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/demo.gif"
              alt="Interactive Demo"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-responsive-sm text-muted-foreground break-keep whitespace-pre-line leading-relaxed h-24 overflow-hidden">
            {t('hero.demo-description')}
          </p>
        </ContentCard>
      ),
    },
  ]

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Find current tab index
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
      // Calculate next tab index (loop back to 0 if at the end)
      const nextIndex = (currentIndex + 1) % tabs.length
      // Set the next tab as active
      setActiveTab(tabs[nextIndex].id)
    }, 5000) // Change tab every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [activeTab, tabs])

  // Context value
  const contextValue = {
    activeTab,
    setActiveTab,
    openModal,
    t
  }

  return (
    <HeroSectionContext.Provider value={contextValue}>
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20 ">
        <div className="max-w-7xl mx-auto px-3 flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-16">
          <HeroSection.Content />
          <HeroSection.TabDisplay tabs={tabs} />
        </div>
      </section>
    </HeroSectionContext.Provider>
  )
}

// Content Component
HeroSection.Content = function Content() {
  const { t, openModal } = useHeroSection()
  
  return (
    <div className="w-full md:w-5/12 lg:w-1/2 mb-10 md:mb-0 relative">
      <h1 className="text-responsive-4xl font-bold mb-6 break-keep leading-tight">
        {t('footer.description')}
      </h1>
      <HeroSection.Summary />
      <p className="text-responsive-lg mb-10 text-muted-foreground break-keep whitespace-pre-line leading-relaxed">
        {t('hero.description')}
      </p>
      <HeroSection.CTAButtons />
    </div>
  )
}

// Summary Component
HeroSection.Summary = function Summary() {
  const { t } = useHeroSection()
  
  return (
    <ul className="mb-10 text-muted-foreground list-disc pl-6 space-y-3">
      {(() => {
        const summary = t('hero.summary')
        if (Array.isArray(summary)) {
          return summary.map((item: string, index: number) => (
            <li
              key={index}
              className="text-responsive-sm leading-relaxed"
            >
              {item}
            </li>
          ))
        } else {
          return (
            <li className="text-responsive-sm leading-relaxed">
              {summary}
            </li>
          )
        }
      })()}
    </ul>
  )
}

// CTA Buttons Component
HeroSection.CTAButtons = function CTAButtons() {
  const { t, openModal } = useHeroSection()
  
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
        asChild
      >
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('hero.cta-resume')}
        </a>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
        asChild
      >
        <a href="#projects">{t('hero.cta-projects')}</a>
      </Button>
      <Button
        size="lg"
        variant="ghost"
        className="text-primary hover:bg-primary/10 w-full sm:w-auto"
        onClick={() => openModal('contactDialog')}
      >
        {t('hero.cta-contact')}
      </Button>
    </div>
  )
}

// Tab Display Component
interface TabDisplayProps {
  tabs: TabItem[]
}

HeroSection.TabDisplay = function TabDisplay({ tabs }: TabDisplayProps) {
  const { activeTab, setActiveTab } = useHeroSection()
  
  return (
    <div className="w-full md:w-7/12 lg:w-1/2 flex justify-center relative mt-8 md:mt-0">
      <div className="relative w-full max-w-lg h-auto min-h-[340px] md:min-h-[420px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-3 rounded-xl opacity-20 blur-xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
          <TabComponent
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  )
}