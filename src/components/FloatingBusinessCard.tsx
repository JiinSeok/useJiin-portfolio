/**
 * FloatingBusinessCard Component
 * 
 * A floating button that displays Jiin Seok's business card with contact information.
 * It provides options to copy the contact information.
 */
'use client'

import { useState } from 'react'
import { UserIcon, CopyIcon, CheckIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/classnames'
import { SOCIAL_LINKS } from '@/constants/menu'
import { useTranslations } from 'next-intl'

interface FloatingBusinessCardProps {
  className?: string
}

export function FloatingBusinessCard({ className }: FloatingBusinessCardProps) {
  const t = useTranslations('HomePage')
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const copyToClipboard = async () => {
    try {
      const text = `Jiin Seok\nEmail: seokjiin1073@gmail.com\nGitHub: github.com/jiindev\nLinkedIn: linkedin.com/in/jiindev`
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy contact info: ', err)
    }
  }

  // Find GitHub and LinkedIn links
  const githubLink = SOCIAL_LINKS.find(link => link.id === 'github')?.path || '#'
  const linkedinLink = SOCIAL_LINKS.find(link => link.id === 'linkedin')?.path || '#'

  return (
    <div className={cn('fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2', className)}>
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2">
          {/* Business Card */}
          <div 
            className="bg-card border border-border rounded-lg p-4 shadow-lg w-64"
          >
            <h3 className="text-xl font-bold mb-2">Jiin Seok</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Email: seokjiin1073@gmail.com</p>
              <p>
                GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/jiindev</a>
              </p>
              <p>
                LinkedIn: <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/jiindev</a>
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={copyToClipboard}
              className="rounded-full shadow-md"
              aria-label="Copy contact information"
            >
              {copied ? <CheckIcon className="h-5 w-5" /> : <CopyIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      )}
      <Button
        variant="primary"
        size="icon"
        onClick={toggleMenu}
        className="rounded-full shadow-md bg-primary"
        aria-label={isOpen ? "Close business card" : "Open business card"}
      >
        {isOpen ? <XIcon className="h-5 w-5" /> : <UserIcon className="h-5 w-5" />}
      </Button>
    </div>
  )
}