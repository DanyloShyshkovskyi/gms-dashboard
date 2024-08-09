import { Dispatch, ReactNode, createContext, useContext, useState } from 'react'

import { IProject, IProjectRequest, useGetProjects } from 'shared/api/project'

interface ProjectContextType {
  data: IProjectRequest | undefined
  list: IProject[] | undefined
  isLoading: boolean
  isError: boolean
  viewMode: string
  setViewMode: Dispatch<React.SetStateAction<string>>
  activeFilter: string
  setActiveFilter: Dispatch<React.SetStateAction<string>>
}

// Define props for the BidsProvider
interface ProjectsProviderProps {
  children: ReactNode
}

const ProjectContext = createContext<ProjectContextType>({
  data: undefined,
  list: undefined,
  isLoading: true,
  isError: false,
  viewMode: 'table',
  setViewMode: () => {},
  activeFilter: 'all',
  setActiveFilter: () => {},
})

export const ProjectProvider: React.FC<ProjectsProviderProps> = ({
  children,
}) => {
  const { data, isLoading, isError } = useGetProjects()
  const [viewMode, setViewMode] = useState<string>('table')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  return (
    <ProjectContext.Provider
      value={{
        data,
        list: data?.list?.filter((item) =>
          activeFilter === 'all' ? true : item.status === activeFilter
        ),
        isLoading,
        isError,
        viewMode,
        setViewMode,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjectContext = (): ProjectContextType => {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectsProvider')
  }
  return context
}
