import { User } from '@/types/userTypes'
import { Session } from 'next-auth'

// 현재 로그인한 사용자 정보 가져오기
export const getCurrentUser = async (
  session: Session | null,
  refreshCallback?: () => Promise<Session | null>,
): Promise<User | null> => {
  try {
    if (!session) {
      return null
    }

    // 내부 API 라우트 호출
    const response = await fetch('/api/users/me')

    if (!response.ok) {
      // 401 에러면 토큰 리프레시 시도
      if (response.status === 401 && refreshCallback) {
        const newSession = await refreshCallback()
        if (newSession) {
          // 새 토큰으로 다시 시도
          const retryResponse = await fetch('/api/users/me')
          if (retryResponse.ok) {
            return await retryResponse.json()
          }
        }
      }
      throw new Error('Failed to fetch user data')
    }

    // API 응답 반환
    return await response.json()
  } catch (error) {
    console.error('Error fetching current user:', error)
    return null
  }
}
