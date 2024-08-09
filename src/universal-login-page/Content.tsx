import { useState } from 'react'

import { PasswordRecovery } from './PasswordRecovery'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { useWebAuth } from './WebAuthProvider'

export const Content = (): JSX.Element => {
  const { mode } = useWebAuth()
  const [email, setEmail] = useState('')

  return (
    <div>
      <div
        variant='outlined'
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {mode === 'signUp' ? (
          <SignUp email={email} setEmail={setEmail} />
        ) : (
          <>
            {mode === 'signIn' ? (
              <SignIn email={email} setEmail={setEmail} />
            ) : (
              <PasswordRecovery email={email} setEmail={setEmail} />
            )}
          </>
        )}
      </div>
    </div>
  )
}
