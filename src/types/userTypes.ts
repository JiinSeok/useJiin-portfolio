import { Account as NextAuthAccount } from 'next-auth'

export const UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const

export const UserStatus = {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE',
} as const

export interface TokenResponse {
  access_token: string
  refresh_token: string
  role: string
}

export interface ServerAccount extends NextAuthAccount {
  server_access_token?: string
  server_refresh_token?: string
  role?: string
}

export interface User {
  id: string
  name: string
  email: string
  status: string
  profile_image_url?: string
  role: string
}

export interface UserStatsProps {
  user: User
}

export interface ProfileCardProps {
  user: User
  onLogout: () => Promise<void>
}

export type MfaType = 'NONE' | 'OTP'
export type SocialProvider = 'GOOGLE' | 'GITHUB'

export interface MfaInfoProps {
  account: Account
  onClose: () => void
}

export interface OauthSignInRequest {
  provider: string
  provider_id: string
  access_token: string | undefined
  email?: string | null
  name?: string | null
  image?: string | null
}

export interface AccountFormData {
  description: string
  email: string
  password: string
  social_provider: SocialProvider
  mfa: MfaType
  mfa_qrcode_base64?: string
}

export interface Account {
  id: number
  created_at: string
  updated_at: string
  description: string
  email: string
  password: string
  social_provider: SocialProvider
  mfa: MfaType
  mfa_secret: string
  mfa_qrcode_base64?: string
}

export interface AccountFormProps {
  initialData?: Account
  isLoading: boolean
  onSubmit: (data: AccountFormData) => void
  onCancel: () => void
}

export interface AccountListProps {
  accounts: Account[]
  isLoading: boolean
  onEditAccount: (account: Account) => void
  onDeleteAccount: (accountId: number) => void
  onViewMfa: (account: Account) => void
}
