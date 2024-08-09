import { Dispatch, useState } from 'react'

import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import { SocialSignIn } from './SocialSignIn'
import { WebAuthAlert } from './WebAuthAlert'
import { useWebAuth } from './WebAuthProvider'

interface Props {
  email: string
  setEmail: Dispatch<string>
}

export const SignUp = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const { signUp, isBusy, setMode } = useWebAuth()

  return (
    <>
      <div variant='h5'>{'Sign Up'}</div>
      <div color='text.secondary' variant='body2'>
        {'Sign up with'}
      </div>
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
      <div display='flex' mt={2}>
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
      <div alignItems='center' display='flex' justifyContent='center' mt={3}>
        <div color='text.secondary' variant='body1'>
          {'Already have an account?'}&nbsp;
        </div>
        <Button onClick={() => setMode('signIn')}>
          <div variant='body1'>{'Sign In'}</div>
        </Button>
      </div>
    </>
  )
}
