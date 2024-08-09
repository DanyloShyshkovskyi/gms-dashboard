import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ReactNode, useContext } from 'react'

import { SidebarContext } from './wrapper'

interface SidebarGroupProps {
  children: ReactNode
  title?: string
}

export function SidebarGroup({ children, title }: SidebarGroupProps) {
  const { expanded } = useContext(SidebarContext)
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className=''>
      {/* {!expanded && title && (
        <div className='pt-3 text-center text-xs font-semibold uppercase text-gray-500'>{title}</div>
      )} */}
      <div className='flex flex-col'>{children}</div>
    </div>
  )
}
