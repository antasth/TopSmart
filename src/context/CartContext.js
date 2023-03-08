import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = (props) => {
  const [activeCart, setActiveCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [fullPrice, setFullPrice] = useState()
  const [cartItemsCount, setCartItemsCount] = useState(0)

  const toggleCart = () => {
    if (cartItems.length) {
      setActiveCart(!activeCart)
    }
  }

  const onAddToCart = (item) => {
    if (!checkDeviceInCart(item)) {
      item.device_count = 1
      setCartItems((prevState) => [...prevState, item])
    }
  }

  const deleteItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.key !== item.key))
  }

  const checkDeviceInCart = (device) => {
    return !!cartItems.find((item) => item.key === device.key)
  }

  const getFullPrice = () => {
    setFullPrice(
      cartItems.reduce(
        (acc, curr) => acc + Number(curr.prices * curr.device_count),
        0
      )
    )
  }
  const getCartItemsCount = () => {
    setCartItemsCount(
      cartItems.reduce((acc, curr) => acc + curr.device_count, 0)
    )
  }

  const onChangeCount = (key, count) => {
    setCartItems(
      cartItems.map((obj) =>
        obj.key === key ? { ...obj, device_count: count } : obj
      )
    )
  }

  const value = {
    cartItems,
    fullPrice,
    activeCart,
    cartItemsCount,
    toggleCart,
    deleteItem,
    onAddToCart,
    getFullPrice,
    setCartItems,
    setActiveCart,
    onChangeCount,
    getCartItemsCount,
    checkDeviceInCart,
  }
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }

