'use client'

import Step1Form from '@/components/ui/Modal/ContactDialog/Step1Form'
import Step2Form from '@/components/ui/Modal/ContactDialog/Step2Form'
import Step3Confirmation from '@/components/ui/Modal/ContactDialog/Step3Confirmation'
import Modal, { ModalProps } from '@/components/ui/Modal/Modal'
import Stepper from '@/components/ui/Stepper'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { FieldValues } from 'react-hook-form'

/**
 * StepperDialog 컴포넌트: 사용자 문의를 위한 다단계 대화상자
 *
 * 이 컴포넌트는 3단계로 구성된 문의 양식을 제공합니다:
 * 1. 기본 정보 (이름, 이메일, 조직)
 * 2. 문의 내용 (제목, 유형, 메시지)
 * 3. 확인 및 제출
 */
export default function StepperDialog({
  isOpen,
  onRequestCloseAction,
}: ModalProps) {
  // 번역 훅 사용
  const t = useTranslations('StepperDialog')

  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState<Record<string, any>>({})

  // 각 단계별 폼 제출 처리
  const handleStepSubmit = (data: FieldValues): void => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  // 최종 폼 제출 처리
  const handleFinalSubmit = (): void => {
    // 여기서 백엔드로 데이터를 전송합니다
    console.log('최종 폼 데이터:', formData)
    onRequestCloseAction()
  }

  return (
    <Modal
      isOpen={isOpen}
      className={'w-max'}
      onRequestCloseAction={onRequestCloseAction}
    >
      {/* 닫기 버튼 */}
      <Modal.CloseButton onClick={onRequestCloseAction} />

      <Modal.Body className={'w-full'}>
        {/* 제목 */}
        <Modal.Title>
          {t('title') || '문의하기'}
          <p className="text-muted-foreground mt-2 text-base font-normal">
            {t('description') || '아래 양식을 작성하여 문의사항을 보내주세요.'}
          </p>
        </Modal.Title>

        {/* 단계별 폼 */}
        <Stepper>
          {/* 1단계: 기본 정보 */}
          <Stepper.Step title={t('step1.title') || '기본 정보'}>
            <Stepper.Content step={1}>
              <Step1Form formData={formData} onSubmit={handleStepSubmit} />
            </Stepper.Content>
          </Stepper.Step>

          {/* 2단계: 문의 내용 */}
          <Stepper.Step title={t('step2.title') || '문의 내용'}>
            <Stepper.Content step={0}>
              <Step2Form formData={formData} onSubmit={handleStepSubmit} />
            </Stepper.Content>
          </Stepper.Step>

          {/* 3단계: 확인 */}
          <Stepper.Step title={t('step3.title') || '확인'}>
            <Stepper.Content step={2}>
              <Step3Confirmation
                formData={formData}
                onSubmit={handleFinalSubmit}
              />
            </Stepper.Content>
          </Stepper.Step>
        </Stepper>
      </Modal.Body>
    </Modal>
  )
}
