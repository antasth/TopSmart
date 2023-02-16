import { createContext, useState } from 'react'

const CompareContext = createContext()

const CompareContextProvider = (props) => {
  const [compareKeys, setCompareKeys] = useState([])

  const onAddToCompare = (key) => {
    if (!checkDeviceInCompare(key)) {
      setCompareKeys((prev) => [...prev, key])
    }
  }

  const checkDeviceInCompare = (key) => {
    return !!compareKeys.find((item) => item === key)
  }

  const value = {
    compareKeys: compareKeys,
    onAddToCompare: onAddToCompare,
  }

  return (
    <CompareContext.Provider value={value}>
      {props.children}
    </CompareContext.Provider>
  )
}

export { CompareContext, CompareContextProvider }

