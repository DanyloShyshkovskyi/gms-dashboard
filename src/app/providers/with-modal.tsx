import { ReactNode } from 'react'

import { ModalProvider } from 'modal'

export const withModal = (component: () => ReactNode) => () => (
  <ModalProvider>{component()}</ModalProvider>
)
