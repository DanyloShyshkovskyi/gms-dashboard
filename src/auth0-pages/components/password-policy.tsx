import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Check, X } from 'lucide-react'
import { useFormContext, useWatch } from 'react-hook-form'

import { cn } from 'shared/utils'

import { InputController } from './form-input'

const passwordPolicy = (password: string) => ({
  minLength: password.length >= 8,
  hasUpperCase: /[A-Z]/.test(password),
  hasNumber: /[0-9]/.test(password),
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
})

export const PasswordPolicy = ({ inline }: { inline?: boolean }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const password = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  })

  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className='space-y-5'>
      <div className={cn('grid gap-3', { 'lg:grid-cols-2': inline })}>
        <InputController
          label={inline ? 'Password' : 'New Password'}
          name='password'
          id='password'
          type='password'
          rules={{
            required: true,
            validate: (value) =>
              Object.values(passwordPolicy(value)).every(Boolean),
          }}
        />
        <InputController
          label={inline ? 'Repeat Password' : 'Repeat New Password'}
          name='password_repeat'
          type='password'
          rules={{
            required: 'Please repeat your password',
            validate: (value) => value === password || 'Passwords do not match',
          }}
        />
      </div>
      {(errors?.password || password.length > 0) && (
        <ul className='min-h-20 space-y-2'>
          <PolicyItem tag={'minLength'} label='Minimum 8 characters' />
          <PolicyItem
            tag={'hasUpperCase'}
            label='At least one uppercase letter'
          />
          <PolicyItem tag={'hasNumber'} label='At least one number' />
          <PolicyItem
            tag={'hasSpecialChar'}
            label='At least one special character (!@#$%^&*(), etc.)'
          />
        </ul>
      )}
    </div>
  )
}

const PolicyItem = ({
  tag,
  label,
}: {
  tag: keyof ReturnType<typeof passwordPolicy>
  label: string
}) => {
  const { control } = useFormContext()
  const password = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  })
  const isValid = passwordPolicy(password)[tag]
  const [parent] = useAutoAnimate()
  return (
    <li className='flex items-center gap-3'>
      <span
        ref={parent}
        className={cn(
          'flex h-4 w-4 items-center justify-center rounded-full transition-colors',
          isValid ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        )}
      >
        {isValid ? <Check size={10} /> : <X size={10} />}
      </span>
      <span
        className={cn(
          'text-xs font-medium transition-colors',
          isValid ? 'text-green-600' : 'text-red-600'
        )}
      >
        {label}
      </span>
    </li>
  )
}
