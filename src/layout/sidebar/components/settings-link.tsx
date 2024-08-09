import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Settings } from 'lucide-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { cn } from 'shared/utils'

import { SidebarContext } from './wrapper'

export const SettingsLink = () => {
  const { expanded } = useContext(SidebarContext)
  const [parent] = useAutoAnimate()
  return (
    <div className='overflow-hidden'>
      <NavLink
        ref={parent}
        to='/settings'
        className={({ isActive }) =>
          cn(
            'overflow-hidden text-nowrap',
            'm-2 flex items-center gap-4 rounded-3xl bg-blue-50 px-6 py-4 text-sm transition-colors',
            isActive && 'bg-blue-700 font-semibold text-white'
          )
        }
      >
        <Settings size={22} className='min-w-5' />
        {expanded && <span className='leading-none'>Settings</span>}
      </NavLink>
    </div>
  )
}
