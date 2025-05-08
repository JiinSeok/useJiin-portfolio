'use client'

/**
 * Form 컴포넌트
 *
 * 재사용 가능한 폼 컴포넌트로, react-hook-form을 기반으로 구현되었습니다.
 * 다양한 하위 컴포넌트(Field, Input, Legend 등)를 제공하여 일관된 폼 UI를 구성할 수 있습니다.
 * Context API를 사용하여 폼 상태와 메서드를 하위 컴포넌트에 전달합니다.
 */
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/classnames'
import {
  FieldProps,
  FormContextProps,
  FormProps,
  FormResetButtonProps,
  FormSubmitButtonProps,
  InputProps,
  LegendProps,
  TextareaProps,
} from '@/types/formTypes'
import { ComponentProps } from '@/types/types'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  useForm,
} from 'react-hook-form'

// react-hook-form import 전달
const FormContext = createContext<FormContextProps | undefined>(undefined)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useContext를 FormProvider 안에서 사용하세요.')
  }
  return context
}

// Field에서 label의 for, input의 id 매칭하고 전달
const FieldContext = createContext<
  | {
      forId: string
    }
  | undefined
>(undefined)

const useFieldContext = () => {
  const context = useContext(FieldContext)
  if (!context) {
    throw new Error('useContext를 FieldProvider 안에서 사용하세요.')
  }
  return context
}

/**
 * @param formId 필수
 * @param onSubmit 필수
 * @param children
 * @param className
 * @param defaultValues { 'name' : value }의 형태로 각 인풋의 초기값 설정
 */
export default function Form({
  children,
  className,
  formId,
  onSubmit,
  defaultValues = {},
  ...rest
}: FormProps) {
  const FormClass = cn('flex flex-col flex-wrap', className)
  const {
    watch,
    getValues,
    getFieldState,
    setValue,
    formState: { errors, isValid, isSubmitting },
    reset,
    handleSubmit,
    register,
    setFocus,
  } = useForm({ mode: 'onChange', defaultValues })

  return (
    <FormContext.Provider
      value={{
        formId,
        onSubmit,
        watch,
        getValues,
        getFieldState,
        setValue,
        errors,
        isValid,
        isSubmitting,
        reset,
        register,
        setFocus,
      }}
    >
      <form
        id={formId}
        onSubmit={handleSubmit(onSubmit)}
        className={FormClass}
        {...rest}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}

/**
 * 폼 제목 컴포넌트
 * 폼의 제목을 표시하는 컴포넌트입니다.
 */
function Title({ children, className }: ComponentProps) {
  const FormTitleClass = cn('self-center text-3xl font-semibold', className)
  return <header className={FormTitleClass}>{children}</header>
}

/**
 * 폼 초기화 버튼 컴포넌트
 * 폼의 모든 필드를 초기 상태로 리셋하는 버튼 컴포넌트입니다.
 */
function FormResetButton({
  children,
  className,
  onClick,
  ...rest
}: FormResetButtonProps) {
  const { reset } = useFormContext()
  return (
    <Button
      type={'reset'}
      className={className}
      onClick={() => {
        if (typeof onClick === 'function') onClick()
        reset()
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

/**
 * 폼 제출 버튼 컴포넌트
 * 폼 데이터를 제출하는 버튼 컴포넌트입니다.
 */
function FormSubmitButton({ children, color }: FormSubmitButtonProps) {
  return (
    <Button type={'submit'} color={color} size={'lg'}>
      {children}
    </Button>
  )
}

/**
 * 폼 필드셋 컴포넌트
 * 관련된 폼 필드들을 그룹화하는 컴포넌트입니다.
 */
function Fieldset({ children, className }: ComponentProps) {
  const fieldsetClass = cn('flex flex-col flex-wrap gap-4 py-4', className)
  return <fieldset className={fieldsetClass}>{children}</fieldset>
}

function Legend({ children, className, required }: LegendProps) {
  const legendClass = cn(
    'flex flex-row flex-wrap justify-start items-center gap-1 text-xl font-normal text-gray-800',
    className,
  )
  return (
    <p className={legendClass}>
      {children}
      {required && (
        <span className="text-blue-500 my-auto leading-none pt-1 text-md">
          *
        </span>
      )}
    </p>
  )
}

/**
 * 폼 필드 컴포넌트
 *
 * 라벨과 입력 요소를 포함하는 폼 필드 컴포넌트입니다.
 * 고유한 ID를 생성하여 라벨과 입력 요소를 연결합니다.
 *
 * @param children - 필드 내부에 표시될 컴포넌트들
 * @param className - 추가 CSS 클래스
 * @param isInline - true일 경우 라벨과 입력 요소를 가로로 배치
 * @param htmlFor - 라벨과 입력 요소를 연결할 ID (지정하지 않으면 자동 생성)
 * @param hidden - true일 경우 필드를 화면에서 숨김
 */
function Field({
  children,
  className,
  htmlFor = '',
  isInline = false,
  hidden,
}: FieldProps) {
  const [fieldId, setFieldId] = useState<string>(htmlFor || '')
  const { formId } = useFormContext()
  const fieldClass = cn(
    'flex gap-4',
    {
      'flex-row': isInline,
      'flex-col': !isInline,
    },
    className,
  )

  // Function to generate a unique ID when crypto.randomUUID() is not available
  const generateUniqueId = () => {
    // Check if crypto and randomUUID are available
    if (
      typeof crypto !== 'undefined' &&
      typeof crypto.randomUUID === 'function'
    ) {
      return crypto.randomUUID()
    }

    // Fallback implementation for environments where crypto.randomUUID() is not available
    return (
      'id-' +
      Math.random().toString(36).substring(2, 11) +
      '-' +
      Date.now().toString(36)
    )
  }

  useEffect(() => {
    if (!htmlFor) {
      const generatedId = `${formId}-${generateUniqueId()}`
      setFieldId(generatedId)
    }
  }, [formId, htmlFor])

  return (
    <FieldContext.Provider value={{ forId: fieldId }}>
      <label className={fieldClass} htmlFor={fieldId} hidden={hidden}>
        {children}
      </label>
    </FieldContext.Provider>
  )
}

/**
 * 라벨 컴포넌트
 * 폼 필드의 라벨을 표시하는 컴포넌트입니다.
 */
function Label({ children, className }: ComponentProps) {
  const LabelClass = cn('text-xl font-normal', className)
  return <p className={LabelClass}>{children}</p>
}

/**
 * 래퍼 컴포넌트
 * 폼 요소를 감싸는 컨테이너 컴포넌트입니다.
 */
function Wrapper({ children, className }: ComponentProps) {
  const wrapperClass = cn('relative block p-2', className)
  return <div className={wrapperClass}>{children}</div>
}

/**
 * 단위 표시 컴포넌트
 * 입력 필드 옆에 단위(원, kg 등)를 표시하는 컴포넌트입니다.
 */
function Unit({ unit }: { unit: string }) {
  return (
    <span className="absolute top-8 right-8 z-10 transform -translate-y-1/2 block text-xl font-normal">
      {unit}
    </span>
  )
}

/**
 * 에러 메시지 컴포넌트
 * 폼 유효성 검사 오류를 표시하는 컴포넌트입니다.
 */
function ErrorMessage({
  error,
}: {
  error: FieldError | Merge<FieldErrorsImpl, any> | undefined
}) {
  if (!error) return null
  return (
    <p className="text-red-500">
      {typeof error === 'object' &&
        'message' in error &&
        (error.message as string)}
    </p>
  )
}

/**
 * 입력 필드 컴포넌트
 *
 * 다양한 타입의 입력 필드를 제공하는 컴포넌트입니다.
 * react-hook-form과 통합되어 유효성 검사 및 상태 관리를 지원합니다.
 *
 * @param name - 입력 필드의 이름 (필수)
 * @param className - 추가 CSS 클래스
 * @param type - 입력 필드 타입 (text, password, email, number 등)
 * @param required - 필수 입력 여부
 * @param minLength - 최소 입력 길이
 * @param maxLength - 최대 입력 길이
 * @param hookFormPattern - 유효성 검사를 위한 정규 표현식
 * @param validate - 커스텀 유효성 검사 함수
 */
function Input({
  className,
  type = 'text',
  name,
  required = false,
  minLength = 1,
  maxLength = 200,
  hookFormPattern,
  validate,
  ...rest
}: InputProps) {
  const rules: RegisterOptions = {
    required,
    minLength,
    maxLength,
    pattern: hookFormPattern || undefined,
    validate,
  }
  const { register, errors, watch } = useFormContext()
  const { forId } = useFieldContext()
  const inputClass = cn(
    'appearance-none rounded-lg border border-gray-200 w-full min-h-16 max-w-full max-h-full bg-transparent text-gray-800 text-xl font-normal focus:border-orange-500 focus:caret-orange-500 px-3 py-2',
    className,
  )

  // 비밀번호 입력 필드 처리
  const [visibility] = useState<boolean>(true)
  const inputType =
    type === 'password' ? (visibility ? 'password' : 'text') : type

  // confirm 인풋일 때 일치 유효성 검사
  const isConfirm = name.startsWith('confirm')
  const confirmInputName = name.replace('confirm', '').trim().toLowerCase()
  const confirmInputValue = watch(confirmInputName)

  if (isConfirm) {
    rules.validate = (value) => value === confirmInputValue
  }

  return (
    <>
      <input
        {...register(name, rules)}
        type={inputType}
        id={forId}
        className={inputClass}
        {...rest}
      />
      <ErrorMessage error={errors?.[name]} />
    </>
  )
}

/**
 * 텍스트 영역 컴포넌트
 *
 * 여러 줄의 텍스트를 입력받는 컴포넌트입니다.
 * react-hook-form과 통합되어 유효성 검사 및 상태 관리를 지원합니다.
 *
 * @param name - 입력 필드의 이름 (필수)
 * @param className - 추가 CSS 클래스
 * @param required - 필수 입력 여부
 * @param minLength - 최소 입력 길이
 * @param maxLength - 최대 입력 길이
 * @param validate - 커스텀 유효성 검사 함수
 */
function Textarea({
  className,
  name,
  required = false,
  minLength = 1,
  maxLength = 200,
  validate,
  ...rest
}: TextareaProps) {
  const rules: RegisterOptions = {
    required,
    validate,
    minLength,
    maxLength,
  }
  const { register, errors } = useFormContext()
  const { forId } = useFieldContext()
  const textareaClass = cn(
    'appearance-none rounded-lg border border-gray-200 w-full min-h-16 max-w-full max-h-full bg-transparent text-gray-800 text-xl font-normal focus:border-orange-500 focus:caret-orange-500 resize-none px-3 py-2',
    className,
  )

  return (
    <>
      <textarea
        {...register(name, rules)}
        className={textareaClass}
        id={forId}
        rows={4}
        {...rest}
      />
      <ErrorMessage error={errors?.[name]} />
    </>
  )
}

Form.Title = Title
Form.ResetButton = FormResetButton
Form.SubmitButton = FormSubmitButton

Form.Fieldset = Fieldset
Form.Legend = Legend

Form.Field = Field
Form.Label = Label
Form.Wrapper = Wrapper
Form.Unit = Unit
Form.Error = ErrorMessage

Form.Input = Input
Form.Textarea = Textarea
