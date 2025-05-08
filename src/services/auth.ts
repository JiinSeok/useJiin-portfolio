import { fetchWithAuth } from '@/lib/utils/fetchWithAuth'
import { OauthSignInRequest, TokenResponse } from '@/types/userTypes'
import { Session } from 'next-auth'

export async function oauthSignIn(
  request: OauthSignInRequest,
): Promise<TokenResponse> {
  const response = await fetch(
    `${process.env.NEXCA_API_URL}/api/v1/users/sign-in`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    },
  )

  if (!response.ok) {
    throw new Error(`Sign In failed: ${response.status}`)
  }

  return response.json()
}

// 로그아웃 함수
export const signOut = async (
  session: Session | null,
  refreshCallback: () => Promise<Session | null>,
): Promise<boolean> => {
  try {
    if (session?.accessToken) {
      // 서버에 로그아웃 요청 (리프레시 토큰 무효화)
      await fetchWithAuth(
        `${process.env.NEXCA_API_URL}/api/v1/users/sign-out`,
        { method: 'POST' },
        session,
        refreshCallback,
      )
    }

    return true
  } catch (error) {
    console.error('Logout error:', error)
    return false
  }
}
