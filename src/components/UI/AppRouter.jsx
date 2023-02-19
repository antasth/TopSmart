import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CompareContext } from '../../context/CompareContext'
import { FavContext } from '../../context/FavContext'
import { publicRoutes } from '../../Routes/routes'
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../Utils/PageFunctions'
import { Drawer } from '../Drawer/Drawer'

const AppRouter = () => {
  const cart = useContext(CartContext)
  const fav = useContext(FavContext)
  const comp = useContext(CompareContext)

  useEffect(() => {
    getFromLocalStorage('cartItems', cart.setCartItems)
    getFromLocalStorage('favItems', fav.setFavItems)
    getFromLocalStorage('compareItems', comp.setCompareItems)
  }, [])

  useEffect(() => {
    if (cart.cartItems) {
      cart.getFullPrice()
      saveToLocalStorage('cartItems', cart.cartItems)
      cart.getCartItemsCount()
    }
    if (cart.cartItems.length === 0) {
      cart.setActiveCart(false)
    }
    if (fav.favItems) {
      saveToLocalStorage('favItems', fav.favItems)
    }
    if (comp.compareItems) {
      saveToLocalStorage('compareItems', comp.compareItems)
    }
  }, [cart.cartItems, fav.favItems, comp.compareItems])

  return (
    <>
      <div className="wrapper relative flex grow py-7">
        <div className="content flex flex-col grow my-0 px-5 mx-auto max-w-[1200px]">
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
