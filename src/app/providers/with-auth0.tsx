import { Auth0Provider } from '@auth0/auth0-react'
import { ReactNode } from 'react'

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, REDIRECT_URI } from 'shared/config'

export const withAuth0 = (component: () => ReactNode) => () => (
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: REDIRECT_URI,
    }}
  >
    {component()}
  </Auth0Provider>
)
