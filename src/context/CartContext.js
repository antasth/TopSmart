import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = (props) => {
  const [activeCart, setActiveCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [fullPrice, setFullPrice] = useState()

  const toggleCart = () => {
    if (cartItems.length) {
      setActiveCart(!activeCart)
    }
  }

  const onAddToCart = (item) => {
    let device = cartItems.find((cartitem) => cartitem.key === item.key)
    if (!device) {
      item.device_count = 1
      setCartItems((prevState) => [...prevState, item])
    }
  }

  const deleteItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.key !== item.key))
  }

  const getFullPrice = () => {
    setFullPrice(cartItems.reduce((acc, curr) => acc + Number(curr.prices * curr.device_count), 0))
  }

  const onChangeCount = (key, count) => {
    setCartItems(
      cartItems.map((obj) => {
        if (obj.key === key) {
          return { ...obj, device_count: count }
        } else {
          return obj
        }
      })
    )
  }

  const value = {
    cartItems: cartItems,
    activeCart: activeCart,
    fullPrice: fullPrice,
    setActiveCart: setActiveCart,
    getFullPrice: getFullPrice,
    toggleCart: toggleCart,
    onAddToCart: onAddToCart,
    deleteItem: deleteItem,
    setCartItems: setCartItems,
    onChangeCount: onChangeCount,
  }
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
