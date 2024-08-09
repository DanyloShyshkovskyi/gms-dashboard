import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

import { queryClient } from 'shared/config/query-client'

export const withQuery = (component: () => ReactNode) => () => (
  <QueryClientProvider client={queryClient}>
    {component()}
    <ReactQueryDevtools position={'right'} />
  </QueryClientProvider>
)
