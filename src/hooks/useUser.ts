'use client'

import { AUTH_USER_ERROR_MESSAGE } from '@/constants/messages'
import { api } from '@/lib/config/apiClient'
import handleError from '@/lib/utils/errorHandler'
import { User } from '@/types/userTypes'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

/**
 * React Query hook to fetch the current user's data
 * Uses the prefetched data from ReactQueryProvider if available
 * @returns The current user's data and query status
 */
export function useUser() {
  const queryClient = useQueryClient()

  // Get the prefetched data if available
  const prefetchedUser = queryClient.getQueryData<User>(['user'])

  const { data, isLoading, error, refetch } = useQuery<User, AxiosError>({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const res = await api.get('/users/me')
        return res.data
      } catch (error) {
        if (error instanceof AxiosError) {
          handleError(error, AUTH_USER_ERROR_MESSAGE)
        }
      }
    },
    initialData: prefetchedUser,
    gcTime: 5 * 60 * 1000,
  })

  return {
    data,
    isLoading,
    error,
    refetch,
  } as const
}
