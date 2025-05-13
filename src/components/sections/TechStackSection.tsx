'use client'

import { TabComponent, TabItem } from '@/components/ui/TabComponent'
import { TECH_STACK_CATEGORIES, TECH_STACK_WITH_EXPERIENCE } from '@/constants/sections/techStack'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Tech Stack section component for the homepage
 *
 * This component displays the developer's technical skills and expertise,
 * including detailed experience information organized by categories.
 */
export default function TechStackSection() {
  const t = useTranslations('HomePage')
  const [activeCategory, setActiveCategory] = useState<string>(
    TECH_STACK_CATEGORIES[0],
  )
  const [showMoreIndicator, setShowMoreIndicator] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Check if content overflows to show the indicator
  useEffect(() => {
    const checkOverflow = () => {
      if (cardRef.current) {
        const isOverflowing =
          cardRef.current.scrollHeight > cardRef.current.clientHeight
        setShowMoreIndicator(isOverflowing)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [activeCategory])

  // Auto-rotate category tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Find current category index
      const currentIndex = TECH_STACK_CATEGORIES.findIndex(
        (category) => category === activeCategory,
      )
      // Calculate next category index (loop back to 0 if at the end)
      const nextIndex = (currentIndex + 1) % TECH_STACK_CATEGORIES.length
      // Set the next category as active
      setActiveCategory(TECH_STACK_CATEGORIES[nextIndex])
    }, 5000) // Change category every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [activeCategory])

  // Create tab items from categories
  const categoryTabs: TabItem[] = TECH_STACK_CATEGORIES.map((category) => ({
    id: category,
    label: category,
    content: (
      <div className="bg-card p-6 rounded-lg shadow-lg w-full">
        {/*<div className="flex items-center mb-6">*/}
        {/*  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">*/}
        {/*    <span className="text-2xl">💻</span>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <h4 className="font-semibold">{category}</h4>*/}
        {/*    <p className="text-sm text-muted-foreground">*/}
        {/*      {t('tech-stack.skills.subtitle')}*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="space-y-6 grid grid-cols-1 gap-4">
          {(() => {
            const filteredTech = TECH_STACK_WITH_EXPERIENCE.filter(
              (tech) => tech.category === category,
            )

            // If there are no tech items for this category, show a placeholder
            if (filteredTech.length === 0) {
              return (
                <div className="border-b pb-4 last:border-0">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 mr-3 relative bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">📚</span>
                    </div>
                    <h5 className="font-medium">{category} 기술</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category} 관련 기술을 사용한 경험이 있습니다. 자세한 내용은
                    추가될 예정입니다.
                  </p>
                </div>
              )
            }

            // Otherwise, show the filtered tech items
            return filteredTech.map((tech, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 mr-3 relative">
                    <Image
                      src={
                        tech.logo ||
                        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                      }
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        // Fallback to a default image if the logo fails to load
                        e.currentTarget.src =
                          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                      }}
                    />
                  </div>
                  <h5 className="font-medium">{tech.name}</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tech.experience ||
                    `${tech.name}을(를) 사용한 경험이 있습니다.`}
                </p>
              </div>
            ))
          })()}
        </div>
      </div>
    ),
  }))

  return (
    <section id="tech-stack" className="w-full py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('tech-stack.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {/*{t('tech-stack.description')}*/}
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Group 1: Tech Features and Experience */}
          {/*<div className="flex justify-center">*/}
          {/* Merged Tech Features */}
          {/*<div className="w-full max-w-2xl">*/}
          {/*  <ContentCard */}
          {/*    title={t('tech-stack.skills.title')}*/}
          {/*    className="p-6 h-full"*/}
          {/*    icon={<div className="bg-primary/10 text-2xl flex items-center justify-center">🚀</div>}*/}
          {/*  >*/}
          {/*      <div className="flex items-center mb-2">*/}
          {/*        <p className="text-sm text-muted-foreground">*/}
          {/*          현재 사용 중인 기술*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
          {/*        {TECH_STACK_FEATURES.map((tech, index) => (*/}
          {/*          <div key={index} className="flex items-center p-3 bg-secondary/20 rounded-lg">*/}
          {/*            <div className="mr-3 bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center">*/}
          {/*              <span className="text-lg">{tech.icon}</span>*/}
          {/*            </div>*/}
          {/*            <div>*/}
          {/*              <h3 className="font-medium">*/}
          {/*                {t(tech.title)}*/}
          {/*              </h3>*/}
          {/*              <p className="text-sm text-muted-foreground">*/}
          {/*                {t(tech.description).split('.')[0]}*/}
          {/*              </p>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        ))}*/}
          {/*      </div>*/}
          {/*    </ContentCard>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Group 2: Tech Experience by Categories */}
          <div className="flex justify-center items-start">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-chart-2 to-chart-4 rounded-lg opacity-20 blur-xl"></div>
              <div className="flex flex-col items-center">
                <div
                  ref={cardRef}
                  className="w-full max-h-full relative
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-primary/20
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb:hover]:bg-primary/40"
                >
                  <div className="pb-10">
                    {' '}
                    {/* Added padding at the bottom to make space for the floating indicator */}
                    <TabComponent
                      tabs={categoryTabs}
                      activeTab={activeCategory}
                      setActiveTab={setActiveCategory}
                      tabClassName="px-3 py-1 rounded-md text-sm"
                    />
                  </div>

                  {/* Floating indicator for more content */}
                  {/*{showMoreIndicator && (*/}
                  {/*  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none">*/}
                  {/*    <div className="bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md animate-bounce">*/}
                  {/*      <ChevronDown className="h-6 w-6 text-primary" />*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*)}*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
