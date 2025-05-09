'use client'

import handleError from '@/lib/utils/errorHandler'
import { ComponentProps } from '@/types/types'
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

// 필요한 경우 스토리지 퍼시스터 및 캐시 지속성을 위한 임포트
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
// import { persistQueryClient } from '@tanstack/react-query-persist-client'

/** * React Query Provider 컴포넌트
 * - 에러 처리: API 호출 중 발생하는 에러를 handleError 함수로 처리
 * - 캐시 설정: 기본 staleTime은 1분으로 설정
 * - 재시도 정책: 기본적으로 재시도하지 않음
 * - 성공 알림: 뮤테이션 성공 시 토스트 메시지 표시
 */
export default function ReactQueryProvider({ children }: ComponentProps) {
  const [queryClient] = useState(() => {
    const initialQueryClient = new QueryClient({
      // 클라이언트 사이드 마운트될 때만 생성
      queryCache: new QueryCache({
        onError: (error) => handleError(error),
      }),
      mutationCache: new MutationCache({
        onError: (error) => handleError(error),
      }),
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 리페치 비활성화
          retry: false, // 실패 시 재시도 비활성화
          staleTime: 60 * 1000, // 데이터 신선도 유지 시간: 1분
          gcTime: 60 * 1000, // 가비지 컬렉션 시간: 1분
        },
        mutations: {
          onSuccess: () => {
            toast.success('완료되었습니다.', {})
          },
        },
      },
    })

    // 초기 쿼리 프리패치
    // initialQueryClient
    //   .prefetchQuery<User>({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //       const res = await api.get('/users/me')
    //       return res.data
    //     },
    //     retry: 1, // Retry at once if the request fails
    //     staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    //   })
    //   .then()
    return initialQueryClient
  })

  /**
   * 로컬 스토리지 캐시 지속성 및 탭 간 동기화 설정
   *
   * 필요한 경우 아래 주석을 해제하여 사용할 수 있습니다:
   * - 로컬 스토리지에 쿼리 결과 캐싱 (24시간 유지)
   * - 여러 탭 간의 캐시 동기화
   *
   * 현재 프로젝트에서는 이 기능이 비활성화되어 있습니다.
   * 활성화가 필요한 경우 주석을 해제하고 관련 패키지를 설치하세요:
   * npm install @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
   */
  // if (typeof window !== 'undefined') {
  //   // 로컬 스토리지에 쿼리 결과 캐싱
  //   persistQueryClient({
  //     queryClient: defaultQueryClient,
  //     persister: createSyncStoragePersister({
  //       storage: window.localStorage,
  //       key: 'nexca-query-cache',
  //     }),
  //     maxAge: 1000 * 60 * 60 * 24, // 캐시 유지 시간: 24시간
  //   })
  //
  //   // 탭 간 캐시 동기화 설정
  //   const broadcastChannel = new BroadcastChannel('query-cache-sync')
  //   broadcastChannel.onmessage = (event) => {
  //     if (event.data === 'invalidate-cache') {
  //       defaultQueryClient.invalidateQueries() // 캐시 무효화하여 새 데이터 가져오기
  //     }
  //   }
  //
  //   // 캐시가 업데이트될 때마다 다른 탭에 알림
  //   defaultQueryClient.getQueryCache().subscribe((event) => {
  //     if (event?.query.getObserversCount() === 0 && event.type === 'updated') {
  //       broadcastChannel.postMessage('invalidate-cache')
  //     }
  //   })
  // }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
