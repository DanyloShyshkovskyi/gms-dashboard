import { ReactNode, createContext, useContext, useState } from 'react'

import { IBid, IBidRequest, useGetBids } from 'shared/api/bid'

interface BidsContextType {
  data: IBidRequest | undefined
  list: IBid[] | undefined
  isLoading: boolean
  isError: boolean
  viewMode: string
  setViewMode: React.Dispatch<React.SetStateAction<string>> | null
  activeFilter: string
  setActiveFilter: React.Dispatch<React.SetStateAction<string>> | null
}

// Define props for the BidsProvider
interface BidsProviderProps {
  children: ReactNode
}

const BidsContext = createContext<BidsContextType>({
  data: undefined,
  list: undefined,
  isLoading: true,
  isError: false,
  viewMode: 'table',
  setViewMode: null,
  activeFilter: 'all',
  setActiveFilter: null,
})

export const BidsProvider: React.FC<BidsProviderProps> = ({ children }) => {
  const { data, isLoading, isError } = useGetBids()
  const [viewMode, setViewMode] = useState<string>('table')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  return (
    <BidsContext.Provider
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
    </BidsContext.Provider>
  )
}

export const useBidsContext = (): BidsContextType => {
  const context = useContext(BidsContext)
  if (context === undefined) {
    throw new Error('useBidsContext must be used within a BidsProvider')
  }
  return context
}
