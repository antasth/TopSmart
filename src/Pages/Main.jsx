import { useState, useEffect } from 'react'
import { Cards } from '../components/Cards/Cards'
import { Header } from '../components/Header/Header'
import { Drawer } from '../components/Drawer/Drawer'

const Main = () => {
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
    saveToLocalStorage()
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  useEffect(() => {
    const getFromLocalStorage = () => {
      if (localStorage.getItem('cartItems')) {
        const items = JSON.parse(localStorage.getItem('cartItems'))
        setCartItems(items)
      }
    }
    getFromLocalStorage()
  }, [])

  useEffect(() => {
    if (cartItems) {
      setFullPrice(
        cartItems.reduce((acc, curr) => acc + Number(curr.prices), 0)
      )
      saveToLocalStorage()
    }
  }, [cartItems])

  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      <Header onShowCart={toggleCart} fullPrice={fullPrice} />
      <div className="content flex-1 ">
        <Cards
          toggleCart={toggleCart}
          onAddToCart={onAddToCart}
          cartItems={cartItems}
        />
      </div>

      {activeCart && (
        <Drawer
          toggleCart={toggleCart}
          deleteItem={deleteItem}
          cartItems={cartItems}
          fullPrice={fullPrice}
        />
      )}
    </div>
  )
}

export { Main }
