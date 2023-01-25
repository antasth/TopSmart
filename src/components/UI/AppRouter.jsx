import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../../Routes/routes'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Drawer } from '../Drawer/Drawer'

const AppRouter = () => {
  const cart = useContext(CartContext)
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
