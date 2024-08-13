import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form'

import { Input } from 'shared/ui/input'
import { Label } from 'shared/ui/label'
import { cn } from 'shared/utils'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  rules?: UseControllerProps['rules']
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className='space-y-1'>
        <Label htmlFor={props.id}>{label}</Label>
        <Input ref={ref} {...props} className={cn('h-12 bg-gray-50')} />
      </div>
    )
  }
)

const errorColor = 'text-red-500'

export const InputController = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name = '', rules, ...props }, ref) => {
    const { control } = useFormContext()
    const {
      field,
      fieldState: { invalid, error, isTouched, isDirty },
      formState: { touchedFields, dirtyFields },
    } = useController({
      name,
      control,
      rules,
    })
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isPasswordType = props.type === 'password'

    return (
      <div className={cn('space-y-0.5')}>
        <Label
          className={cn('font-semibold transition-colors', {
            [errorColor]: invalid,
          })}
          htmlFor={props.id}
        >
          {label}
        </Label>
        <div className='relative w-full'>
          <Input
            {...props}
            {...field}
            type={isPasswordType && showPassword ? 'text' : props.type}
            className={cn(
              'bg-white transition-colors placeholder:font-sans placeholder:tracking-normal',
              {
                'pr-10': isPasswordType,
                [`${errorColor} border-red-300 placeholder:text-red-500  focus-visible:border-red-200 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 `]:
                  invalid,
              },
              props.className
            )}
          />
          {isPasswordType && (
            <button
              type='button'
              onClick={() => {
                setShowPassword((prev) => !prev)
                document
                  .querySelector<HTMLInputElement>(`input[name="${name}"]`)
                  ?.focus()
              }}
              className={cn(
                `absolute right-3 top-0 flex h-full cursor-pointer items-center font-bold text-gray-300`,
                { [errorColor]: invalid }
              )}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          )}
          <div className={cn('absolute right-0 mt-1 text-xs', errorColor)}>
            {error && error?.message}
          </div>
        </div>
      </div>
    )
  }
)
