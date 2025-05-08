export interface TestQuestion {
  content: string
  order: number
}

export interface TestAnswer {
  content: string
  order: number
}

export interface TestResult {
  request_id: string
  questions: TestQuestion[]
  answers: TestAnswer[]
}

export interface PromptListProps {
  appId: number
}

export interface PromptTestModalProps {
  appId: number
  operation: string
  isOpen: boolean
  onClose: () => void
}

export interface AppPrompt {
  id: number
  app_id: number
  order: number
  operation: string
  description: string
  createdAt: string
  prompt?: string // 상세 조회 시에만 포함됨
}

export type AppPromptInput = Omit<AppPrompt, 'id' | 'app_id' | 'createdAt'>

export interface PromptFormProps {
  initialData?: AppPrompt
  appId: number
  onSubmit: (data: AppPromptInput) => Promise<void>
  onCancel: () => void
  isSubmitting: boolean
}

export interface PromptViewerProps {
  prompt: AppPrompt
  onClose: () => void
  onEdit: () => void
}

export interface SortablePromptCardProps {
  prompt: AppPrompt
  onView: (prompt: AppPrompt) => void
  onEdit: (prompt: AppPrompt) => void
  onDelete: (promptId: number) => void
}
