const getEnvVar = (key: string) => {
  return import.meta.env[key] || ''
}

export const ROOT =
  document.getElementById('react-root') || document.createElement('div')

export const IS_PRODUCTION = import.meta.env.PROD

export const API_URL = getEnvVar('VITE_APP_API_URL')

export const BASE_URL = getEnvVar('VITE_APP_BASE_URL')

export const AUTH0_DOMAIN = getEnvVar('VITE_APP_AUTH0_DOMAIN')

export const REDIRECT_URI = `${window.location.origin}${BASE_URL}`

export const AUTH0_CLIENT_ID = getEnvVar('VITE_APP_AUTH0_CLIENT_ID')

export const WITHOUT_LOGIN = getEnvVar('VITE_APP_WITHOUT_LOGIN') === 'true'

export const USER_PLACEHOLDER_IMAGE =
  'https://img.icons8.com/material-rounded/96/EBEBEB/user-male-circle.png'

export const IS_UNIVERSAL_LOGIN = ROOT.hasAttribute('data-universal-login')
