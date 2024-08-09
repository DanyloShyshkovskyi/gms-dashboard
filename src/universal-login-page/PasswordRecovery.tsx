import { Dispatch } from 'react'

import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import { WebAuthAlert } from './WebAuthAlert'
import { useWebAuth } from './WebAuthProvider'

interface Props {
  email: string
  setEmail: Dispatch<string>
}

export const PasswordRecovery = ({ email, setEmail }: Props): JSX.Element => {
  const { setMode, changePassword, isBusy } = useWebAuth()

  return (
    <>
      <div variant='h5'>{'Password Recovery'}</div>
      <div color='text.secondary' variant='body2'>
        {
          'Enter the email address you signed up with below. An email will be sent containing a link to reset your password.'
        }
      </div>
      <WebAuthAlert sx={{ mt: 3 }} />
      <Input
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        type='email'
        value={email}
      />
      <Button
        color='primary'
        disabled={isBusy}
        id='btn-reset-password'
        onClick={() => changePassword({ email })}
      >
        {'Send instructions'}
      </Button>
      <div alignItems='center' display='flex' justifyContent='center' mt={4}>
        <div color='text.secondary' variant='body1'>
          {'Ready to Sign In?'}&nbsp;
        </div>
        <Button
          component='button'
          onClick={() => setMode('signIn')}
          sx={{ ml: 1 }}
          underline='hover'
        >
          <div variant='body1'>{'Sign In'}</div>
        </Button>
      </div>
    </>
  )
}
