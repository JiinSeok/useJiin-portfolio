/**
 * FloatingShareButton Component
 * 
 * A floating button that allows users to share the current URL and og tags.
 * It provides options to copy the URL to clipboard and share on social media.
 */
'use client'

import { useState } from 'react'
import { Share2Icon, CopyIcon, CheckIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/classnames'

interface FloatingShareButtonProps {
  className?: string
}

export function FloatingShareButton({ className }: FloatingShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL: ', err)
    }
  }

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(document.title)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
  }

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  }

  return (
    <div className={cn('fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2', className)}>
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2">
          <Button
            variant="secondary"
            size="icon"
            asChild
            className="rounded-full shadow-md"
            aria-label="Copy URL to clipboard"
          >
            <a href="#copy" onClick={(e) => {
              e.preventDefault();
              copyToClipboard();
            }}>
              {copied ? <CheckIcon className="h-5 w-5" /> : <CopyIcon className="h-5 w-5" />}
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            asChild
            className="rounded-full shadow-md"
            aria-label="Share on Twitter"
          >
            <a href="https://twitter.com/intent/tweet" onClick={(e) => {
              e.preventDefault();
              shareOnTwitter();
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            asChild
            className="rounded-full shadow-md"
            aria-label="Share on Facebook"
          >
            <a href="https://www.facebook.com/sharer/sharer.php" onClick={(e) => {
              e.preventDefault();
              shareOnFacebook();
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </Button>
        </div>
      )}
      <Button
        variant="primary"
        size="icon"
        asChild
        className="rounded-full shadow-md"
        aria-label={isOpen ? "Close share menu" : "Open share menu"}
      >
        <a href="#share" onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}>
          {isOpen ? <XIcon className="h-5 w-5" /> : <Share2Icon className="h-5 w-5" />}
        </a>
      </Button>
    </div>
  )
}
