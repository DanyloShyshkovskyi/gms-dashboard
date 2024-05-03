import { withRouter } from './with-router'
import { withQuery } from './with-query'
import compose from 'compose-function/module'

export const withProviders = compose(withQuery, withRouter)
