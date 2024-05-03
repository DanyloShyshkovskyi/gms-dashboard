import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'shared/ui/button'

const Page = () => {
  useEffect(() => {
    console.log('Page mounted')
  }, [])

  return (
    <div>
      <h1>Page</h1>
      <Link to='/'>Home</Link>
      <Button>Click me</Button>
    </div>
  )
}

export default Page
