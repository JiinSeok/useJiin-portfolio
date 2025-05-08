// This file is deprecated and will be removed in a future update.
// Use ClientSideProviders.tsx instead.

'use client'

import { Spinner } from '@/components/ui/Spinner'
import { useHydration } from '@/hooks/useHydration'
import { ComponentProps } from '@/types/types'
import { Toaster } from 'sonner'

/**
 * @deprecated Use ClientSideProviders instead
 * ClientSideSetUp 컴포넌트는 클라이언트 사이드에서 필요한 설정을 초기화합니다.
 * - Toaster: 알림 메시지를 표시합니다.
 *
 * @param {ComponentProps} children - 자식 컴포넌트
 * @returns {JSX.Element} 초기화된 컴포넌트
 */

export const ClientSideSetUp = ({ children }: ComponentProps) => {
  const hydrated = useHydration()

  if (!hydrated)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    )

  return (
    <>
      <Toaster richColors position="top-center" />
      {children}
    </>
  )
}
