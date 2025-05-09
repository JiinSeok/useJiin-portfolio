import { Button } from '@/components/ui/Button'
import { useStepper } from '@/components/ui/Stepper'
import { useTranslations } from 'next-intl'
import React from 'react'

// Step3Confirmation 컴포넌트: 연락처 대화상자의 세 번째 단계 (확인 및 제출)
interface Step3ConfirmationProps {
  formData: Record<string, any>
  onSubmit: () => void
}

export default function Step3Confirmation({
  formData,
  onSubmit,
}: Step3ConfirmationProps) {
  // 번역 훅 사용
  const t = useTranslations('StepperDialog')

  return (
    <>
      <div className="space-y-6">
        {/* 문의 내용 요약 */}
        <div className="rounded-lg bg-secondary/20 p-6">
          <h3 className="text-xl font-semibold mb-4">
            {t('step3.summary') || '문의 내용 확인'}
          </h3>

          <div className="space-y-3">
            {/* 이름 정보 */}
            <div className="flex justify-between">
              <span className="font-medium">{t('step1.name') || '이름'}:</span>
              <span>{formData.name}</span>
            </div>

            {/* 이메일 정보 */}
            <div className="flex justify-between">
              <span className="font-medium">
                {t('step1.email') || '이메일'}:
              </span>
              <span>{formData.email}</span>
            </div>

            {/* 조직명 정보 (있는 경우에만 표시) */}
            {formData.organization && (
              <div className="flex justify-between">
                <span className="font-medium">
                  {t('step1.organization') || '조직명'}:
                </span>
                <span>{formData.organization}</span>
              </div>
            )}

            {/* 문의 제목 정보 */}
            <div className="flex justify-between">
              <span className="font-medium">
                {t('step2.subject') || '문의 제목'}:
              </span>
              <span>{formData.subject}</span>
            </div>

            {/* 문의 유형 정보 */}
            <div className="flex justify-between">
              <span className="font-medium">
                {t('step2.category') || '문의 유형'}:
              </span>
              <span>{formData.category}</span>
            </div>

            {/* 문의 내용 정보 */}
            <div className="border-t pt-3 mt-3">
              <span className="font-medium block mb-2">
                {t('step2.message') || '문의 내용'}:
              </span>
              <p className="text-muted-foreground whitespace-pre-wrap">
                {formData.message}
              </p>
            </div>
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="rounded-lg bg-secondary/10 p-4">
          <p className="text-sm text-muted-foreground">
            {t('step3.disclaimer') ||
              '제출하신 문의사항은 영업일 기준 1-2일 내에 답변드리겠습니다. 감사합니다.'}
          </p>
        </div>
      </div>

      {/* 이전/제출 버튼 */}
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
        <Button
          type="button"
          onClick={onSubmit}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {t('submit') || '제출하기'}
        </Button>
      </div>
    </>
  )
}
