import { About } from '../Pages/About'
import { Cart } from '../Pages/Cart/Cart'
import { Compare } from '../Pages/Compare'
import { Error } from '../Pages/Error'
import { Favorite } from '../Pages/Favorite/Favorite'
import { Main } from '../Pages/Main'
import { ProductPage } from '../Pages/ProductPage/ProductPage'

export const publicRoutes = [
  { id: 1, path: '/about', component: <About />, exact: true },
  { id: 2, path: '/error', component: <Error />, exact: true },
  { id: 3, path: '/ReactShop', component: <Main />, exact: true },
  { id: 4, path: '/favorites', component: <Favorite />, exact: true },
  { id: 5, path: '/cart', component: <Cart />, exact: true },
  { id: 6, path: '/product/:id', component: <ProductPage /> },
  { id: 7, path: '/compare', component: <Compare /> },
]
