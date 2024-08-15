import { ArrowLeft } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'

import { InputController } from 'auth0-pages/components'
import { useWebAuth } from 'auth0-pages/provider'

import { Button } from 'shared/ui/button'

interface Inputs {
  email: string
}

const PasswordRecovery = () => {
  const { setMode, changePassword, isBusy } = useWebAuth()

  const methods = useForm<Inputs>()

  const onSubmit = (data: any) => {
    changePassword(data)
  }

  return (
    <div className='max-w-xl '>
      <h1 className='text-7xl font-bold'>Forgot your password?</h1>
      <span className='my-10 block h-1 w-9 rounded-full bg-blue-700'></span>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex flex-col gap-3'
        >
          <InputController
            label='Email'
            placeholder='Provide your email address'
            name='email'
            id='email'
            type='email'
            rules={{ required: true }}
          />
          <Button
            type='submit'
            disabled={isBusy}
            className='mt-3 block w-full rounded-full bg-blue-950 '
          >
            Log In
          </Button>
          <div>
            <Button
              type='button'
              variant='link'
              onClick={() => setMode('sign-in')}
              className='mt-5 inline-flex space-x-2'
            >
              <ArrowLeft size={24} className='text-blue-700' />
              <span className='text-gray-500'>Back</span>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default PasswordRecovery
