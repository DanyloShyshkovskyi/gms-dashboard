import { useMutation } from '@tanstack/react-query'
import { FormProvider, useForm } from 'react-hook-form'

import { PasswordPolicy } from 'auth0-pages/components'
import { Wrapper } from 'auth0-pages/components/wrapper'
import { useModal } from 'modal'

import { apiInstance } from 'shared/api'
import { ROOT } from 'shared/config'
import { Button } from 'shared/ui/button'

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
  const { mutate } = useMutation({
    mutationFn: (data: DataPost) =>
      apiInstance.post(`${window.location.origin}/lo/reset`, data),
    onSuccess: (data) => {
      console.log('success', data)
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

    openAlertDialog('interval_timer', {
      title:
        'Your password has been reset, you will be redirected to the login page in 5 seconds',
      onTimeEnd: () => {
        console.log('onTimeEnd')
      },
    })
  }
  return (
    <Wrapper>
      <h1 className='text-7xl font-bold'>Reset password</h1>
      <span className='my-10 block h-1 w-9 rounded-full bg-blue-700'></span>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex max-w-xl flex-col gap-3'
        >
          <PasswordPolicy />
          <Button
            type='submit'
            // disabled={isBusy}
            className='mt-5 block w-full rounded-full bg-blue-950 '
          >
            Change Password
          </Button>
        </form>
      </FormProvider>
    </Wrapper>
  )
}
