import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../../Routes/routes'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.id}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default AppRouter
