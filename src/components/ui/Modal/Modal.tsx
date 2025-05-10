'use client'

/**
 * Modal 컴포넌트
 *
 * 기본 모달 컴포넌트로, ReactModal을 래핑하여 일관된 스타일과 동작을 제공합니다.
 * 모든 모달 컴포넌트(FormModal, AlertModal 등)의 기반이 되는 컴포넌트입니다.
 *
 * 컴포넌트 기반 구조를 제공하여 Modal.Title, Modal.Body, Modal.Footer 등의
 * 하위 컴포넌트를 통해 일관된 UI를 구성할 수 있습니다.
 */
import { useModal } from '@/hooks/useModal'
import { cn } from '@/lib/utils/classnames'
import { ComponentProps } from '@/types/types'
import { X } from 'lucide-react'
import { ReactNode } from 'react'
import ReactModal from 'react-modal'

export interface ModalProps {
  isOpen: boolean
  onAfterOpen?: () => void
  onRequestClose: () => void
  children?: ReactNode
  className?: string
}

export default function Modal({
  isOpen,
  onAfterOpen,
  onRequestClose,
  children,
  className,
}: ModalProps) {
  // useModal 훅에서 closeModal 함수를 가져와 기본 닫기 동작으로 사용
  const { closeModal } = useModal()

  const modalContentClass = cn(
    'relative bg-white rounded-lg shadow-2xl p-10 w-lg max-w-lg mx-auto',
    className,
  )

  // ReactModal 컴포넌트를 사용하여 모달 UI 구현
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose || closeModal}
      ariaHideApp={false}
      // 모달 오버레이 스타일 - 반투명 검은 배경
      overlayClassName="fixed inset-0 flex items-center justify-center z-50 "
      // 모달 컨텐츠 스타일 - 흰색 둥근 컨테이너, 너비 자동 조정
      className={modalContentClass}
    >
      {children}
    </ReactModal>
  )
}

/**
 * 모달 제목 컴포넌트
 * 모달의 제목을 표시하는 컴포넌트입니다.
 */
function Title({ children, className }: ComponentProps) {
  const titleClass = cn('text-2xl font-semibold text-center mb-4', className)
  return <h2 className={titleClass}>{children}</h2>
}

/**
 * 모달 본문 컴포넌트
 * 모달의 주요 내용을 담는 컴포넌트입니다.
 */
function Body({ children, className }: ComponentProps) {
  const bodyClass = cn('space-y-4', className)
  return <div className={bodyClass}>{children}</div>
}

/**
 * 모달 푸터 컴포넌트
 * 모달의 하단 영역으로, 주로 버튼들이 위치합니다.
 */
function Footer({ children, className }: ComponentProps) {
  const footerClass = cn(
    'flex flex-col sm:flex-row gap-4 justify-center mt-6',
    className,
  )
  return <div className={footerClass}>{children}</div>
}

/**
 * 모달 닫기 버튼 컴포넌트
 * 모달을 닫는 X 버튼을 제공합니다.
 */
function CloseButton({
  className,
  onClick,
}: {
  className?: string
  onClick: () => void
}) {
  const buttonClass = cn(
    'absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors',
    className,
  )
  return (
    <button onClick={onClick} className={buttonClass} aria-label="닫기">
      <X size={24} />
    </button>
  )
}

/**
 * 모달 아이콘 컴포넌트
 * 모달 상단에 표시되는 아이콘 영역입니다.
 */
function Icon({ children, className }: ComponentProps) {
  const iconClass = cn(
    'w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto',
    className,
  )
  return <div className={iconClass}>{children}</div>
}

// 하위 컴포넌트 연결
Modal.Title = Title
Modal.Body = Body
Modal.Footer = Footer
Modal.CloseButton = CloseButton
Modal.Icon = Icon
