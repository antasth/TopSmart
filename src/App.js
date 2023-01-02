import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Drawer from './components/Drawer/Drawer'
import ModalCard from './components/ModalCard/ModalCard'

function App() {
  const [activeCart, setActiveCart] = useState(false)
  const [modal, setModal] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (item) => {
    setCartItems([...cartItems, item])
  }
  const deleteItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  }

  const toggleCart = () => {
    setActiveCart(!activeCart)
  }
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      <Header onShowCart={toggleCart} />
      <Search />
      <div className="content flex-1">
        <Cards
          toggleModal={toggleModal}
          toggleCart={toggleCart}
          onAddToCart={onAddToCart}
        />
      </div>
      <Footer />

      {activeCart && (
          <Drawer
            toggleCart={toggleCart}
            cartItems={cartItems}
            deleteItem={deleteItem}
          />
      )}
      {modal && <ModalCard toggleModal={toggleModal} />}
    </div>
  )
}

export default App
