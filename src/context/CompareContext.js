import { createContext, useState } from 'react'

const CompareContext = createContext()

const CompareContextProvider = (props) => {
  const [compareItems, setCompareItems] = useState([])

  const addToCompare = (device) => {
    if (!checkDeviceInCompare(device) && compareItems.length < 3) {
      setCompareItems((prev) => [...prev, device])
    }
  }

  const checkDeviceInCompare = (device) => {
    return !!compareItems.find((item) => item.key === device.key)
  }

  const delFromCompare = (device) => {
    setCompareItems(
      compareItems.filter((favItem) => favItem.key !== device.key)
    )
  }

  const toggleCompare = (device) => {
    checkDeviceInCompare(device) ? delFromCompare(device) : addToCompare(device)
  }

  const value = {
    compareItems: compareItems,
    setCompareItems: setCompareItems,
    addToCompare: addToCompare,
    toggleCompare: toggleCompare,
    delFromCompare: delFromCompare,
    checkDeviceInCompare: checkDeviceInCompare,
  }

  return (
    <CompareContext.Provider value={value}>
      {props.children}
    </CompareContext.Provider>
  )
}

export { CompareContext, CompareContextProvider }
