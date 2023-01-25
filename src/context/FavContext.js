import { useState, createContext } from 'react'

const FavContext = createContext()

const FavContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (item) => {
    setFavorites((prev) => [...prev, item])
  }

  const value = {
    favorites: favorites,
    addToFavorites: addToFavorites,
  }
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  )
}

export { FavContext, FavContextProvider }
