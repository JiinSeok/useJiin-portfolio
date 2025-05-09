import Form from '@/components/Form/Form'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FieldValues } from 'react-hook-form'

// Step1Form 컴포넌트: 연락처 대화상자의 첫 번째 단계 (기본 정보)
interface Step1FormProps {
  formData: Record<string, any>
  onSubmit: (data: FieldValues) => void
}

export default function Step1Form({ formData, onSubmit }: Step1FormProps) {
  // 번역 훅 사용
  const t = useTranslations('StepperDialog')

  return (
    <Form formId="contact-step1" onSubmit={onSubmit} defaultValues={formData}>
      <div className="space-y-4">
        {/* 이름 필드 */}
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

        {/* 이메일 필드 */}
        <Form.Fieldset>
          <Form.Field>
            <Form.Legend required>{t('step1.email') || '이메일'}</Form.Legend>
            <Form.Input
              name="email"
              type="email"
              required
              placeholder={
                t('step1.emailPlaceholder') || '이메일을 입력해 주세요'
              }
            />
          </Form.Field>
        </Form.Fieldset>

        {/* 조직명 필드 (선택사항) */}
        <Form.Fieldset>
          <Form.Field>
            <Form.Legend>{t('step1.organization') || '조직명'}</Form.Legend>
            <Form.Input
              name="organization"
              type="text"
              placeholder={
                t('step1.organizationPlaceholder') ||
                '조직명을 입력해 주세요 (선택사항)'
              }
            />
          </Form.Field>
        </Form.Fieldset>
      </div>

      {/* 다음 버튼 */}
      <div className="mt-8 flex justify-end">
        <Form.SubmitButton>{t('next') || '다음'}</Form.SubmitButton>
      </div>
    </Form>
  )
}
