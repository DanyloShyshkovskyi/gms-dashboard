import { useEffect, useRef, useState } from 'react'

export const useDelayChange = <T>(state: T, delay = 280): T | null => {
  const [value, setValue] = useState<T | null>(state)
  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setValue(null)

    timeout.current = setTimeout(() => {
      setValue(state)
    }, delay)

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [state, delay])

  return value
}
