import { InputHTMLAttributes, forwardRef } from 'react'

import { Input } from 'shared/ui/input'
import { Label } from 'shared/ui/label'
import { cn } from 'shared/utils'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
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
