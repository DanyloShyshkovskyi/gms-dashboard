import { Wrapper } from 'auth0-pages/components/wrapper'
import { IMode, useWebAuth } from 'auth0-pages/provider'
import PasswordRecovery from 'auth0-pages/widgets/reset-password'
import SignIn from 'auth0-pages/widgets/sign-in'
import SignUp from 'auth0-pages/widgets/sign-up'

import { useDelayChange } from 'shared/hooks'

const AuthComponents: Record<IMode, React.ComponentType> = {
  'sign-up': SignUp,
  'sign-in': SignIn,
  'reset-password': PasswordRecovery,
}

const Switcher = ({ mode }: { mode: IMode }) => {
  const delayedMode = useDelayChange(mode)

  if (!delayedMode) {
    return null
  }

  const AuthComponent = AuthComponents[delayedMode]

  if (!AuthComponent) {
    return null
  }

  return <AuthComponent />
}

export const UniversalLoginPage = () => {
  const { mode } = useWebAuth()

  return (
    <Wrapper>
      <Switcher mode={mode} />
    </Wrapper>
  )
}
