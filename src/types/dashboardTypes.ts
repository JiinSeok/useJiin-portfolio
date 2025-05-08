import { ServiceInfo } from '@/types/appTypes'

export interface ForecastRecord {
  id: number
  created_at: string
  user_id: number
  app_id: number
  base_month: string
  forecast_date: string
  amount: number
  currency: string
  description: string
  daysLeft?: number
}

export interface Billing {
  id: number
  name: string
  color: string
  amount: number // 서비스별 예상 결제 금액
  billingDate: string // 결제일 (YYYY-MM-DD)
  description: string // 설명
}

export interface BillingMetrics {
  totalUpcoming: number // 예정된 총 결제 금액
  nextPayment: {
    date: string // 다음 결제일
    amount: number // 다음 결제 금액
    service: string // 서비스 이름
  } | null
  serviceBreakdown: Billing[] // 서비스별 결제 내역
}

export interface BillingChartItem {
  date: string // YYYY-MM-DD
  displayDate: string // MM-DD (월-일)
  isToday: boolean // 오늘 날짜 여부
  event?: string // 결제일 등 이벤트 표시
  total: number // 총 비용
  [key: string]: string | number | boolean | undefined // 서비스별 비용
}

export interface BillingChartProps {
  data: BillingChartItem[]
  serviceInfo: {
    name: string
    color: string
  }[]
  className?: string
}

export interface DailyCost {
  date: string
  displayDate: string
  dailyCost: number
  hasData: boolean
}

export interface DailyCostItem {
  date: string
  displayDate: string
  total: number
  isToday: boolean
  event?: string
  AWS: number
  Slack: number
  Notion: number
  'Google Workspace': number
  [key: string]: string | number | boolean | undefined // 인덱스 시그니처 추가하여 BillingChartItem과 호환되도록 함
}

export interface OverviewProps {
  billingData: DailyCostItem[]
}

export interface DailyCostChartProps {
  data: DailyCostItem[]
  serviceInfo: ServiceInfo[]
  className?: string
}

export interface EnhancedForecastRecord extends ForecastRecord {
  app_name?: string
  app_color?: string
  app_logo_url?: string | null
  app_description?: string
  daysLeft?: number
}

export interface PaymentScheduleProps {
  forecastRecords: EnhancedForecastRecord[]
}

export type NotificationPriority = 'LOW' | 'MEDIUM' | 'HIGH'

export interface Notification {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  priority: NotificationPriority
  is_new: boolean
  link?: string
}

export interface NotificationPanelProps {
  notifications: Notification[]
  onUpdateNotifications: (updatedNotifications: Notification[]) => void
}
