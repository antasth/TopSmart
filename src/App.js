import { useState, useEffect } from 'react'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Drawer from './components/Drawer/Drawer'
import ModalCard from './components/ModalCard/ModalCard'

function App() {
  const [activeCart, setActiveCart] = useState(false)
  const [modal, setModal] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [fullPrice, setFullPrice] = useState()

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

  const toggleCart = () => {
    setActiveCart(!activeCart)
  }
  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      <Header onShowCart={toggleCart} fullPrice={fullPrice} />
      <div className="content flex-1 ">
        <Cards
          toggleModal={toggleModal}
          toggleCart={toggleCart}
          onAddToCart={onAddToCart}
          cartItems={cartItems}
        />
      </div>
      <Footer />

      {activeCart && (
        <Drawer
          toggleCart={toggleCart}
          cartItems={cartItems}
          deleteItem={deleteItem}
          fullPrice={fullPrice}
        />
      )}
      {modal && <ModalCard toggleModal={toggleModal} />}
    </div>
  )
}

export default App
