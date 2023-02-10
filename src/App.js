import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { FavContextProvider } from './context/FavContext'
import { AppRouter } from './components/UI/AppRouter'
import { ScrollToTop } from './helpers/ScrollToTop'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <ChakraProvider resetCSS={false}>
      <CartContextProvider>
        <FavContextProvider>
          <Router>
            <ScrollToTop />
            <Header />
            <AppRouter />
            <Footer />
          </Router>
        </FavContextProvider>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export { App }
