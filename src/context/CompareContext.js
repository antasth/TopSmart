import { createContext, useState } from 'react'

const CompareContext = createContext()

const CompareContextProvider = (props) => {
  const [compare, setCompare] = useState([])

  const onAddToCompare = (key) => {
    const deviceId = key.split('-')[1]
    if (!checkDeviceInCompare(deviceId)) {
      setCompare((prev) => [...prev, deviceId])
    }
  }

  const checkDeviceInCompare = (key) => {
    return !!compare.find((item) => item === key)
  }

  const value = {
    compare: compare,
    onAddToCompare: onAddToCompare,
  }

  return (
    <CompareContext.Provider value={value}>
      {props.children}
    </CompareContext.Provider>
  )
}

export { CompareContext, CompareContextProvider }
