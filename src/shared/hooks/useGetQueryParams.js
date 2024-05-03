import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useGetQueryParams = (callback) => {
  const location = useLocation()
  const [queryParams, setQueryParams] = useState({})

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const CQueryParams = Object.fromEntries(searchParams.entries())
    setQueryParams(CQueryParams)
    callback && callback(CQueryParams)
  }, [location])

  return queryParams
}
