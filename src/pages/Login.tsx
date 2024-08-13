import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import {
  LoadingSpinner,
  LoadingSpinnerContainer,
} from 'shared/ui/loading-spinner'

export const Login = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    } else navigate('/dashboard')
  }, [isLoading, isAuthenticated, loginWithRedirect])
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinner size={100} className={'stroke-indigo-800'} />
    </LoadingSpinnerContainer>
  )
}
