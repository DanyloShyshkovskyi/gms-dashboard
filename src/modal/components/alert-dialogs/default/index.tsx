import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'shared/ui/alert-dialog'

import { IDefaultAlertDialog } from './type'

const DefaultAlertDialog = ({
  title,
  description,
  onConfirm,
}: IDefaultAlertDialog) => {
  return (
    <AlertDialogContent className='sm:max-w-[425px]'>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}

export default DefaultAlertDialog
