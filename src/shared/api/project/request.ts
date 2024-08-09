import { useQuery } from '@tanstack/react-query'

import { GET } from 'shared/api'

import { IProjectRequest } from './type'

export const useGetProjects = () =>
  useQuery({
    queryKey: ['projects'],
    queryFn: () => GET<IProjectRequest>('/projects.json'),
  })
