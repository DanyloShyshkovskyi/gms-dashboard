import { ComponentType } from 'react'

import { useBidsContext } from 'widgets/bids/provider'

import { cn } from 'shared/utils'

// Define the types for props
interface ModeButtonProps {
  Icon: ComponentType // React component type
  value: string
}

export const ModeButton: React.FC<ModeButtonProps> = ({ Icon, value }) => {
  const { viewMode, setViewMode } = useBidsContext()
  const isActive = viewMode === value

  return (
    <button
      className={cn(
        isActive
          ? 'pointer-events-none bg-orange-100 text-orange-600'
          : 'text-gray-700',
        'rounded-md px-3 py-2 transition-colors'
      )}
      onClick={() => setViewMode(value)}
    >
      <Icon />
    </button>
  )
}
