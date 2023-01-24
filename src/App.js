import { CartContextProvider } from './context/CartContext'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/UI/AppRouter'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export { App }
