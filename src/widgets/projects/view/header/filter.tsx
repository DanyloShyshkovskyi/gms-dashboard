import { useBidsContext } from 'widgets/bids'
import { useProjectContext } from 'widgets/projects'

import { cn } from 'shared/utils'

interface FilterProps {
  label: string
  count: number
  value: string
}

export const Filter: React.FC<FilterProps> = ({ label, count, value }) => {
  const { activeFilter, setActiveFilter } = useProjectContext()
  const isActive = activeFilter === value

  return (
    <button
      className={`
        ${isActive ? 'pointer-events-none font-semibold' : 'bg-white text-gray-500'} 
        rounded-md px-4 py-2 text-sm transition-colors`}
      onClick={() => setActiveFilter(value)}
    >
      <span>{label}</span>
      <span
        className={cn(
          'ml-3 rounded-md p-1.5 ',
          isActive ? 'bg-blue-700 text-white' : 'bg-gray-200'
        )}
      >
        {count}
      </span>
    </button>
  )
}
