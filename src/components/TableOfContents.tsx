'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils/classnames'
import { ChevronUp, ChevronDown, Menu, X, Check } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
  element: HTMLElement
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [viewedIds, setViewedIds] = useState<Set<string>>(new Set())
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const tocRef = useRef<HTMLDivElement>(null)

  // Find all headings in the document
  useEffect(() => {
    const findHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))

      const headingElements = elements.map((element) => {
        // If the heading doesn't have an id, create one based on its text content
        if (!element.id) {
          const id = element.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 
            `heading-${Math.random().toString(36).substring(2, 9)}`
          element.id = id
        }

        return {
          id: element.id,
          text: element.textContent || '',
          level: parseInt(element.tagName.substring(1), 10),
          element: element as HTMLElement
        }
      })

      setHeadings(headingElements)
    }

    // Check if we're on mobile (for styling purposes only)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    findHeadings()
    checkMobile()

    // Re-run when content might change or window resizes
    window.addEventListener('DOMContentLoaded', findHeadings)
    window.addEventListener('load', findHeadings)
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('DOMContentLoaded', findHeadings)
      window.removeEventListener('load', findHeadings)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Update active heading based on scroll position
  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset for better UX

      // Find the heading that's currently in view
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const element = heading.element

        if (element.offsetTop <= scrollPosition) {
          // Mark this heading as viewed
          setViewedIds(prev => {
            const newSet = new Set(prev)
            newSet.add(heading.id)
            return newSet
          })

          setActiveId(heading.id)
          break
        }
      }

      // If we're at the top of the page and no heading is active
      if (window.scrollY < 100 && headings.length > 0) {
        setActiveId(headings[0].id)

        // Mark the first heading as viewed
        setViewedIds(prev => {
          const newSet = new Set(prev)
          if (headings[0]) newSet.add(headings[0].id)
          return newSet
        })
      }
    }

    handleScroll() // Run once on mount
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  // Close expanded menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  // Scroll to heading when clicked
  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Get the element's position relative to the viewport
      const rect = element.getBoundingClientRect()

      // Calculate the absolute position and apply offset
      const absoluteTop = window.pageYOffset + rect.top - 120 // Offset for better UX

      window.scrollTo({
        top: absoluteTop,
        behavior: 'smooth'
      })

      // Mark this heading as viewed
      setViewedIds(prev => {
        const newSet = new Set(prev)
        newSet.add(id)
        return newSet
      })

      setActiveId(id)

      // Close mobile menu after clicking
      if (isMobile) {
        setIsExpanded(false)
      }
    }
  }, [isMobile])

  // Filter to only show h2 headings for the stepper
  const h2Headings = headings.filter(heading => heading.level === 2)

  // If no headings found, don't render anything
  if (headings.length === 0) return null

  return (
    <div 
      ref={tocRef}
      className={cn(
        "fixed z-50 transition-all duration-300",
        isMobile 
          ? "bottom-6 right-6" 
          : "top-28 right-6"
      )}
    >
      {/* Toggle Button - Visible on all screen sizes */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
        )}
        aria-label={isExpanded ? "Close table of contents" : "Open table of contents"}
      >
        {isExpanded ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Table of Contents - Only shown when expanded */}
      {isExpanded && (
        <div 
          className={cn(
            "bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg animate-in",
            isMobile 
              ? "absolute bottom-16 right-0 w-64 rounded-lg p-4 slide-in-from-right-5" 
              : "absolute top-16 right-0 w-64 rounded-lg p-4 slide-in-from-top-5"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/50">
            <h3 className="font-medium text-sm">Table of Contents</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close table of contents"
            >
              <X size={16} />
            </button>
          </div>

          {/* Full Table of Contents */}
          <nav className="pr-2 -mr-2 flex flex-col">
            <ul className="space-y-1">
              {headings.map((heading) => (
                <li 
                  key={heading.id}
                  className={cn(
                    "transition-colors",
                    {
                      "text-primary font-medium": activeId === heading.id,
                      "text-muted-foreground": activeId !== heading.id,
                    }
                  )}
                  style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
                >
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={cn(
                      "text-left text-sm py-1 hover:text-primary flex items-center w-full",
                      activeId === heading.id && "font-medium"
                    )}
                  >
                    {activeId === heading.id && (
                      <div className="w-1 h-4 bg-primary rounded-full mr-2" />
                    )}
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
