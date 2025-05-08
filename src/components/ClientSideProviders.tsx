'use client'

import { Toaster } from 'sonner'

/**
 * ClientSideProviders component handles client-side only functionality
 * This component is rendered at the end of the body to ensure it doesn't
 * interfere with server-side rendering of the main content
 */
export function ClientSideProviders() {
  return (
    <>
      <Toaster richColors position="top-center" />
    </>
  )
}
