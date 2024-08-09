import compose from 'compose-function'
import { withAuth0 } from './with-auth0'
import { withModal } from './with-modal'
import { withQuery } from './with-query'

export const withProviders = compose(withQuery, withAuth0, withModal)
