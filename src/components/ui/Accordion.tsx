import React, { useState } from 'react'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`h-5 w-5 text-primary transition-transform ${
            isOpen ? 'rotate-180 transform' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`divide-y divide-border rounded-lg ${className}`}>
      {children}
    </div>
  )
}
