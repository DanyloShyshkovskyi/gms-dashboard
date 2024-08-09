import { Content } from './Content'
import { WebAuthProvider } from './WebAuthProvider'

const UniversalLoginPage = (): JSX.Element => (
  <WebAuthProvider>
    <Content />
  </WebAuthProvider>
)

export default UniversalLoginPage
