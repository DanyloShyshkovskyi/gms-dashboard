import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useMutation } from '@tanstack/react-query'
import { AlertCircle } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'

import { PasswordPolicy } from 'auth0-pages/components'
import { Wrapper } from 'auth0-pages/components/wrapper'
import { useModal } from 'modal'

import { apiInstance } from 'shared/api'
import { ROOT } from 'shared/config'
import { ButtonLoading } from 'shared/ui/button'
import { errorTransformer } from 'shared/utils'

interface Inputs {
  password: string
  password_repeat: string
}

interface DataPost {
  _csrf: string
  ticket: string
  email: string
  newPassword: string
  confirmNewPassword: string
}

export const PasswordResetPage = () => {
  const methods = useForm<Inputs>({ mode: 'onChange' })
  const { openAlertDialog } = useModal()
  const [parent] = useAutoAnimate()
  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: DataPost) =>
      apiInstance.post(`${window.location.origin}/lo/reset`, data),
    onSuccess: (data) => {
      openAlertDialog('interval_timer', {
        title:
          'Your password has been reset, you will be redirected to the login page in 5 seconds',
        onTimeEnd: () => {
          window.location.replace(
            ROOT.getAttribute('data-redirect_url') ||
              window.location.origin + '/login'
          )
        },
      })
    },
    onError: (error) => {
      console.log('error', error)
    },
  })
  const onSubmit = (form_data: Inputs) => {
    mutate({
      _csrf: ROOT.getAttribute('data-csrf') || '',
      ticket: ROOT.getAttribute('data-ticket') || '',
      email: ROOT.getAttribute('data-email') || '',
      newPassword: form_data.password,
      confirmNewPassword: form_data.password_repeat,
    })
  }
  return (
    <Wrapper>
      <h1 className='text-7xl font-bold'>Reset password</h1>
      <span className='my-10 block h-1 w-9 rounded-full bg-blue-700'></span>
      <FormProvider {...methods}>
        <form
          ref={parent}
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex max-w-xl flex-col gap-3'
        >
          <PasswordPolicy />
          <div className='flex items-center gap-3 rounded-lg bg-red-100 p-3 font-medium text-red-700'>
            <AlertCircle /> <span>{errorTransformer(error)}</span>
          </div>
          <ButtonLoading
            type='submit'
            disabled={isPending}
            className='mt-5 w-full rounded-full bg-blue-950 '
          >
            Change Password
          </ButtonLoading>
        </form>
      </FormProvider>
    </Wrapper>
  )
}
