import { useEffect, useContext } from 'react'
import { Cards } from '../components/Cards/Cards'
import { Drawer } from '../components/Drawer/Drawer'
import { CartContext } from '../context/CartContext'

const Main = () => {
  const cart = useContext(CartContext)

  useEffect(() => {
    cart.getFromLocalStorage()
  }, [])

  useEffect(() => {
    if (cart.cartItems) {
      cart.getFullPrice()
      cart.saveToLocalStorage()
    }
  }, [cart.cartItems])

  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      <div className="content flex-1 ">
        <Cards />
      </div>
      {cart.activeCart && <Drawer />}
    </div>
  )
}

export { Main }
