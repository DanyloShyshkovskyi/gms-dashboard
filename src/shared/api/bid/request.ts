import { useQuery } from '@tanstack/react-query'

import { GET } from 'shared/api'

import { IBidRequest } from './type'

export const useGetBids = () =>
  useQuery({
    queryKey: ['bids'],
    queryFn: () => GET<IBidRequest>('/bids.json'),
  })
