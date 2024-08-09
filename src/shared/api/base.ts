import axios, { AxiosRequestConfig } from 'axios'

import { API_URL } from '../config'

export const apiInstance = axios.create({
  baseURL: API_URL,

  //add content type to header
  headers: {
    'Content-Type': 'application/json',
  },
})

export const GET = async <T = any>(
  url: string,
  config?: AxiosRequestConfig<any> | undefined
) => apiInstance.get<T>(url, config).then((res) => res.data)
