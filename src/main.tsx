import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { IS_UNIVERSAL_LOGIN, ROOT } from 'shared/config'

import App from './app'

const UniversalLoginPageLazy = React.lazy(() => import('universal-login-page'))

ReactDOM.createRoot(ROOT).render(
  <React.StrictMode>
    {IS_UNIVERSAL_LOGIN ? (
      <Suspense>
        <UniversalLoginPageLazy />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>
)
