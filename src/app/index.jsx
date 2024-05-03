import { Header, Routing, Sidebar } from 'layout'
import { ScrollToTop } from 'shared/controller'
import './index.css'
import { withProviders } from './providers'

const App = () => {
  return (
    <div className={'flex h-screen'}>
      <Sidebar />
      <section className='w-full'>
        <Header />
        <ScrollToTop />
        <Routing />
      </section>
    </div>
  )
}

export default withProviders(App)
