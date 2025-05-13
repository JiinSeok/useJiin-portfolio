'use client'

import Form from '@/components/Form/Form'
import Modal, { ModalProps } from '@/components/ui/Modal/Modal'
import { Button } from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { FieldValues } from 'react-hook-form'

/**
 * StepperDialog 컴포넌트: 개발자를 위한 메시지 영역
 *
 * 이 컴포넌트는 간단한 메시지 입력 필드와 전송 버튼을 제공합니다.
 */
export default function StepperDialog({ isOpen, onRequestClose }: ModalProps) {
  // 번역 훅 사용
  const t = useTranslations('StepperDialog')

  // 폼 제출 처리
  const handleSubmit = (data: FieldValues): void => {
    // 여기서 백엔드로 데이터를 전송합니다
    console.log('메시지 데이터:', data)
    onRequestClose()
  }

  return (
    <Modal isOpen={isOpen} className={'w-max'} onRequestClose={onRequestClose}>
      {/* 닫기 버튼 */}
      <Modal.CloseButton onClick={onRequestClose} />

      <Modal.Body className={'w-full'}>
        {/* 제목 */}
        <Modal.Title>
          {t('title') || '문의하기'}
          <p className="text-muted-foreground mt-2 text-base font-normal">
            {t('description') || '아래 양식을 작성하여 문의사항을 보내주세요.'}
          </p>
        </Modal.Title>

        {/* 간단한 메시지 폼 */}
        <Form formId="contact-simple" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* 메시지 입력 필드 */}
            <Form.Fieldset>
              <Form.Field>
                <Form.Textarea
                  name="message"
                  required
                  placeholder={
                    t('step2.messagePlaceholder') ||
                    '문의 내용을 자세히 입력해 주세요'
                  }
                  className="min-h-[120px]"
                />
              </Form.Field>
            </Form.Fieldset>
          </div>

          {/* 전송 버튼 */}
          <div className="mt-4 flex justify-end">
            <Form.SubmitButton>
              {t('submit') || '보내기'}
            </Form.SubmitButton>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
