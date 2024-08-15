import { useEffect, useState } from 'react'

import { useModal } from 'modal/provider'

import {
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'shared/ui/alert-dialog'
import { LoadingSpinner } from 'shared/ui/loading-spinner'

import { IIntervalTimerAlertDialog } from './type'

const IntervalTimerAlertDialog = ({
  title,
  initialTime = 5,
  onTimeEnd,
}: IIntervalTimerAlertDialog) => {
  const { closeModal } = useModal()
  const [seconds, setSeconds] = useState(initialTime)
  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 1 && onTimeEnd) {
      onTimeEnd()
      return
    }

    if (seconds <= 0) {
      closeModal()
      return
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)

    // Clean up the timer
    return () => clearInterval(timer)
  }, [seconds])

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }
  return (
    <AlertDialogContent className='sm:max-w-[425px]'>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
      </AlertDialogHeader>
      <div className='relative flex w-full flex-col items-center justify-center'>
        <LoadingSpinner size={150} className='text-blue-950' />
        <span className='absolute'>{formatTime(seconds)}</span>
      </div>

      <AlertDialogFooter></AlertDialogFooter>
    </AlertDialogContent>
  )
}

export default IntervalTimerAlertDialog
