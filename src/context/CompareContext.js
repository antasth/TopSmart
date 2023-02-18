import { createContext, useState } from 'react'

const CompareContext = createContext()

const CompareContextProvider = (props) => {
  const [compareItems, setCompareItems] = useState([])

  const addToCompare = (item) => {
    if (!checkDeviceInCompare(item)) {
      setCompareItems((prev) => [...prev, item])
    }
  }

  const checkDeviceInCompare = (device) => {
    return !!compareItems.find((item) => item.key === device.key)
  }

  const delFromCompareItems = (item) => {
    setCompareItems(compareItems.filter((favItem) => favItem.key !== item.key))
  }

  const value = {
    compareItems: compareItems,
    addToCompare: addToCompare,
    delFromCompareItems: delFromCompareItems,
  }

  return (
    <CompareContext.Provider value={value}>
      {props.children}
    </CompareContext.Provider>
  )
}

export { CompareContext, CompareContextProvider }
