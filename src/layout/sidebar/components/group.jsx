import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext } from 'react'
import { SidebarContext } from './wrapper'

export function SidebarGroup({ children, title }) {
  const { expanded } = useContext(SidebarContext)
  const [parent] = useAutoAnimate()
  return (
    <div ref={parent} className='border-b'>
      {!expanded && title && (
        <div className='pt-3 text-center text-xs font-semibold uppercase text-gray-500'>{title}</div>
      )}
      <div className='flex flex-col'>{children}</div>
    </div>
  )
}
