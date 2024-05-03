import { Settings } from 'lucide-react'
import { SidebarGroup } from './components/group'
import { SidebarItem } from './components/item'
import SidebarWrapper from './components/wrapper'
import { SIDEBAR_DATA } from './data'

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className='main'>
        {SIDEBAR_DATA.map((group, index) => (
          <SidebarGroup key={index} title={group.title}>
            {group.items.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </SidebarGroup>
        ))}
      </div>
      <SidebarItem text={'Account settings'} to={'/settings'} icon={<Settings />} />
    </SidebarWrapper>
  )
}
