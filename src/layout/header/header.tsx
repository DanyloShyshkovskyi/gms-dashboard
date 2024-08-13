import { useAuth0 } from '@auth0/auth0-react'
import { Separator } from '@radix-ui/react-separator'
import { Bell, Search } from 'lucide-react'

import { REDIRECT_URI, USER_PLACEHOLDER_IMAGE } from 'shared/config'
import { Avatar, AvatarFallback, AvatarImage } from 'shared/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'shared/ui/dropdown-menu'
import { Input } from 'shared/ui/input'
import {
  LoadingSpinner,
  LoadingSpinnerContainer,
} from 'shared/ui/loading-spinner'

const Header = () => {
  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } =
    useAuth0()
  return (
    <header className={'flex items-center justify-between px-5 py-7'}>
      <div className='relative w-full max-w-sm overflow-hidden rounded-full bg-white p-1 shadow-sidebar'>
        <Input
          placeholder='Search...'
          className={
            ' rounded-full border-none bg-transparent pr-10 text-xs focus-visible:border-none focus-visible:ring-blue-600 focus-visible:ring-offset-2'
          }
        />
        <Search className='absolute right-4 top-4 size-4 text-blue-700' />
      </div>
      <div className='flex gap-4'>
        <Separator orientation='vertical' className='w-0.5' />
        <div className='flex items-center gap-4'>
          <div className='rounded-full border bg-white p-3'>
            <Bell className='size-5' />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-sm font-semibold'>
              {user?.nickname || 'Anonymous'}
            </div>
            <div className='text-xs text-blue-700'>Executive Producer</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className={'size-16 border p-2'}>
                <AvatarImage
                  src={isAuthenticated ? user?.picture : USER_PLACEHOLDER_IMAGE}
                  className={'rounded-full'}
                />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {isLoading ? (
                <LoadingSpinnerContainer className={'min-h-20'}>
                  <LoadingSpinner className={'stroke-indigo-800'} />
                </LoadingSpinnerContainer>
              ) : (
                <>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() =>
                      isAuthenticated
                        ? logout({
                            logoutParams: { returnTo: REDIRECT_URI },
                          })
                        : loginWithRedirect()
                    }
                  >
                    {isAuthenticated ? 'Logout' : 'Login'}
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
