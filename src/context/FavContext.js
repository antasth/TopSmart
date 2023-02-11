import { useState, createContext } from 'react'

const FavContext = createContext()

const FavContextProvider = (props) => {
  const [favItems, setFavItems] = useState([])

  const addToFavorites = (item) => {
    if (!checkDeviceInFav(item)) {
      setFavItems((prev) => [...prev, item])
    }
  }

  const checkDeviceInFav = (device) => {
    return !!favItems.find((item) => item.key === device.key)
  }

  const delFromFavorites = (item) => {
    setFavItems(favItems.filter((favItem) => favItem.key !== item.key))
  }

  const getFullPrice = () => {
    return favItems.reduce((acc, curr) => acc + Number(curr.prices), 0)
  }

  const value = {
    favItems: favItems,
    addToFavorites: addToFavorites,
    delFromFavorites: delFromFavorites,
    checkDeviceInFav: checkDeviceInFav,
    getFullPrice: getFullPrice,
    setFavItems: setFavItems,
  }
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  )
}

export { FavContext, FavContextProvider }
