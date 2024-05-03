import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import { useToken } from 'shared/api'

const Homepage = lazy(() => import('pages/Home'))
const About = lazy(() => import('pages/About'))
const Contact = lazy(() => import('pages/Contact'))

const fallback = <>..Loaadiinnggg.</>

export const Routing = () => {
  useToken()

  return (
    <Suspense fallback={fallback}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Suspense>
  )
}
