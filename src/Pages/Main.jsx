import { useEffect, useContext } from 'react'
import { Cards } from '../components/Cards/Cards'
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
    <>
      <Cards />
    </>
  )
}

export { Main }
