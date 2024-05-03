import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Minus, Plus } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarContext } from './wrapper'

export function SidebarItem({ icon, text, to, alert, subLinks }) {
  const { expanded } = useContext(SidebarContext)
  const [parent] = useAutoAnimate()
  const [listOpen, setListOpen] = useState(false)
  const ToggleIcon = listOpen ? Minus : Plus

  useEffect(() => {
    if (!expanded) {
      setListOpen(false)
    }
  }, [expanded])
  return (
    <NavLink
      ref={parent}
      to={to}
      className={({ isActive }) => `
          group relative mx-4 my-1 flex flex-col
          gap-4 rounded-lg  px-4
          py-3.5 font-medium transition-all
          ${isActive ? ' cursor-default bg-indigo-900 text-white' : 'cursor-pointer bg-transparent text-gray-600 hover:bg-indigo-100'}
      `}
    >
      <div ref={parent} className='flex items-center gap-2'>
        <span className='size-6'>{icon}</span>

        {expanded && (
          <div className={`transition-width block w-36 overflow-hidden text-nowrap leading-normal`}>{text}</div>
        )}
        {alert && <div className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`} />}
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
      {subLinks && expanded && listOpen && (
        <div className='flex flex-col gap-2 overflow-hidden'>
          {subLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg py-1.5 pl-8 text-sm
                ${isActive ? 'bg-indigo-500  text-white' : 'hover:bg-indigo-700 hover:text-white'}`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </NavLink>
  )
}
