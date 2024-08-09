import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { BASE_URL } from 'shared/config'
import './style.scss'
import { SidebarContext } from './wrapper'

interface Position {
  top: number
}

export const Dot: React.FC = () => {
  const { pathname } = useLocation()
  const { navRef, expanded } = useContext(SidebarContext)
  const [position, setPosition] = useState<Position>({ top: 0 })
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (!navRef.current) {
      setVisible(false)
      return
    }

    setVisible(true)
    // get container position
    const { top: container_top } = navRef.current.getBoundingClientRect()

    // find the active link BASE_URL + pathname
    const activeLink = navRef.current.querySelector(`.main a[href="${BASE_URL + pathname}"]`)

    if (!activeLink) {
      setVisible(false)
      return
    }

    // get active link position
    const { top: link_top } = activeLink.getBoundingClientRect()

    // find the difference between the container and the active link
    const top = link_top - container_top

    setPosition({ top })
  }, [pathname, navRef])

  if (!visible || !expanded) return null

  return (
    <div style={position} className='navbar-dot absolute flex items-center justify-center p-4 transition-all'>
      <span className='block size-2 rounded-full bg-indigo-500' />
    </div>
  )
}