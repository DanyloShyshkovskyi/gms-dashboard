import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ReactNode } from 'react'

import { cn } from 'shared/utils'

import { SVGLoginBg } from './svg/login-bg'
import { SVGLogo } from './svg/logo'

export const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const [parent] = useAutoAnimate()

  return (
    <div className='relative bg-blue-50'>
      <div className='container flex min-h-screen flex-col justify-center py-10 xl:py-32'>
        <div>
          <SVGLoginBg />
          <SVGLogo />
          <div
            ref={parent}
            className={cn('relative mt-20 min-h-130 p-1', className)}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
