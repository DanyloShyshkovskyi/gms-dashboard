import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useDelayChange } from 'shared/hooks'

import { SVGLoginBg } from './components/svg/login-bg'
import { SVGLogo } from './components/svg/logo'
import { IMode, useWebAuth } from './provider'
import PasswordRecovery from './widgets/reset-password'
import SignIn from './widgets/sign-in'
import SignUp from './widgets/sign-up'

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

export const Content = (): JSX.Element => {
  const { mode } = useWebAuth()
  const [parent] = useAutoAnimate()

  return (
    <div className='relative bg-blue-50'>
      <div className='container flex min-h-screen flex-col justify-center py-10'>
        <div>
          <SVGLoginBg />
          <SVGLogo />
          <div ref={parent} className='relative mt-20 min-h-130 p-1'>
            <Switcher mode={mode} />
          </div>
        </div>
      </div>
    </div>
  )
}
