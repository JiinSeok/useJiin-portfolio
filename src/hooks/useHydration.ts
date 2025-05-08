import { useEffect, useState } from 'react'

export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false)
  // const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}
