import { App, UpdateUserAppDto, UserApp } from '@/types/appTypes'

// 모든 앱 목록 가져오기
export const getApps = async (): Promise<App[]> => {
  const response = await fetch('/api/apps', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '앱 목록을 가져오는데 실패했습니다')
  }

  const data = await response.json()
  return data.apps || []
}

// 사용자 앱 목록 가져오기
export const getUserApps = async (): Promise<UserApp[]> => {
  const response = await fetch('/api/users/apps', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(
      errorData.error || '사용자 앱 목록을 가져오는데 실패했습니다',
    )
  }

  const data = await response.json()
  return data.user_apps || []
}

// 특정 사용자 앱 정보 가져오기
export const getUserAppById = async (userAppId: number): Promise<UserApp> => {
  const response = await fetch(`/api/users/apps/${userAppId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '앱 정보를 가져오는데 실패했습니다')
  }

  return response.json()
}

// 사용자 앱 업데이트
export const updateUserApp = async (
  userAppId: number,
  updateData: UpdateUserAppDto,
): Promise<UserApp> => {
  const response = await fetch(`/api/users/apps/${userAppId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '앱 업데이트에 실패했습니다')
  }

  return response.json()
}

// 앱 설치 (인스턴스 생성)
export const installApp = async (
  appId: number,
  userData: Partial<UpdateUserAppDto>,
): Promise<UserApp> => {
  const response = await fetch('/api/users/apps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      app_id: appId,
      ...userData,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '앱 설치에 실패했습니다')
  }

  return response.json()
}

// 앱 제거
export const uninstallApp = async (userAppId: number): Promise<void> => {
  const response = await fetch(`/api/users/apps/${userAppId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || '앱 제거에 실패했습니다')
  }
}
