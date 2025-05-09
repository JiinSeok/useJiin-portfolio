'use client'

import React, { useState, useRef } from 'react'
import Modal from '@/components/ui/Modal/Modal'
import Stepper, { useStepper } from '@/components/ui/Stepper'
import Form from '@/components/Form/Form'
import { Button } from '@/components/ui/Button'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useModal } from '@/hooks/useModal'
import { FieldValues, UseFormReturn } from 'react-hook-form'

interface ContactDialogProps {
  isOpen: boolean
  onRequestCloseAction: () => void
}

export default function ContactDialog({
  isOpen,
  onRequestCloseAction,
}: ContactDialogProps) {
  const t = useTranslations('ContactDialog')
  const [formData, setFormData] = useState<Record<string, any>>({})

  // Handle form submission for each step
  const handleStepSubmit = (data: FieldValues): void => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  // Handle final form submission
  const handleFinalSubmit = (): void => {
    // Here you would typically send the data to your backend
    console.log('Final form data:', formData)
    onRequestCloseAction()
  }

  return (
    <Modal isOpen={isOpen} onRequestCloseAction={onRequestCloseAction}>
      {/* Close button */}
      <button
        onClick={onRequestCloseAction}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="닫기"
      >
        <X size={24} />
      </button>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">
          {t('title') || '문의하기'}
        </h2>
        <p className="text-muted-foreground mt-2">
          {t('description') || '아래 양식을 작성하여 문의사항을 보내주세요.'}
        </p>
      </div>

      {/* Stepper Form */}
      <Stepper>
        {/* Step 1: Basic Information */}
        <Stepper.Step title={t('step1.title') || '기본 정보'}>
          <Stepper.Content step={0}>
            <Form
              formId="contact-step1"
              onSubmit={handleStepSubmit}
              defaultValues={formData}
            >
              <div className="space-y-4">
                <Form.Fieldset>
                  <Form.Field>
                    <Form.Legend required>{t('step1.name') || '이름'}</Form.Legend>
                    <Form.Input
                      name="name"
                      type="text"
                      required
                      placeholder={t('step1.namePlaceholder') || '이름을 입력해 주세요'}
                    />
                  </Form.Field>
                </Form.Fieldset>

                <Form.Fieldset>
                  <Form.Field>
                    <Form.Legend required>{t('step1.email') || '이메일'}</Form.Legend>
                    <Form.Input
                      name="email"
                      type="email"
                      required
                      placeholder={t('step1.emailPlaceholder') || '이메일을 입력해 주세요'}
                    />
                  </Form.Field>
                </Form.Fieldset>

                <Form.Fieldset>
                  <Form.Field>
                    <Form.Legend>{t('step1.organization') || '조직명'}</Form.Legend>
                    <Form.Input
                      name="organization"
                      type="text"
                      placeholder={t('step1.organizationPlaceholder') || '조직명을 입력해 주세요 (선택사항)'}
                    />
                  </Form.Field>
                </Form.Fieldset>
              </div>

              <div className="mt-8 flex justify-end">
                <Form.SubmitButton>
                  {t('next') || '다음'}
                </Form.SubmitButton>
              </div>
            </Form>
          </Stepper.Content>
        </Stepper.Step>

        {/* Step 2: Inquiry Details */}
        <Stepper.Step title={t('step2.title') || '문의 내용'}>
          <Stepper.Content step={1}>
            <Form
              formId="contact-step2"
              onSubmit={handleStepSubmit}
              defaultValues={formData}
            >
              <div className="space-y-4">
                <Form.Fieldset>
                  <Form.Field>
                    <Form.Legend required>{t('step2.subject') || '문의 제목'}</Form.Legend>
                    <Form.Input
                      name="subject"
                      type="text"
                      required
                      placeholder={t('step2.subjectPlaceholder') || '문의 제목을 입력해 주세요'}
                    />
                  </Form.Field>
                </Form.Fieldset>

                <Form.Fieldset>
                  <Form.Field>
                    <Form.Legend required>{t('step2.category') || '문의 유형'}</Form.Legend>
                    <select
                      name="category"
                      className="w-full rounded-lg border border-gray-200 p-2 text-xl"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t('step2.categoryPlaceholder') || '문의 유형을 선택해 주세요'}
                      </option>
                      <option value="general">
                        {t('step2.categoryGeneral') || '일반 문의'}
                      </option>
                      <option value="technical">
                        {t('step2.categoryTechnical') || '기술 지원'}
                      </option>
                      <option value="pricing">
                        {t('step2.categoryPricing') || '가격 문의'}
                      </option>
                      <option value="partnership">
                        {t('step2.categoryPartnership') || '제휴 문의'}
                      </option>
                    </select>
                  </Form.Field>
                </Form.Fieldset>

                <Form.Fieldset>
                  <Form.Field>
                    <Form.Legend required>{t('step2.message') || '문의 내용'}</Form.Legend>
                    <Form.Textarea
                      name="message"
                      required
                      placeholder={t('step2.messagePlaceholder') || '문의 내용을 자세히 입력해 주세요'}
                    />
                  </Form.Field>
                </Form.Fieldset>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    // Go back to the previous step without saving form data
                    const { prevStep } = useStepper();
                    prevStep();
                  }}
                >
                  {t('back') || '이전'}
                </Button>
                <Form.SubmitButton>
                  {t('next') || '다음'}
                </Form.SubmitButton>
              </div>
            </Form>
          </Stepper.Content>
        </Stepper.Step>

        {/* Step 3: Confirmation */}
        <Stepper.Step title={t('step3.title') || '확인'}>
          <Stepper.Content step={2}>
            <div className="space-y-6">
              <div className="rounded-lg bg-secondary/20 p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t('step3.summary') || '문의 내용 확인'}
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{t('step1.name') || '이름'}:</span>
                    <span>{formData.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">{t('step1.email') || '이메일'}:</span>
                    <span>{formData.email}</span>
                  </div>

                  {formData.organization && (
                    <div className="flex justify-between">
                      <span className="font-medium">{t('step1.organization') || '조직명'}:</span>
                      <span>{formData.organization}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="font-medium">{t('step2.subject') || '문의 제목'}:</span>
                    <span>{formData.subject}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">{t('step2.category') || '문의 유형'}:</span>
                    <span>{formData.category}</span>
                  </div>

                  <div className="border-t pt-3 mt-3">
                    <span className="font-medium block mb-2">{t('step2.message') || '문의 내용'}:</span>
                    <p className="text-muted-foreground whitespace-pre-wrap">{formData.message}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-secondary/10 p-4">
                <p className="text-sm text-muted-foreground">
                  {t('step3.disclaimer') || '제출하신 문의사항은 영업일 기준 1-2일 내에 답변드리겠습니다. 감사합니다.'}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  // Go back to the previous step
                  const { prevStep } = useStepper();
                  prevStep();
                }}
              >
                {t('back') || '이전'}
              </Button>
              <Button
                type="button"
                onClick={handleFinalSubmit}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t('submit') || '제출하기'}
              </Button>
            </div>
          </Stepper.Content>
        </Stepper.Step>
      </Stepper>
    </Modal>
  )
}

// Hook to use the contact dialog
export const useContactDialog = () => {
  const { openModal, closeModal, isModalOpen } = useModal()

  const openContactDialog = () => openModal('contact')
  const closeContactDialog = () => closeModal()
  const isContactDialogOpen = isModalOpen('contact')

  return {
    openContactDialog,
    closeContactDialog,
    isContactDialogOpen,
  }
}
