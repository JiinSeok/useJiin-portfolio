import {
  VncSession,
  VncSessionNavigateResponse,
  VncSessionsResponse,
} from '@/types/aiAgentTypes'
import { UserApp } from '@/types/appTypes'

/**
 * 활성 VNC 세션 목록을 가져옵니다.
 */
export const getVncSessions = async (): Promise<VncSession[]> => {
  try {
    const response = await fetch('/api/vnc-sessions')

    if (!response.ok) {
      throw new Error(`세션 조회 오류: ${response.status}`)
    }

    const data: VncSessionsResponse = await response.json()
    return data.vnc_sessions
  } catch (error) {
    console.error('VNC 세션 조회 실패:', error)
    throw error
  }
}

/**
 * 새 VNC 세션을 생성합니다.
 */
export const createVncSession = async (): Promise<VncSession> => {
  try {
    const response = await fetch('/api/vnc-sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`세션 생성 오류: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('VNC 세션 생성 실패:', error)
    throw error
  }
}

/**
 * 특정 VNC 세션의 상태를 확인합니다.
 */
export const getVncSessionStatus = async (
  sessionId: number,
): Promise<VncSession> => {
  try {
    const response = await fetch(`/api/vnc-sessions/${sessionId}`)

    if (!response.ok) {
      throw new Error(`세션 상태 조회 오류: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`세션 ID ${sessionId}의 상태 조회 실패:`, error)
    throw error
  }
}

/**
 * VNC 세션을 종료합니다.
 */
export const terminateVncSession = async (sessionId: number): Promise<void> => {
  try {
    const response = await fetch(`/api/vnc-sessions/${sessionId}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`세션 종료 오류: ${response.status}`)
    }
  } catch (error) {
    console.error(`세션 ID ${sessionId} 종료 실패:`, error)
    throw error
  }
}

/**
 * VNC 세션에서 특정 사용자 앱으로 이동합니다.
 */
export const navigateToUserApp = async (
  sessionId: number,
  userAppId: number,
): Promise<VncSessionNavigateResponse> => {
  try {
    const response = await fetch(`/api/vnc-sessions/${sessionId}/navigate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_app_id: userAppId }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || '앱 페이지로 이동하는데 실패했습니다')
    }

    return await response.json()
  } catch (error) {
    console.error(
      `세션 ID ${sessionId}에서 앱 ID ${userAppId}로 이동 실패:`,
      error,
    )
    throw error
  }
}

/**
 * 사용자 앱 목록을 가져옵니다.
 */
export const getUserApps = async (): Promise<UserApp[]> => {
  try {
    const response = await fetch('/api/users/apps')

    if (!response.ok) {
      throw new Error(`앱 목록 조회 오류: ${response.status}`)
    }

    const data = await response.json()
    // user_apps 키가 있으면 그 값을 반환, 없으면 빈 배열
    return data.user_apps || []
  } catch (error) {
    console.error('사용자 앱 목록 조회 실패:', error)
    throw error
  }
}
