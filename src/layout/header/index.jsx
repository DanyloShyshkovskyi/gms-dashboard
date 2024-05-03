import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={'flex h-20 items-center justify-between border-b pl-3 pr-3'}>
      Header
      <ul className='flex gap-20'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  )
}
