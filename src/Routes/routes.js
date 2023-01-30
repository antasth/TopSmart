import { About } from '../Pages/About'
import { Error } from '../Pages/Error'
import { Main } from '../Pages/Main'
import { Favorite } from '../Pages/Favorite'
import { Cart } from '../Pages/Cart/Cart'

export const publicRoutes = [
  { id: 1, path: '/about', component: <About />, exact: true },
  { id: 2, path: '/error', component: <Error />, exact: true },
  { id: 3, path: '/', component: <Main />, exact: true },
  { id: 4, path: '/favorites', component: <Favorite />, exact: true },
  { id: 5, path: '/cart', component: <Cart />, exact: true },
]
