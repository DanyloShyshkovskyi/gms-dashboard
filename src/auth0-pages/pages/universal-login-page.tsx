import { Wrapper } from 'auth0-pages/components/wrapper'
import { IMode, useWebAuth } from 'auth0-pages/provider'
import PasswordRecovery from 'auth0-pages/widgets/reset-password'
import SignIn from 'auth0-pages/widgets/sign-in'
import SignUp from 'auth0-pages/widgets/sign-up'

import { useDelayChange } from 'shared/hooks'

const AuthComponents: Record<
  IMode,
  { component: React.ComponentType; className: string }
> = {
  'sign-up': {
    component: SignUp,
    className: 'min-h-[700px]',
  },
  'sign-in': {
    component: SignIn,
    className: 'min-h-[700px]',
  },
  'reset-password': {
    component: PasswordRecovery,
    className: 'min-h-[700px]',
  },
}

const Switcher = ({ mode }: { mode: IMode }) => {
  const delayedMode = useDelayChange(mode)

  if (!delayedMode) {
    return null
  }

  const AuthComponent = AuthComponents[delayedMode].component

  if (!AuthComponent) {
    return null
  }

  return <AuthComponent />
}

export const UniversalLoginPage = () => {
  const { mode } = useWebAuth()

  return (
    <Wrapper className={AuthComponents[mode].className}>
      <Switcher mode={mode} />
    </Wrapper>
  )
}
