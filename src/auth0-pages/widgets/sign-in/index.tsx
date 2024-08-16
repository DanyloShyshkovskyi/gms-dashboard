import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FormProvider, useForm } from 'react-hook-form'

import { InputController, WebAuthAlert } from 'auth0-pages/components'
import { useWebAuth } from 'auth0-pages/provider'

import { Button, ButtonLoading } from 'shared/ui/button'
import { Separator } from 'shared/ui/separator'

interface Inputs {
  email: string
  password: string
}

const SignIn = () => {
  const { login, isBusy, setMode } = useWebAuth()
  const modifies = useForm<Inputs>()
  const [parent] = useAutoAnimate()

  const onSubmit = ({ email, password }: Inputs) => {
    login({
      username: email,
      password: password,
    })
  }

  return (
    <div className='grid gap-10 lg:grid-cols-2'>
      <div>
        <h1 className='text-7xl font-bold'>Welcome back!</h1>
        <span className='my-10 block h-1 w-9 rounded-full bg-blue-700'></span>
        <FormProvider {...modifies}>
          <form
            ref={parent}
            onSubmit={modifies.handleSubmit(onSubmit)}
            className='flex max-w-xl flex-col gap-3'
          >
            <InputController
              label='Email'
              name='email'
              id='email'
              type='email'
              rules={{ required: true }}
            />
            <InputController
              label='Password'
              name='password'
              id='password'
              placeholder='Type your password...'
              type='password'
              rules={{ required: true }}
            />
            <div className='text-right'>
              <Button
                type={'button'}
                variant={'link'}
                onClick={() => setMode('reset-password')}
                className='h-full p-0 text-blue-700'
              >
                Forgot your password?
              </Button>
            </div>

            <WebAuthAlert />

            <ButtonLoading
              type='submit'
              disabled={isBusy}
              className='mt-5 w-full rounded-full bg-blue-950 '
            >
              Log In
            </ButtonLoading>
            <span className='mt-3 block text-center text-gray-500'>
              Or sign into your company account (SSO)
            </span>
          </form>
        </FormProvider>{' '}
      </div>

      <div>
        <div className='m-auto mt-14 max-w-lg rounded-2xl bg-white p-10 text-center shadow-1'>
          <h2 className='text-3xl font-bold'>
            Don't have an account, <br /> register
          </h2>
          <p className='mt-3 text-sm text-gray-500'>
            Letting the user enter their own info saves
          </p>
          <Separator className='mt-7 border-2 border-dashed border-gray-50' />
          <Button
            onClick={() => setMode('sign-up')}
            className='mt-7 block w-full rounded-full bg-blue-700 font-bold'
          >
            <div>Register</div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
