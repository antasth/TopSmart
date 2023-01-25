import { CartContextProvider } from './context/CartContext'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/UI/AppRouter'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { FavContextProvider } from './context/FavContext'

function App() {
  return (
    <CartContextProvider>
      <FavContextProvider>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </FavContextProvider>
    </CartContextProvider>
  )
}

export { App }
