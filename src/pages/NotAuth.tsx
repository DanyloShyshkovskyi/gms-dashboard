import { useAuth0 } from '@auth0/auth0-react'
import { LockIcon } from 'lucide-react'

import { Button } from 'shared/ui/button'

export const NotAuth = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className='flex h-full flex-col items-center justify-center gap-5'>
      <LockIcon className='size-12' />
      <h2 className='scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0'>
        You are not authenticated
      </h2>
      <Button
        onClick={() => loginWithRedirect()}
        className='bg-indigo-800 text-white'
      >
        Login
      </Button>
    </div>
  )
}
