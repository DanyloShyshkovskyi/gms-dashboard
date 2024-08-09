import React, { Dispatch, useState } from 'react'

import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import { SocialSignIn } from './SocialSignIn'
import { WebAuthAlert } from './WebAuthAlert'
import { useWebAuth } from './WebAuthProvider'

interface Props {
  email: string
  setEmail: Dispatch<string>
}

export const SignIn = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('')
  const { login, isBusy, setMode } = useWebAuth()

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      login({
        username: email,
        password,
      })
    }
  }

  return (
    <>
      <div variant='h5'>{'Sign In'}</div>
      <div color='text.secondary' variant='body2'>
        {'Sign in with'}
      </div>
      <SocialSignIn />
      <WebAuthAlert sx={{ mt: 3 }} />
      <Input
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        placeholder='Email'
        type='email'
        value={email}
      />
      <Input
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        placeholder='Password'
        type='password'
        value={password}
      />
      <Button
        color='primary'
        disabled={isBusy}
        id='btn-login'
        onClick={() =>
          login({
            username: email,
            password,
          })
        }
      >
        {'Continue'}
      </Button>
      <div alignItems='center' display='flex' justifyContent='center' mt={3}>
        <div color='text.secondary' variant='body1'>
          {"Don't have an account?"}&nbsp;
        </div>
        <Button
          component='button'
          onClick={() => setMode('signUp')}
          sx={{ ml: 1 }}
          underline='hover'
        >
          <div variant='body1'>{'Sign Up'}</div>
        </Button>
      </div>
    </>
  )
}
