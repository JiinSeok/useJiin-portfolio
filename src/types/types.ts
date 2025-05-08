import { ReactNode } from 'react'

export interface ClickProps {
  onClick?: () => void
}

export interface ComponentProps {
  children?: ReactNode
  className?: string
}

export interface ChildrenProps {
  children: ReactNode
}

export type LayoutProps = Readonly<ChildrenProps>

export interface MenuItem {
  id: string
  name: string
  icon: ReactNode
  path: string
}

export interface BaseDashboardLayoutProps extends LayoutProps {
  menuItems: MenuItem[]
  title?: string
  logoPath?: string
  logoAlt?: string
}

export interface CustomMessage {
  title?: string
  message?: string
}

export interface MarkdownRendererProps {
  content: string
  className?: string
}
