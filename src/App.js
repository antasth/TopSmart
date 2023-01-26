import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { FavContextProvider } from './context/FavContext'
import { AppRouter } from './components/UI/AppRouter'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

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
