import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { AppRouter } from './components/UI/AppRouter'
import { CartContextProvider } from './context/CartContext'
import { CompareContextProvider } from './context/CompareContext'
import { FavContextProvider } from './context/FavContext'
import { ScrollToTop } from './helpers/ScrollToTop'

function App() {
  return (
    <ChakraProvider resetCSS={false}>
      <CartContextProvider>
        <FavContextProvider>
          <CompareContextProvider>
            <Router>
              <ScrollToTop />
              <Header />
              <AppRouter />
              <Footer />
            </Router>
          </CompareContextProvider>
        </FavContextProvider>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export { App }
