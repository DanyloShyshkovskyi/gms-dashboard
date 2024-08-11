import { Dispatch, useState } from 'react'

import { SocialSignIn, WebAuthAlert } from 'universal-login-page/components'
import { useWebAuth } from 'universal-login-page/provider'

import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

interface Props {
  email: string
  setEmail: Dispatch<string>
}

const SignUp = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const { signUp, isBusy, setMode } = useWebAuth()

  return (
    <>
      <div>{'Sign Up'}</div>
      <div color='text.secondary'>{'Sign up with'}</div>
      <SocialSignIn />
      <WebAuthAlert sx={{ mt: 3 }} />
      <Input
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        type='email'
        value={email}
      />
      <Input
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        type='password'
        value={password}
      />
      <div>
        <Input
          id='first-name'
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
          value={firstName}
        />
        <Input
          id='last-name'
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name'
          value={lastName}
        />
      </div>
      <Button
        color='primary'
        disabled={isBusy}
        id='btn-sign-up-submit'
        onClick={() =>
          signUp({
            email,
            password,
            givenName: firstName,
            familyName: lastName,
          })
        }
      >
        {'Continue'}
      </Button>
      <div>
        <div color='text.secondary'>{'Already have an account?'}&nbsp;</div>
        <Button onClick={() => setMode('sign-in')}>
          <div>{'Sign In'}</div>
        </Button>
      </div>
    </>
  )
}

export default SignUp
