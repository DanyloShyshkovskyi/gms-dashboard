import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Suspense, lazy } from 'react'

import { IMode, useWebAuth } from './provider'
import LoginBg from '/media/login-bg-secondary.svg'
import Logo from '/media/logo.svg'

const Switcher = ({ mode }: { mode: IMode }): JSX.Element => {
  /* @vite-ignore */
  const AuthComponent = lazy(() => import(`./widgets/${mode}/index.tsx`))
  return (
    <Suspense fallback={<div className='h-96'></div>}>
      <AuthComponent />
    </Suspense>
  )
}

export const Content = (): JSX.Element => {
  const { mode } = useWebAuth()
  const [parent] = useAutoAnimate()

  return (
    <div className='bg-blue-50'>
      <div className='container flex min-h-screen flex-col justify-center py-10'>
        <div>
          <img
            alt='login_bg'
            src={LoginBg}
            className='absolute right-0 top-0 z-0 h-full'
          />
          <img alt='login_bg' src={Logo} className='h-16' />
          <div ref={parent} className='mt-20'>
            <Switcher mode={mode} />
          </div>
        </div>
      </div>
    </div>
  )
}
