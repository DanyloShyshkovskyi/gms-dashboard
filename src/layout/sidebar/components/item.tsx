import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ArrowRight, ChevronDown, ChevronUp, LucideIcon } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { cn } from 'shared/utils'

import { SidebarContext } from './wrapper'

interface SubLink {
  to: string
  title: string
}

interface SidebarItemProps {
  Icon: LucideIcon
  text: string
  to: string
  alert?: boolean
  subLinks?: SubLink[]
}

export function SidebarItem({
  Icon,
  text,
  to,
  alert,
  subLinks,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext)
  const [parent] = useAutoAnimate()
  const [listOpen, setListOpen] = useState(false)
  const ToggleIcon = listOpen ? ChevronUp : ChevronDown

  useEffect(() => {
    if (!expanded) {
      setListOpen(false)
    }
  }, [expanded])

  return (
    <div ref={parent} className='nav-item'>
      <NavLink
        ref={parent}
        to={to}
        className={({ isActive }) => `
          group relative mx-4 my-1 flex flex-col
          gap-4 rounded-lg  px-4
          py-2 text-sm font-medium transition-all
          ${isActive ? ' cursor-default ' : 'cursor-pointer'}
        `}
      >
        {({ isActive }) => (
          <div ref={parent} className='flex items-center gap-4'>
            <Icon
              width={21}
              height={21}
              className={cn(
                'min-w-5',
                isActive ? 'text-blue-700' : 'text-gray-950'
              )}
            />

            {expanded && (
              <div
                className={`block w-24 overflow-hidden text-nowrap leading-normal transition-width ${
                  isActive ? 'font-bold' : 'font-medium'
                }`}
              >
                {text}
              </div>
            )}
            {alert && (
              <div
                className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
              />
            )}
            {subLinks && expanded && (
              <ToggleIcon
                onClick={(e) => {
                  e.preventDefault()
                  setListOpen((prev) => !prev)
                }}
                className='cursor-pointer'
              />
            )}
          </div>
        )}

        {/* {!expanded && (
          <div
            className={`
            invisible absolute left-full ml-6 -translate-x-3 rounded-md
            bg-indigo-100 px-2 py-1
            text-sm text-indigo-800 opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
          >
            {text}
          </div>
        )} */}
      </NavLink>
      {subLinks && expanded && listOpen && (
        <div className='my-2 flex flex-col gap-1 overflow-hidden'>
          {subLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg pl-8 text-sm
              ${isActive ? 'font-semibold' : ' '}`
              }
            >
              {({ isActive }) => (
                <>
                  <ArrowRight
                    size={16}
                    className={cn(isActive && 'text-blue-700')}
                  />{' '}
                  <span>{link.title}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}
