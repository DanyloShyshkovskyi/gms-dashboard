import { Separator } from '@radix-ui/react-separator'
import { Bookmark, Search } from 'lucide-react'
import { Input } from 'shared/ui/input'

export const Header = () => {
  return (
    <header className={'flex h-20 items-center justify-between border-b px-10'}>
      <div className='relative w-full max-w-xs overflow-hidden rounded-full bg-gray-100 p-1'>
        <Input placeholder='Search' className={' rounded-full border-none bg-transparent pr-10'} />
        <Search className='absolute right-4 top-3 size-5' />
      </div>
      <div className='flex gap-4'>
        <button className='flex items-center gap-3 text-sm text-gray-700'>
          <Bookmark className='size-4' />
          <span>Saved Pages</span>
        </button>
        <Separator orientation='vertical' className='h-8' />
      </div>
    </header>
  )
}
