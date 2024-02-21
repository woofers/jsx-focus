import { useMemo } from 'react'
import { setRef } from '../utils'

const useForkRef = <InstanceA, InstanceB>(
  refA: React.Ref<InstanceA> | null | undefined,
  refB: React.Ref<InstanceB> | null | undefined
): React.Ref<InstanceA & InstanceB> | null => {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }
    return refValue => {
      setRef(refA, refValue)
      setRef(refB, refValue)
    }
  }, [refA, refB])
}

export default useForkRef
