import { viewModes } from 'widgets/bids/constant'
import { useProjectContext } from 'widgets/projects'

import { Mapper } from 'shared/controller'

import { Filter } from './filter'
import { ModeButton } from './mode-button'

const Separator = () => <div className='h-0.5 w-5 bg-gray-300' />

export const FilterHeader = () => {
  const { data } = useProjectContext()

  return (
    <div className='mb-3 flex items-center justify-between gap-3 rounded-3xl border bg-white p-3 shadow-sidebar'>
      <Mapper
        array={data?.types}
        children={Filter}
        className={' flex items-center gap-2'}
      />
      <Mapper
        array={viewModes}
        children={ModeButton}
        className={'flex gap-2'}
      />
    </div>
  )
}
