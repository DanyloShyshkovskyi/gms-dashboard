import { AxiosError } from 'axios'
import { ClassValue, clsx } from 'clsx'
import { Entries } from 'shared/types'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function keysFromObject<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[]
}

export function entriesFromObject<T extends object>(object: T): Entries<T> {
  return Object.entries(object) as Entries<T>
}

export function valuesFromObject<T extends object>(object: T): T[keyof T][] {
  return Object.values(object) as T[keyof T][]
}

export const errorTransformer = (error: unknown | Error) => {
  let message = 'An unknown error occurred'
  if (error instanceof AxiosError) {
    message = error.response?.data?.message || 'An unknown error occurred'
  }
  return `${message}`
}

export const getSearchValue = (key: string) => new URLSearchParams(window.location.search).get(key) || undefined
