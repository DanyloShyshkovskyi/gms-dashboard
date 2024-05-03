import { useQuery } from 'react-query'
import { IS_PRODUCTION } from '../config'
import { apiInstance, apiPostInstance } from './base'

export const useFetch = (url) => useQuery(['fetch', url], () => apiInstance.get(url))

export const useToken = () =>
  useQuery('getToken', () => apiInstance.get(`/session/token`), {
    enabled: IS_PRODUCTION,
    // @ts-ignore
    onSuccess: (data) => (apiPostInstance.defaults.headers.common['X-CSRF-Token'] = data),
  })