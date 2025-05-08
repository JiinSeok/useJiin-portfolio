import { Account } from '@/types/userTypes'

// 계정 목록 가져오기
export const getAccounts = async (): Promise<{ accounts: Account[] }> => {
  const response = await fetch('/api/accounts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '계정 목록을 가져오는데 실패했습니다')
  }

  return response.json()
}

// 단일 계정 가져오기
export const getAccount = async (accountId: number): Promise<Account> => {
  const response = await fetch(`/api/accounts/${accountId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '계정 정보를 가져오는데 실패했습니다')
  }

  return response.json()
}

// 새 계정 생성
export const createAccount = async (
  accountData: Partial<Account>,
): Promise<{ account_id: number }> => {
  const response = await fetch('/api/accounts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '계정 생성에 실패했습니다')
  }

  return response.json()
}

// 계정 업데이트
export const updateAccount = async (
  accountId: number,
  accountData: Partial<Account>,
): Promise<Account> => {
  const response = await fetch(`/api/accounts/${accountId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '계정 업데이트에 실패했습니다')
  }

  return response.json()
}

// 계정 삭제
export const deleteAccount = async (
  accountId: number,
): Promise<{ success: boolean }> => {
  const response = await fetch(`/api/accounts/${accountId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '계정 삭제에 실패했습니다')
  }

  return response.json()
}
