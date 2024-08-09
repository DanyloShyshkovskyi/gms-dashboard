import { useQuery } from '@tanstack/react-query'

import { GET } from 'shared/api'

export const useFetch = (url: string) =>
  useQuery({
    queryKey: [url],
    queryFn: () => GET(url),
  })
