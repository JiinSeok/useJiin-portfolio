'use client'

import { ContentCard } from '@/components/ui/ContentCard'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

/**
 * Fun Facts section component for the homepage
 *
 * This component displays fun facts for users who have scrolled to the bottom of the page.
 * It appears as an accordion that can be expanded when clicked.
 */
export default function FunFactsSection() {
  const t = useTranslations('HomePage')
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Change fact every 8 seconds when expanded
  useEffect(() => {
    if (!isExpanded) return

    const interval = setInterval(() => {
      setCurrentFactIndex(current => {
        const factsCount = Array.isArray(t('fun-facts.items')) 
          ? t('fun-facts.items').length 
          : 1
        return (current + 1) % factsCount
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [t, isExpanded])

  // Check if section is visible when user scrolls
  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('fun-facts')
      if (!element) return

      const rect = element.getBoundingClientRect()
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0
      setIsVisible(isInView)
    }

    window.addEventListener('scroll', checkVisibility)
    // Initial check
    checkVisibility()

    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  return (
    <section
      id="fun-facts"
      className="w-full py-20 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-7xl mx-auto px-3 text-center">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-col items-center w-full focus:outline-none"
          aria-expanded={isExpanded}
          aria-controls="fun-facts-content"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('fun-facts.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t('fun-facts.description')}
          </p>
          <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>

        <div 
          id="fun-facts-content"
          className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ContentCard
            title={t('fun-facts.title')}
            className={`max-w-2xl mx-auto transition-all duration-500 bg-primary/10 ${isVisible ? 'transform translate-y-0' : 'transform translate-y-10'}`}
          >
            {Array.isArray(t('fun-facts.items')) ? (
              <p className="text-lg">
                {t('fun-facts.items')[currentFactIndex]}
              </p>
            ) : (
              <p className="text-lg">
                {t('fun-facts.items')}
              </p>
            )}
          </ContentCard>

          <div className="mt-6 flex justify-center space-x-2">
            {Array.isArray(t('fun-facts.items')) && 
              t('fun-facts.items').map((_: any, index: number) => (
                <button 
                  key={index}
                  className={`h-2 w-2 rounded-full ${currentFactIndex === index ? 'bg-primary' : 'bg-muted'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentFactIndex(index);
                  }}
                  aria-label={`View fact ${index + 1}`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
