import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'shared/ui/alert-dialog'

import { ICloseAlertDialog } from './type'

const CloseAlertDialog = ({ title, description }: ICloseAlertDialog) => {
  return (
    <AlertDialogContent className='max-w-sm rounded-lg p-10'>
      <AlertDialogHeader>
        <AlertDialogTitle className='text-center font-bold'>
          {title}
        </AlertDialogTitle>
        <AlertDialogDescription className='text-center'>
          {description}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter className='sm:justify-center'>
        <AlertDialogCancel className='h-8 rounded-full bg-blue-700 px-6 py-4 text-xs text-white'>
          Close
        </AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}

export default CloseAlertDialog
