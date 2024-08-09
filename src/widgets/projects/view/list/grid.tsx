import { CalculatorIcon } from 'lucide-react'

import { formatDate } from 'widgets/bids/utils'
import { useProjectContext } from 'widgets/projects'

import { Mapper } from 'shared/controller'
import { Button } from 'shared/ui/button'
import { Separator } from 'shared/ui/separator'

interface GridItemProps {
  client_name: string
  client_code: string
  project_name: string
  qty: number // Assuming qty is a timestamp or a number representing date
  estimate: string
}

const GridItem: React.FC<GridItemProps> = ({
  client_name,
  client_code,
  project_name,
  qty,
  estimate,
}) => {
  return (
    <div
      className={`group h-max cursor-pointer rounded-3xl bg-white p-6 pb-3 text-sm
    shadow-sidebar transition-colors ease-in-out hover:bg-blue-700
    hover:text-white
    `}
    >
      <div className='mb-4 flex items-center justify-between gap-2'>
        <div className='flex h-5 items-center gap-2'>
          <span className='text-gray-500 transition-colors group-hover:text-white'>
            {client_code}
          </span>
          <Separator orientation='vertical' />
          <span>{client_name}</span>
        </div>
        <Button
          className={
            'h-8 rounded-full text-xs transition-colors group-hover:bg-white group-hover:text-black'
          }
        >
          Convert
        </Button>
      </div>
      <div className='mb-5 flex flex-col'>
        <h3 className='text-2xl font-bold'>{project_name}</h3>
        <div>{formatDate(qty)}</div>
      </div>
      <div className='flex items-center gap-3 border-t pb-2 pt-4'>
        <CalculatorIcon className='size-5' />
        <strong>Estimate</strong>
        <div
          className={`rounded-md bg-blue-700 px-1.5 py-0.5 text-xs text-white
        transition-colors group-hover:bg-white group-hover:text-black
        `}
        >
          {estimate}
        </div>
      </div>
    </div>
  )
}

export const Grid: React.FC = () => {
  const { list } = useProjectContext()
  return (
    <Mapper
      autoAnimate
      array={list}
      children={GridItem}
      className={'grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'}
    />
  )
}
