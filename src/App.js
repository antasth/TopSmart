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

  const toggleCart = () => {
    setActiveCart(!activeCart)
  }
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      {activeCart ? <Drawer toggleCart={toggleCart} /> : null}
      {modal ? <ModalCard toggleModal={toggleModal} /> : null}
      <Header toggleCart={toggleCart} />
      <Search />
      <div className="content flex-1">
        <Cards toggleModal={toggleModal} />
      </div>
      <Footer />
    </div>
  )
}

export default App
