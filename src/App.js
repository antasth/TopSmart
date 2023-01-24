import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/UI/AppRouter'
import { Footer } from './components/Footer/Footer'
import { CartContextProvider } from './context/CartContext'
import { Header } from './components/Header/Header'

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
