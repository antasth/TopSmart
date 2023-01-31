import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../../Utils/PageFunctions'
import { publicRoutes } from '../../Routes/routes'
import { CartContext } from '../../context/CartContext'
import { FavContext } from '../../context/FavContext'
import { Drawer } from '../Drawer/Drawer'

const AppRouter = () => {
  const cart = useContext(CartContext)
  const fav = useContext(FavContext)

  useEffect(() => {
    getFromLocalStorage('cartItems', cart.setCartItems)
    getFromLocalStorage('favItems', fav.setFavItems)
  }, [])

  useEffect(() => {
    if (cart.cartItems) {
      cart.getFullPrice()
      saveToLocalStorage('cartItems', cart.cartItems)
    }
    if (cart.cartItems.length === 0) {
      cart.setActiveCart(false)
    }
    if (fav.favItems) {
      saveToLocalStorage('favItems', fav.favItems)
    }
  }, [cart.cartItems, fav.favItems])

  return (
    <>
      <div className="wrapper relative flex grow">
        <div className="content flex flex-col grow my-0 mx-auto max-w-[1200px]">
          <Routes>
            {publicRoutes.map((route) => (
              <Route
                key={route.id}
                element={route.component}
                path={route.path}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
      </div>
      {cart.activeCart && <Drawer />}
    </>
  )
}

export { AppRouter }
