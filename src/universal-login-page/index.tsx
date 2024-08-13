import { ModalProvider } from 'modal'

import { WebAuthProvider } from './provider'
import { Content } from './switcher'

const UniversalLoginPage = (): JSX.Element => (
  <ModalProvider>
    <WebAuthProvider>
      <Content />
    </WebAuthProvider>
  </ModalProvider>
)

export default UniversalLoginPage
