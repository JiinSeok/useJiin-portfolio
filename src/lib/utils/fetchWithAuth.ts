import { ErrorResponse } from '@/types/responseTypes'
import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    // 백엔드 서버에 토큰 갱신 요청
    // @TODO : 토큰 갱신 요청 URL을 NEXT API URL로 변경해야 함
    const response = await fetch(
      `${process.env.NEXCA_API_URL}/api/v1/users/refresh-token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: token.refreshToken,
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      // 에러 응답 처리
      if (response.status === 401) {
        console.error('토큰 갱신 실패: 리프레시 토큰 만료 또는 유효하지 않음')
        return { ...token, error: 'RefreshTokenExpired' }
      }

      throw new Error('토큰 갱신 실패')
    }

    // 갱신된 토큰 정보로 업데이트
    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token || token.refreshToken,
      error: undefined,
    }
  } catch (error) {
    console.error('토큰 갱신 중 오류 발생:', error)
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

// 토큰 갱신 상태 관리
let isRefreshing = false

let failedQueue: Array<{
  resolve: (value: Response) => void
  reject: (reason?: unknown) => void
}> = []

const processQueue = (error: unknown | null): void => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      // 토큰이 갱신되었으므로 대기열의 resolve 함수들이 새 요청을 트리거
    }
  })

  failedQueue = []
}

// API 호출 함수 (401 에러 처리 및 토큰 갱신 포함)
export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {},
  session: Session | null,
  refreshCallback: () => Promise<Session | null>,
): Promise<Response> => {
  if (!session?.accessToken) {
    throw new Error('No access token available')
  }

  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${session.accessToken}`,
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(url, fetchOptions)

    // 정상 응답이면 그대로 반환
    if (response.ok) {
      return response
    }

    // 401 에러 처리
    if (response.status === 401) {
      // 에러 응답 본문 확인
      let errorData: ErrorResponse

      try {
        errorData = await response.clone().json()
      } catch {
        // 변수 선언 없이 catch 블록 사용
        errorData = { code: 'UNKNOWN', message: '알 수 없는 인증 오류' }
      }

      // 토큰 만료 에러인 경우만 토큰 갱신 시도
      if (errorData.code === 'TOKEN_EXPIRED') {
        if (isRefreshing) {
          // 이미 토큰 갱신 중이면 대기열에 추가
          return new Promise<Response>((resolve, reject) => {
            failedQueue.push({
              resolve: () => {
                // 토큰이 갱신된 후 새 요청을 다시 보내기
                fetchWithAuth(url, options, session, refreshCallback)
                  .then(resolve)
                  .catch(reject)
              },
              reject,
            })
          })
        }

        isRefreshing = true

        try {
          const newSession = await refreshCallback()

          if (!newSession?.accessToken) {
            throw new Error('Failed to refresh token')
          }

          // 세션 업데이트 후 새 토큰으로 재요청
          const newOptions: RequestInit = {
            ...options,
            headers: {
              ...options.headers,
              Authorization: `Bearer ${newSession.accessToken}`,
              'Content-Type': 'application/json',
            },
          }

          const newResponse = await fetch(url, newOptions)

          isRefreshing = false
          processQueue(null)

          return newResponse
        } catch (error) {
          isRefreshing = false
          processQueue(error)
          throw new Error(`Token refresh failed: ${errorData.message}`)
        }
      } else {
        // 다른 인증 에러는 처리를 위해 그대로 반환
        console.error(
          `Authentication error: ${errorData.code} - ${errorData.message}`,
        )
        return response
      }
    }

    return response
  } catch (error) {
    console.error('API call error:', error)
    throw error
  }
}
