import { useState, useEffect, useContext } from 'react'
import { Cards } from '../components/Cards/Cards'
import { Header } from '../components/Header/Header'
import { Drawer } from '../components/Drawer/Drawer'
import { Favorite } from './Favorite'
import { CartContext } from '../context/CartContext'

const Main = () => {
  const cart = useContext(CartContext)
  // const [activeCart, setActiveCart] = useState(false)
  // const [cartItems, setCartItems] = useState([])
  // const [activeFavorite, setActiveFavorite] = useState(false)
  // const [favoriteItems, setFavoriteItems] = useState([])
  // const [fullPrice, setFullPrice] = useState()

  // const toggleCart = () => {
  //   setActiveCart(!activeCart)
  // }

  // const toggleFavorite = () => {
  //   setActiveFavorite(!activeFavorite)
  // }

  // const onAddToCart = (item) => {
  //   setCartItems((prevState) => [...prevState, item])
  // }
  // const onAddToFavorite = (item) => {
  //   setFavoriteItems((prevState) => [...prevState, item])
  // }

  // const deleteItem = (item) => {
  //   setCartItems(cartItems.filter((cartItem) => cartItem.key !== item.key))
  //   saveToLocalStorage()
  // }

  // const saveToLocalStorage = () => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems))
  // }

  useEffect(() => {
    cart.getFromLocalStorage()
  }, [])

  useEffect(() => {
    if (cart.cartItems) {
      cart.setFullPrice(
        cart.cartItems.reduce((acc, curr) => acc + Number(curr.prices), 0)
      )
      cart.saveToLocalStorage()
    }
  }, [cart.cartItems])

  return (
    // <></>
    <div className="wrapper relative flex flex-col min-h-screen">
      Main Page
      <div className="content flex-1 ">
        <Cards
        // toggleCart={toggleCart}
        // onAddToCart={onAddToCart}
        // cartItems={cartItems}
        />
      </div>
      {cart.activeCart && (
        <Drawer
        // toggleCart={toggleCart}
        // deleteItem={deleteItem}
        // cartItems={cartItems}
        // fullPrice={fullPrice}
        />
      )}
    </div>
  )
}

export { Main }
