import { useState, createContext } from 'react'

const FavContext = createContext()

const FavContextProvider = (props) => {
  const [favItems, setFavItems] = useState([])

  const addToFavorites = (item) => {
    setFavItems((prev) => [...prev, item])
  }

  const value = {
    favItems: favItems,
    addToFavorites: addToFavorites,
  }
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  )
}

export { FavContext, FavContextProvider }
