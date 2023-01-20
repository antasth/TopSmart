import About from '../Pages/About'
import Error from '../Pages/Error'
import Main from '../Pages/Main'

export const publicRoutes = [
  { id: 1, path: '/about', component: <About />, exact: true },
  { id: 2, path: '/error', component: <Error />, exact: true },
  { id: 3, path: '/', component: <Main />, exact: true },
]
