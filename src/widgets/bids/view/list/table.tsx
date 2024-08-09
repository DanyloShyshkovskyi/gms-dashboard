import { Link } from 'lucide-react'

import { useBidsContext } from 'widgets/bids'
import { formatDate } from 'widgets/bids/utils'

import { Mapper } from 'shared/controller'
import { Button } from 'shared/ui/button'
import { cn } from 'shared/utils'

const header = [
  { label: 'Client Name', key: 'clientName', className: 'col-span-4' },
  { label: 'Project Name', key: 'projectName', className: 'col-span-3' },
  { label: 'Date', key: 'date', className: 'col-span-2' },
  { label: 'Estimate', key: 'estimate', className: 'col-span-1' },
  { label: '', key: 'action', className: 'col-span-2' },
]

export const Table = () => {
  const { list, isLoading } = useBidsContext()
  return (
    <div className='grid rounded-3xl bg-white p-10 text-sm font-medium'>
      <div className='grid h-max grid-cols-12 rounded-3xl bg-blue-100 px-8 py-4 font-bold'>
        {header.map(({ className, label }, index) => (
          <div key={index} className={cn(className)}>
            {label}
          </div>
        ))}
      </div>
      <Mapper autoAnimate array={list}>
        {({ client_name, client_code, project_name, qty: date, estimate }) => (
          <div className=' grid h-max grid-cols-12 border-b px-8 py-3 transition-colors hover:bg-blue-50'>
            <div className='col-span-4 flex flex-col justify-center'>
              <strong>{client_name}</strong>
              <span className='text-gray-500'>{client_code}</span>
            </div>
            <div className='col-span-3 self-center'>{project_name}</div>
            <div className='col-span-2 self-center'>{formatDate(date)}</div>
            <strong className='col-span-1 self-center text-blue-700'>
              {estimate}
            </strong>
            <div className='col-span-2 flex items-center justify-end gap-4'>
              <Link size={15} />
              <Button className={'h-8 rounded-full text-xs'}>Convert</Button>
            </div>
          </div>
        )}
      </Mapper>
    </div>
  )
}
