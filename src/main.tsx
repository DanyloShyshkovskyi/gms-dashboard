import React from 'react'
import ReactDOM from 'react-dom/client'

import UniversalLoginPage from 'universal-login-page'

import { IS_UNIVERSAL_LOGIN, ROOT } from 'shared/config'

import App from './app'

ReactDOM.createRoot(ROOT).render(
  <React.StrictMode>
    {IS_UNIVERSAL_LOGIN ? <UniversalLoginPage /> : <App />}
  </React.StrictMode>
)
