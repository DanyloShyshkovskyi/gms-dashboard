import { useLocation } from 'react-router'

export const Component = () => {
  const data = useLocation()
  console.log(data)
  return (
    <>
      <h1>Component</h1>
    </>
  )
}
