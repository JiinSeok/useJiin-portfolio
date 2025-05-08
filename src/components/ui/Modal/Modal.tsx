'use client'

/**
 * Modal 컴포넌트
 *
 * 기본 모달 컴포넌트로, ReactModal을 래핑하여 일관된 스타일과 동작을 제공합니다.
 * 모든 모달 컴포넌트(FormModal, AlertModal 등)의 기반이 되는 컴포넌트입니다.
 */
import { useModal } from '@/hooks/useModal'
import { ReactNode } from 'react'
import ReactModal from 'react-modal'

export interface ModalProps {
  isOpen: boolean
  onAfterOpen?: () => void
  onRequestCloseAction: () => void
  children?: ReactNode
}

export default function Modal({
  isOpen,
  onAfterOpen,
  onRequestCloseAction,
  children,
}: ModalProps) {
  // useModal 훅에서 closeModal 함수를 가져와 기본 닫기 동작으로 사용
  const { closeModal } = useModal()

  // ReactModal 컴포넌트를 사용하여 모달 UI 구현
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestCloseAction || closeModal}
      ariaHideApp={false}
      // 모달 오버레이 스타일 - 반투명 검은 배경
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      // 모달 컨텐츠 스타일 - 흰색 둥근 컨테이너, 너비 자동 조정
      className="relative bg-white rounded-lg p-8 w-lg max-w-lg mx-auto"
    >
      {children}
    </ReactModal>
  )
}
