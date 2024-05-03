import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // or we can use Infinity
      retry: 0,
      refetchOnWindowFocus: false,
      select: (data) => data?.data,
    },
  },
})

export const withQuery = (component) => () =>
  (
    <QueryClientProvider client={queryClient} contextSharing>
      {component()}
    </QueryClientProvider>
  )
