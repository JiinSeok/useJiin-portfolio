import { VncSession } from '@/types/aiAgentTypes'
import { MfaType, SocialProvider } from '@/types/userTypes'

export const SERVICE_COLORS: Record<string, string> = {
  SLACK: '#8884d8', // 보라색
  GITHUB: '#84d885', // 초록색
  NOTION: '#ff8042', // 주황색
  GOOGLE_WORKSPACE: '#3498DB', // 파란색
}

export interface ServiceInfo {
  name: string
  color: string
}

// 작업 코드 관련 인터페이스 추가
export interface OperationCode {
  code: string
  description: string
}

export interface OperationCodeMap {
  BILLING: OperationCode[]
  USAGE: OperationCode[]
}

export interface App {
  id: number
  service: string
  description: string
  logo_url: string
  enable: boolean
  needs_organization: boolean
  created_at: string
  updated_at?: string
}

export interface AddAppFormProps {
  onSubmit: (formData: {
    service: string
    description: string
    logo_url: string
    enable: boolean
    needs_organization: boolean
  }) => Promise<void>
}

export interface AppListProps {
  apps: App[]
  loading: boolean
  onToggleStatus: (id: number) => void
}

export interface AppStatsProps {
  apps: App[]
}

export interface AppToggleProps {
  isEnabled: boolean
  onToggle: () => void
  enabledText?: string
  disabledText?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export interface AppCardProps {
  app: App
  userApp: UserApp | undefined
  onInstall: (app: App) => void
  onConfigure: (app: App, userAppId: number) => void
  onUninstall: (userAppId: number) => void
}

type AppFilterType = 'all' | 'installed' | 'available'

export interface AppFilterProps {
  searchTerm: string
  filterType: AppFilterType
  onSearchChange: (value: string) => void
  onFilterChange: (type: AppFilterType) => void
}

export interface UserApp {
  id: number
  app_id: number
  app_service: string
  app_description: string
  app_logo_url: string
  organization: string
  created_at: string
  is_connected: boolean
  last_sync_at: string | null
  enable: boolean
  entry_url: string
  account?: {
    email: string
    password: string
    social_provider: SocialProvider
    mfa: MfaType
    mfa_secret: string
  }
}

export interface UserAppsProps {
  activeSession: VncSession | null
  disabled: boolean
}

export interface UpdateUserAppDto {
  account_id?: number
  organization?: string
  enable?: boolean
}
