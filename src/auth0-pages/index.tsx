import { withQuery } from 'app/providers/with-query'
import { ModalProvider } from 'modal'

import { AUTH0_PAGE_TYPE } from 'shared/config'

import { PasswordResetPage } from './pages/password-reset-page'
import { UniversalLoginPage } from './pages/universal-login-page'
import { WebAuthProvider } from './provider'

const Auth0PagesConst: Record<
  'universal-login' | 'password-reset',
  JSX.Element
> = {
  'universal-login': <UniversalLoginPage />,
  'password-reset': <PasswordResetPage />,
}

const Auth0Pages = (): JSX.Element => (
  <ModalProvider>
    <WebAuthProvider>
      {AUTH0_PAGE_TYPE ? Auth0PagesConst[AUTH0_PAGE_TYPE] : <></>}
    </WebAuthProvider>
  </ModalProvider>
)

export default withQuery(Auth0Pages)
