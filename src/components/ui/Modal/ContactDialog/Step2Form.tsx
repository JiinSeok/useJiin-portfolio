import Form from '@/components/Form/Form'
import { Button } from '@/components/ui/Button'
import { useStepper } from '@/components/ui/Stepper'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FieldValues } from 'react-hook-form'

// Step2Form 컴포넌트: 연락처 대화상자의 두 번째 단계 (문의 내용)
interface Step2FormProps {
  formData: Record<string, any>
  onSubmit: (data: FieldValues) => void
}

export default function Step2Form({ formData, onSubmit }: Step2FormProps) {
  // 번역 훅 사용
  const t = useTranslations('StepperDialog')

  return (
    <Form formId="contact-step2" onSubmit={onSubmit} defaultValues={formData}>
      <div className="space-y-4">
        {/* 문의 제목 필드 */}
        <Form.Fieldset>
          <Form.Field>
            <Form.Legend required>
              {t('step2.subject') || '문의 제목'}
            </Form.Legend>
            <Form.Input
              name="subject"
              type="text"
              required
              placeholder={
                t('step2.subjectPlaceholder') || '문의 제목을 입력해 주세요'
              }
            />
          </Form.Field>
        </Form.Fieldset>

        {/* 문의 유형 선택 필드 */}
        <Form.Fieldset>
          <Form.Field>
            <Form.Legend required>
              {t('step2.category') || '문의 유형'}
            </Form.Legend>
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

        {/* 문의 내용 텍스트 영역 */}
        <Form.Fieldset>
          <Form.Field>
            <Form.Legend required>
              {t('step2.message') || '문의 내용'}
            </Form.Legend>
            <Form.Textarea
              name="message"
              required
              placeholder={
                t('step2.messagePlaceholder') ||
                '문의 내용을 자세히 입력해 주세요'
              }
            />
          </Form.Field>
        </Form.Fieldset>
      </div>

      {/* 이전/다음 버튼 */}
      <div className="mt-8 flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            // 이전 단계로 돌아가기
            const { prevStep } = useStepper()
            prevStep()
          }}
        >
          {t('back') || '이전'}
        </Button>
        <Form.SubmitButton>{t('next') || '다음'}</Form.SubmitButton>
      </div>
    </Form>
  )
}
