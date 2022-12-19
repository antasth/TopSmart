import { useState } from 'react'
import Card from './components/Card'
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
    <div className="wrapper relative">
      <Drawer isActive={activeCart} toggleCart={toggleCart}/>
      <Header toggleCart={toggleCart} />
      <Search />
      <div className="content ">
        <div className="cards flex flex-wrap mt-5 mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
