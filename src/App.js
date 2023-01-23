import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/UI/AppRouter'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export { App }
