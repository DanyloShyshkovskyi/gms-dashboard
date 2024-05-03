import axios from 'axios'
import { API_URL } from '../config'

export const apiInstance = axios.create({
  baseURL: API_URL,

  //add content type to header
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiPostInstance = apiInstance
