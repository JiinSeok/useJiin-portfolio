'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-3 rounded-lg opacity-20 blur-xl"></div>
          <div className="relative bg-card p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-destructive"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We apologize for the inconvenience. Our team has been notified of
              this issue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={reset}
              >
                Try Again
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
        {error.digest && (
          <p className="text-muted-foreground">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  )
}
