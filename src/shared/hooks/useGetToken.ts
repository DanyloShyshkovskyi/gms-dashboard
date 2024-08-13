import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { apiInstance } from 'shared/api'
import { REDIRECT_URI, WITHOUT_LOGIN } from 'shared/config'
import { getSearchValue } from 'shared/utils'

const anonymousPaths = ['/terms']

export const useGetToken = () => {
  const {
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
  } = useAuth0()
  const [token, setToken] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<null | any>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setLoading(true)
    if (anonymousPaths.includes(pathname) || WITHOUT_LOGIN) {
      setLoading(false)
      return
    }
    if (isLoading) return
    if (!isAuthenticated) {
      console.log('User is not authenticated!')
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: REDIRECT_URI,
          invitation: getSearchValue('invitation'),
          organization: getSearchValue('organization'),
          organization_name: getSearchValue('organization_name'),
        },
      })
    } else {
      getAccessTokenSilently()
        .then((token) => {
          console.log(`Token successfully fetched! ${token}`)
          apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`
          setToken(token)
        })
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [
    getAccessTokenSilently,
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    pathname,
  ])

  return { token, isLoading: loading, error }
}
