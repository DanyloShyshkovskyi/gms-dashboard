// @ts-nocheck

const getEnvVar = (key) => {
  return import.meta.env[key] || ''
}

export const ROOT = document.getElementById('react-root')

export const IS_PRODUCTION = import.meta.env.PROD

export const API_URL = import.meta.env.PROD ? window.location.origin : getEnvVar('VITE_APP_API_URL')

export const BASE_URL = getEnvVar('VITE_APP_BASE_URL')

export const USER_PLACEHOLDER_IMAGE = 'https://img.icons8.com/material-rounded/96/EBEBEB/user-male-circle.png'
