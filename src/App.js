import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Drawer from './components/Drawer/Drawer'

function App() {
  const [activeCart, setActiveCart] = useState(false)

  const toggleCart = () => {
    setActiveCart(!activeCart)
  }
  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      <Drawer isActive={activeCart} toggleCart={toggleCart} />
      <Header toggleCart={toggleCart} />

      <div className="content flex-1">
        <Search />
        <Cards />
      </div>

      <Footer />
    </div>
  )
}

export default App
