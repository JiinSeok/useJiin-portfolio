export type VNCStatus = 'CREATING' | 'RUNNING' | 'STOPPING' | 'DONE' | 'ERROR'

export interface VncSession {
  id: number
  user_id: number
  profile_id: string
  status: VNCStatus
  public_ip: string
  dns: string
  password: string
  created_at: string
  expiration_at: string | null
}

export interface VncSessionsResponse {
  vnc_sessions: VncSession[]
}

export interface VncSessionNavigateResponse {
  vnc_session_id: number
}

export interface VncViewerProps {
  url: string
  isConnected: boolean
  isFullscreen: boolean
  remainingTime: number
  onToggleFullscreen: () => void
  onDisconnect: () => void
}

export interface AgentInfoProps {
  session: VncSession | null
  remainingTime: number
}

export interface AgentControlsProps {
  activeSession: VncSession | null
  isConnected: boolean
  isLoading: boolean
  onCreateSession: () => void
  onConnectVnc: (session: VncSession) => void
  onDisconnect: () => void
}
