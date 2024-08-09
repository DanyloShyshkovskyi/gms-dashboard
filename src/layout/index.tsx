import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router'

import { WITHOUT_LOGIN } from 'shared/config'
import { useGetToken } from 'shared/hooks'
import {
  LoadingSpinner,
  LoadingSpinnerContainer,
} from 'shared/ui/loading-spinner'

const Sidebar = lazy(() => import('./sidebar/sidebar'))
const Header = lazy(() => import('./header/header'))

const Layout = () => {
  const [parent] = useAutoAnimate()
  const { isLoading } = useGetToken()
  return (
    <div className={'flex min-h-screen bg-blue-50'}>
      <Suspense fallback={<div className='h-full w-72'></div>}>
        <Sidebar />
      </Suspense>
      <section className='flex min-h-screen w-full flex-col'>
        <Suspense fallback={<div className='h-32 w-full'></div>}>
          <Header />
        </Suspense>
        <main ref={parent} className='flex-1 px-5'>
          {isLoading && !WITHOUT_LOGIN ? (
            <LoadingSpinnerContainer>
              <LoadingSpinner size={100} className={'stroke-indigo-800'} />
            </LoadingSpinnerContainer>
          ) : (
            <Outlet />
          )}
        </main>
      </section>
    </div>
  )
}

export default Layout
