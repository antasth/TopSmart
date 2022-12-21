import { useState } from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Drawer from './components/Drawer'

function App() {
  const [activeCart, setActiveCart] = useState(false)

  const toggleCart = () => {
    setActiveCart(!activeCart)
  }
  return (
    <div className="wrapper relative flex flex-col min-h-screen">
      <Drawer isActive={activeCart} toggleCart={toggleCart} />
      <Header toggleCart={toggleCart} />
      <Search />
      <div className="content flex-1">
        <Cards />
      </div>

      <Footer />
    </div>
  )
}

export default App
