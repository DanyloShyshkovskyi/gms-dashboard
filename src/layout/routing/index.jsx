import NotFound from 'pages/NotFound'
import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { useToken } from 'shared/api'

const Dashboard = lazy(() => import('pages/Dashboard'))
const Projects = lazy(() => import('pages/Projects'))
const Contact = lazy(() => import('pages/Bids'))

const fallback = <></>

export const Routing = () => {
  useToken()

  return (
    <Suspense fallback={fallback}>
      <Routes>
        <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/bids' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
