import { AlertCircle } from 'lucide-react'

import { useWebAuth } from 'auth0-pages/provider'

export const WebAuthAlert = () => {
  const { alert } = useWebAuth()

  if (!alert) {
    return null
  }

  return (
    <div className='flex items-center gap-3 rounded-lg bg-red-100 p-3 font-medium text-red-700'>
      <AlertCircle /> <span>{alert.message}</span>
    </div>
  )
}
