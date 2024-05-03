import { withProviders } from './providers'
import { Footer, Header, Routing } from 'layout'
import { ScrollToTop } from 'shared/controller'
import './index.css'

const App = () => {
  return (
    <div className={'flex h-screen flex-col'}>
      <Header />
      <ScrollToTop />
      <Routing />
      <Footer />
    </div>
  )
}

export default withProviders(App)
