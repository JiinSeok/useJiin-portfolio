'use client'

import { ReactNode } from 'react'

interface ContentCardProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
}

/**
 * Content Card Component
 * 
 * A reusable card component for displaying content with a title and optional icon.
 * Used in various sections of the application to maintain consistent styling.
 */
export function ContentCard({
  title,
  icon,
  children,
  className = '',
}: ContentCardProps) {
  return (
    <div className={`bg-card p-6 md:p-8 rounded-xl shadow-lg w-full md:w-[28rem] ${className}`}>
      {/* Banner top text removed as per requirement */}
      <div className="space-y-4 h-full">
        {children}
      </div>
    </div>
  )
}
