import { Dot } from './components/dot'
import { SidebarGroup } from './components/group'
import { SidebarItem } from './components/item'
import { SettingsLink } from './components/settings-link'
import SidebarWrapper from './components/wrapper'
import { SIDEBAR_DATA } from './data'

const Sidebar = () => {
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
      <SettingsLink />
      <Dot />
    </SidebarWrapper>
  )
}

export default Sidebar
