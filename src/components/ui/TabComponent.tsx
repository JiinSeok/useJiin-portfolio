'use client'

import { ReactNode } from 'react'

export interface TabItem {
  id: string
  label: ReactNode
  content: ReactNode
}

interface TabComponentProps {
  tabs: TabItem[]
  activeTab: string
  setActiveTab: (id: string) => void
  className?: string
  tabClassName?: string
  activeTabClassName?: string
  inactiveTabClassName?: string
  contentClassName?: string
}

/**
 * Reusable Tab Component
 * 
 * This component provides a standardized way to create tabs across the application.
 * It handles tab navigation and content rendering based on the active tab.
 */
export function TabComponent({
  tabs,
  activeTab,
  setActiveTab,
  className = '',
  tabClassName = 'px-4 py-2 rounded-md text-sm font-medium transition-colors',
  activeTabClassName = 'bg-primary text-white',
  inactiveTabClassName = 'bg-secondary',
  contentClassName = '',
}: TabComponentProps) {
  return (
    <div className={className}>
      {/* Tab navigation */}
      <div className="flex space-x-3 mb-6">
        {tabs.map((tab) => (
          <a
            href={`#${tab.id}`}
            key={tab.id}
            className={`${tabClassName} ${
              activeTab === tab.id ? activeTabClassName : inactiveTabClassName
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab.id);
            }}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* Tab content */}
      <div className={`flex justify-center ${contentClassName}`}>
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="w-full">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  )
}
