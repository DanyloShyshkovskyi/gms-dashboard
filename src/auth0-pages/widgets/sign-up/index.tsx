import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FormProvider, useForm } from 'react-hook-form'

import {
  InputController,
  PasswordPolicy,
  WebAuthAlert,
} from 'auth0-pages/components'
import { useWebAuth } from 'auth0-pages/provider'

import { Button, ButtonLoading } from 'shared/ui/button'

interface Inputs {
  email: string
  password: string
  givenName: string
  familyName: string
  user_metadata: {
    companyName: string
    contactNumber?: string
    numberOfEmployees?: number
  }
}

const SignUp = () => {
  const { signUp, isBusy, setMode } = useWebAuth()
  const methods = useForm<Inputs, string>({ mode: 'onChange' })
  const [parent] = useAutoAnimate()

  const onSubmit = (form_data: Inputs) => {
    console.log('form_data', form_data)
    signUp(form_data)
  }

  return (
    <div>
      <h1 className='text-7xl font-bold'>Sign Up</h1>
      <span className='my-10 block h-1 w-9 rounded-full bg-blue-700'></span>
      <FormProvider {...methods}>
        <form
          ref={parent}
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex max-w-xl flex-col gap-3'
        >
          <InputController
            label='Name of Person'
            placeholder='April Johnson'
            name='givenName'
            id='givenName'
            type='text'
            rules={{ required: true }}
          />
          <InputController
            label='Name of Company'
            placeholder='Company Name'
            name='user_metadata.companyName'
            id='companyName'
            type='text'
          />
          <div className='grid gap-3 lg:grid-cols-2'>
            <InputController
              label='Email Address'
              placeholder='your.email@gmail.com'
              name='email'
              id='email'
              type='email'
              rules={{ required: true }}
            />
            <InputController
              label={'Contact Number'}
              placeholder={'+1 234 567 890'}
              name={'user_metadata.contactNumber'}
              id={'contactNumber'}
              type={'tel'}
            />
          </div>
          <InputController
            label='Number of Employees'
            placeholder='1-10'
            name='user_metadata.numberOfEmployees'
            id='numberOfEmployees'
            type='number'
          />
          <PasswordPolicy inline />
          <WebAuthAlert />
          <ButtonLoading
            type='submit'
            disabled={isBusy}
            className='mt-5 w-full rounded-lg bg-blue-700 '
          >
            Sign Up
          </ButtonLoading>
          <span className='block text-sm text-gray-500'>
            Or sign into your company account (SSO)
          </span>
          <div className='mt-5 flex items-center justify-center gap-1 text-sm'>
            <div className=''>I have an account already</div>
            <Button
              type='button'
              className='h-full p-0 font-semibold text-blue-700'
              variant={'link'}
              onClick={() => setMode('sign-in')}
            >
              <div>{'log in'}</div>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignUp
