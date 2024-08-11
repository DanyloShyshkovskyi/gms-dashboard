import { useForm } from 'react-hook-form'

import { FormInput, WebAuthAlert } from 'universal-login-page/components'
import { useWebAuth } from 'universal-login-page/provider'

import { Button } from 'shared/ui/button'
import { Separator } from 'shared/ui/separator'

interface Inputs {
  email: string
  password: string
}

const SignIn = () => {
  const { login, isBusy, setMode } = useWebAuth()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit = ({ email, password }: Inputs) => {
    login({
      username: email,
      password: password,
    })
  }

  return (
    <div className='grid lg:grid-cols-2'>
      <div>
        <h1 className='text-7xl font-bold'>Welcome back!</h1>
        <span className='my-10 block h-1 w-9 rounded-full bg-blue-700'></span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex max-w-xl flex-col gap-3'
        >
          <FormInput
            label='Email'
            placeholder='apriljohnson@gmail.com'
            {...register('email', { required: true })}
          />
          <FormInput
            label='Password'
            id='password'
            placeholder='Type your password...'
            type='password'
            {...register('password', { required: true })}
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

          <Button
            type='submit'
            disabled={isBusy}
            className='mt-5 block w-full rounded-full bg-blue-950 '
          >
            Log In
          </Button>
          <span className='mt-3 block text-center text-gray-500'>
            Or sign into your company account (SSO)
          </span>
        </form>
        <WebAuthAlert sx={{ mt: 3 }} />
      </div>

      <div>
        <div className='shadow-1 m-auto mt-14 max-w-lg rounded-2xl bg-white p-10 text-center'>
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