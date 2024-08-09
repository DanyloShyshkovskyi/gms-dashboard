import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ReactNode, createContext, useRef, useState } from 'react'

import { BASE_URL } from 'shared/config'

interface SidebarContextType {
  expanded: boolean
  navRef: React.RefObject<HTMLElement | null>
}

export const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
  navRef: { current: null },
})

interface SidebarWrapperProps {
  children: ReactNode
}

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
  const [expanded, setExpanded] = useState(true)
  const [parent] = useAutoAnimate()
  const ref = useRef<HTMLElement>(null)
  const Arrow = expanded ? ChevronLeft : ChevronRight

  return (
    <aside className='h-full min-h-screen px-5 py-7'>
      <nav
        ref={ref}
        className='relative flex h-full min-h-[calc(100vh-3.5rem)] flex-col rounded-3xl border-r bg-white shadow-sidebar'
      >
        <div
          ref={parent}
          className='relative mx-4 my-1 flex h-32 items-center gap-2 border-b border-gray-200 px-4'
        >
          <img
            src={`${BASE_URL}/media/logo-icon.svg`}
            alt='logo-icon'
            className={expanded ? 'h-6' : 'h-8'}
          />
          {expanded && (
            <img
              src={`${BASE_URL}/media/logo-text.svg`}
              alt='logo-text'
              className='h-5'
            />
          )}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`absolute rounded-full border border-gray-200 bg-white p-2 shadow-sidebar ${expanded ? 'right-0' : '-right-7'}`}
          >
            <Arrow size={12} />
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded, navRef: ref }}>
          <div className='flex h-full flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden'>
            {children}
          </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}
