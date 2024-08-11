import { Dispatch } from 'react'

import { WebAuthAlert } from 'universal-login-page/components'
import { useWebAuth } from 'universal-login-page/provider'

import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

interface Props {
  email: string
  setEmail: Dispatch<string>
}

const PasswordRecovery = ({ email, setEmail }: Props): JSX.Element => {
  const { setMode, changePassword, isBusy } = useWebAuth()

  return (
    <div>
      <div>{'Password Recovery'}</div>
      <div>
        {
          'Enter the email address you signed up with below. An email will be sent containing a link to reset your password.'
        }
      </div>
      <WebAuthAlert />
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
      <div>
        <div>{'Ready to Sign In?'}&nbsp;</div>
        <Button onClick={() => setMode('sign-in')}>
          <div>{'Sign In'}</div>
        </Button>
      </div>
    </div>
  )
}

export default PasswordRecovery
