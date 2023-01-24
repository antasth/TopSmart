import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = (props) => {
  const [activeCart, setActiveCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [fullPrice, setFullPrice] = useState()

  const toggleCart = () => {
    setActiveCart(!activeCart)
  }

  const onAddToCart = (item) => {
    setCartItems((prevState) => [...prevState, item])
  }

  const deleteItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.key !== item.key))
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  const getFromLocalStorage = () => {
    if (localStorage.getItem('cartItems')) {
      const items = JSON.parse(localStorage.getItem('cartItems'))
      setCartItems(items)
    }
  }

  const getFullPrice = () => {
    setFullPrice(cartItems.reduce((acc, curr) => acc + Number(curr.prices), 0))
  }

  const value = {
    cartItems: cartItems,
    activeCart: activeCart,
    fullPrice: fullPrice,
    getFullPrice: getFullPrice,
    toggleCart: toggleCart,
    onAddToCart: onAddToCart,
    deleteItem: deleteItem,
    saveToLocalStorage: saveToLocalStorage,
    getFromLocalStorage: getFromLocalStorage,
  }
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
