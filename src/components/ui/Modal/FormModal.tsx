'use client'

/**
 * FormModal 컴포넌트
 *
 * 사용자 정보 등록 및 수정을 위한 모달 폼 컴포넌트입니다.
 * Modal 컴포넌트를 기반으로 하며, Form 컴포넌트를 사용하여 폼 기능을 구현합니다.
 * 이름과 조직 이름을 입력받아 처리합니다.
 */
import Form from '@/components/Form/Form'
import { Button } from '@/components/ui/Button'
import Modal, { ModalProps } from '@/components/ui/Modal/Modal'
import { cn } from '@/lib/utils/classnames'
import { FieldValues } from 'react-hook-form'

export default function FormModal({
  isOpen,
  onRequestCloseAction,
}: ModalProps) {
  /**
   * 폼 제출 핸들러
   *
   * 폼 데이터를 처리하고 모달을 닫습니다.
   * @param data - 폼에서 제출된 필드 값들
   */
  const handleSubmit = async (data: FieldValues): Promise<void> => {
    console.log(data)
    onRequestCloseAction()
  }

  return (
    <Modal isOpen={isOpen} onRequestCloseAction={onRequestCloseAction}>
      {/* 닫기 버튼 */}
      <Modal.CloseButton onClick={onRequestCloseAction} />

      {/* 아이콘 영역 */}
      <Modal.Icon>
        <span className="text-3xl text-blue-500">✏️</span>
      </Modal.Icon>

      <Form
        formId={`$Update`}
        onSubmit={handleSubmit}
        className={cn('w-full max-w-md mx-auto')}
      >
        <Modal.Body>
          {/* 폼 내용 영역 */}
          <div className="space-y-6">
            <Modal.Title>서비스 이용 사전 등록</Modal.Title>

            {/* 조직 이름 입력 필드 */}
            <Form.Fieldset className="mb-1">
              <Form.Field>
                <Form.Legend>서비스 이용 조직</Form.Legend>
                <Form.Input
                  name="storeName"
                  type="text"
                  // required
                  placeholder="조직 이름을 입력해 주세요."
                  className="focus:ring-2 focus:ring-blue-200"
                />
              </Form.Field>
            </Form.Fieldset>

            {/* 조직 규모 입력 필드 */}
            <Form.Fieldset className="mb-1">
              <Form.Field>
                <Form.Legend>조직 규모</Form.Legend>
                <Form.Input
                  name="organizationSize"
                  type="text"
                  placeholder="문의하시는 조직의 규모를 입력해 주세요."
                  className="focus:ring-2 focus:ring-blue-200"
                />
              </Form.Field>
            </Form.Fieldset>

            {/* 이메일 입력 필드 */}
            <Form.Fieldset className="mb-1">
              <Form.Field>
                <Form.Legend required>연락 받으실 이메일</Form.Legend>
                <Form.Input
                  name="email"
                  type="email"
                  required
                  placeholder="조직 이메일을 입력해 주세요."
                  className="focus:ring-2 focus:ring-blue-200"
                />
              </Form.Field>
            </Form.Fieldset>
          </div>
        </Modal.Body>

        {/* 버튼 영역 */}
        <Modal.Footer>
          <Form.SubmitButton>등록요청</Form.SubmitButton>
          <Button
            className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
            type="button"
            variant="outline"
            size="lg"
            onClick={onRequestCloseAction}
          >
            취소
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
