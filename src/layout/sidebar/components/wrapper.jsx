import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createContext, useState } from 'react'
import { BASE_URL } from 'shared/config'

export const SidebarContext = createContext({ expanded: true })

export default function SidebarWrapper({ children }) {
  const [expanded, setExpanded] = useState(true)
  const [parent] = useAutoAnimate()
  return (
    <aside className='h-screen'>
      <nav className='flex h-full flex-col border-r bg-gray-100 shadow-sm'>
        <div ref={parent} className='relative mx-4 my-1 flex h-20 items-center gap-2 border-b px-4 py-3.5'>
          <img src={`${BASE_URL}/media/logo-icon.svg`} alt='logo-icon' className='h-8' />
          {expanded && <img src={`${BASE_URL}/media/logo-text.svg`} alt='logo-text' className='h-6' />}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`absolute rounded-full p-1.5 transition-all ${expanded ? 'right-0' : '-right-9 border bg-blue-50'}`}
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <div className='flex h-full flex-col justify-between overflow-auto'> {children}</div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}
