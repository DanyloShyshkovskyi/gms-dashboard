import { QueryCache, QueryClient } from '@tanstack/react-query'

import { toast } from 'sonner'

import { errorTransformer } from 'shared/utils'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // or we can use Infinity
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        toast.error(errorTransformer(error))
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(errorTransformer(error))
    },
  }),
})
