import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { AUTH0_PAGE_TYPE, ROOT } from 'shared/config'

import App from './app'

const Auth0Pages = React.lazy(() => import('auth0-pages'))

ReactDOM.createRoot(ROOT).render(
  <React.StrictMode>
    {AUTH0_PAGE_TYPE ? (
      <Suspense>
        <Auth0Pages />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>
)
