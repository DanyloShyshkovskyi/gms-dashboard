import { BrowserRouter } from 'react-router-dom'
import { BASE_URL } from 'shared/config'

export const withRouter = (component) => () => <BrowserRouter basename={BASE_URL}>{component()}</BrowserRouter>
