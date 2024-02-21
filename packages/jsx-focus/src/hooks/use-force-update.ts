import { useCallback, useState } from 'react'

type Empty = Record<string, never>

const useForceUpdate = () => {
  const [, dispatch] = useState<Empty>(Object.create(null))
  return useCallback(() => {
    dispatch(Object.create(null))
  }, [])
}

export default useForceUpdate
