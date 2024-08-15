import { useWebAuth } from 'auth0-pages/provider'

export const WebAuthAlert = (props: any): JSX.Element => {
  const { alert } = useWebAuth()

  if (!alert) {
    // eslint-disable-next-line unicorn/no-null
    return null
  }

  return <div>{alert.message}</div>
}
