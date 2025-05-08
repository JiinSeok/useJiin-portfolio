import { refreshAccessToken } from '@/lib/utils/fetchWithAuth'
import { oauthSignIn } from '@/services/auth'
import { ServerAccount } from '@/types/userTypes'
import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // next-auth 로그인
    async signIn({ user, account }) {
      if (account && user) {
        try {
          // nexca 소셜 로그인에 필요한 정보
          const response = await oauthSignIn({
            provider: account.provider,
            provider_id: account.providerAccountId,
            access_token: account.access_token,
            email: user.email,
            name: user.name,
            image: user.image,
          })

          // nexca 소셜 로그인에 사용한 정보 저장
          const serverAccount = account as ServerAccount

          // nexca 서버에서 받은 토큰 저장
          serverAccount.server_access_token = response.access_token
          serverAccount.server_refresh_token = response.refresh_token
          serverAccount.role = response.role

          return true
        } catch (error) {
          console.error('Social sign-in error:', error)
          return false
        }
      }
      // account && user 정보가 없으면 false를 반환
      return false
    },

    async jwt({ token, user, account, trigger }) {
      // 초기 로그인 시 토큰 정보 저장

      // - "signIn": 사용자가 처음 로그인할 때 발생
      // - "update": 세션 업데이트가 요청될 때 발생 (예: session.update() 호출 시)
      // - "signOut": 로그아웃 시 발생
      if (trigger === 'signIn' && account && user) {
        const serverAccount = account as ServerAccount

        const result: JWT = {
          ...token,
          accessToken: serverAccount.server_access_token,
          refreshToken: serverAccount.server_refresh_token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: serverAccount.role,
          },
        }

        return result
      }

      // update 트리거로 호출된 경우 (401 에러로 인한 갱신 요청)
      if (trigger === 'update' && token.refreshToken) {
        return await refreshAccessToken(token)
      }

      return token
    },

    // next-auth 세션에 토큰 정보 추가
    async session({ session, token }) {
      session.user.id = token.user?.id || token.sub || ''
      session.user.role = token.user?.role
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.error = token.error

      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
}
