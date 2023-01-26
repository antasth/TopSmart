import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { saveToLocalStorage } from '../../Utils/PageFunctions'
import { publicRoutes } from '../../Routes/routes'
import { CartContext } from '../../context/CartContext'
import { FavContext } from '../../context/FavContext'
import { Drawer } from '../Drawer/Drawer'

const AppRouter = () => {
  const cart = useContext(CartContext)
  const fav = useContext(FavContext)

  useEffect(() => {
    cart.getFromLocalStorage()
  }, [])

  useEffect(() => {
    if (cart.cartItems) {
      cart.getFullPrice()
      saveToLocalStorage('cartItems', cart.cartItems)
    }
  }, [cart.cartItems])

  useEffect(() => {
    if (fav.favItems) {
      saveToLocalStorage('favItems', fav.favItems)
    }
  }, [fav.favItems])



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
