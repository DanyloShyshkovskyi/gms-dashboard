import { WebAuthProvider } from './provider'
import { Content } from './switcher'

const UniversalLoginPage = (): JSX.Element => (
  <WebAuthProvider>
    <Content />
  </WebAuthProvider>
)

export default UniversalLoginPage
