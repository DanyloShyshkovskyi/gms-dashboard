import {
  SyntheticEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import type { Auth0Error, DbSignUpOptions, WebAuth } from 'auth0-js'
import { createAuthClient } from 'auth0-pages/utils'
import {
  ErrorMessageKey,
  getErrorMessage,
  isAnomalyError,
  redirectToReferrer,
} from 'auth0-pages/utils/error'
import { useModal } from 'modal'

export type IMode = 'sign-in' | 'sign-up' | 'reset-password'
type Provider = 'google-oauth2' | 'github'
type Login = (attrs: { username: string; password: string }) => void
type LoginWithSocial = (provider: Provider) => (e: SyntheticEvent) => void
type SignUp = (attrs: {
  email: string
  password: string
  givenName: string
  familyName: string
  user_metadata: any
}) => void
type ChangePassword = ({ email }) => void
type Alert = {
  severity: 'error' | 'success'
  message: string
}

type WebAuthValue = {
  webAuth: WebAuth
  login: Login
  loginWithSocial: LoginWithSocial
  signUp: SignUp
  changePassword: ChangePassword
  isBusy: boolean
  alert: Alert
  mode: IMode
  setMode: (mode: IMode) => void
}

// eslint-disable-next-line unicorn/no-null
const WebAuthContext = createContext<WebAuthValue>(null)

const getInitialMode = (): IMode => {
  const hasRegisterLoginAction = /[&?]login_action=register/iu.test(
    window.location.search
  )

  // If search 'mode' is present, use it
  const mode = new URL(window.location.href).searchParams.get('mode') as IMode

  if (mode) {
    return mode
  }

  return hasRegisterLoginAction ? 'sign-up' : 'sign-in'
}

const referral = new URL(window.location.href).searchParams.get('referral')

const WebAuthProvider = ({ children }: { children: JSX.Element }) => {
  const [webAuth, setWebAuth] = useState<WebAuth>()
  const [alert, setAlert] = useState<Alert>()
  const [isBusy, setBusy] = useState(false)
  const [mode, setModeDispatch] = useState<IMode>(getInitialMode())
  const { openAlertDialog } = useModal()

  console.log({ alert, isBusy })

  const handleError = (err: Auth0Error | ErrorMessageKey): void => {
    if (isAnomalyError(err) && redirectToReferrer()) {
      return
    }

    setAlert({
      message: getErrorMessage(err),
      severity: 'error',
    })
    setBusy(false)
  }

  useEffect(() => {
    if (!webAuth) {
      setBusy(true)

      try {
        setWebAuth(createAuthClient())
        setBusy(false)
      } catch (error) {
        handleError(error)
      }
    }
  }, [webAuth])

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('mode', mode)
    window.history.pushState({}, '', url.toString())

    window.addEventListener('popstate', () => {
      setMode(getInitialMode())
    })

    return () => {
      window.removeEventListener('popstate', () => {
        setMode(getInitialMode())
      })
    }
  }, [mode])

  const login: Login = ({ username, password }) => {
    setBusy(true)
    setAlert(undefined)

    if (!username) {
      return handleError('email')
    }

    if (!password) {
      return handleError('password')
    }

    return webAuth?.login(
      {
        realm: 'Username-Password-Authentication',
        username,
        password,
      },
      (err) => {
        if (err) {
          handleError(err)
        } else {
          setBusy(false)
        }
      }
    )
  }

  const loginWithSocial: LoginWithSocial = (provider) => (e) => {
    e.preventDefault()
    setAlert(undefined)
    setBusy(true)
    webAuth?.authorize({
      connection: provider,
      ...(referral && { referral }),
    })
  }

  const signUp: SignUp = ({
    email,
    password,
    givenName,
    familyName = ' ',
    user_metadata,
  }) => {
    setBusy(true)

    if (!email) {
      return handleError('email')
    }

    if (!password) {
      return handleError('password')
    }

    if (!givenName) {
      return handleError('first_name')
    }

    return webAuth?.signup(
      {
        connection: 'Username-Password-Authentication',
        email,
        password,
        given_name: givenName,
        family_name: familyName,
        user_metadata: {
          ...(referral && { referral }),
          ...user_metadata,
        },
        /* eslint-enable camelcase */
      } as DbSignUpOptions,
      (err) => {
        if (err) {
          handleError(err)
        } else {
          login({
            username: email,
            password,
          })
        }
      }
    )
  }

  const changePassword: ChangePassword = ({ email }) => {
    setBusy(true)

    if (!email) {
      return handleError('email')
    }

    return webAuth.changePassword(
      {
        connection: 'Username-Password-Authentication',
        email,
      },
      (err) => {
        if (err) {
          handleError(err)
        } else {
          openAlertDialog('close_only', {
            title: 'Please check your inbox for confirmation email',
          })
          // setAlert({
          //   severity: 'success',
          //   message: 'Email sent!',
          // })
          setBusy(false)
        }
      }
    )
  }

  const setMode = (newMode: IMode): void => {
    setBusy(false)
    setAlert(undefined)
    setModeDispatch(newMode)
    window.scrollTo(0, 0)
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: WebAuthValue = {
    webAuth,
    login,
    loginWithSocial,
    signUp,
    changePassword,
    isBusy,
    alert,
    mode,
    setMode,
  }

  return (
    <WebAuthContext.Provider value={value}>{children}</WebAuthContext.Provider>
  )
}

const useWebAuth = (): WebAuthValue => useContext(WebAuthContext)

export { WebAuthProvider, useWebAuth }
