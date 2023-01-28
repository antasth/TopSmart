import { useState, createContext } from 'react'

const FavContext = createContext()

const FavContextProvider = (props) => {
  const [favItems, setFavItems] = useState([])

  const addToFavorites = (item) => {
    setFavItems((prev) => [...prev, item])
  }

  const delFromFavorites = (item) => {
    setFavItems(favItems.filter((favItem) => favItem.key !== item.key))

  }

  const value = {
    favItems: favItems,
    addToFavorites: addToFavorites,
    delFromFavorites: delFromFavorites,
    setFavItems: setFavItems,
  }
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  )
}

export { FavContext, FavContextProvider }
