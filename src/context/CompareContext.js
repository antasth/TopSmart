import { createContext, useState } from 'react'

const CompareContext = createContext()

const CompareContextProvider = (props) => {
  const [compare, setCompare] = useState([])

  const onAddToCompare = (device) => {
    if (checkDeviceInCompare(device)) {
      const deviceId = device.key.split('-')[1]
      setCompare((prev) => [...prev, deviceId])
    }
  }

  const checkDeviceInCompare = (device) => {
    return !!compare.find((item) => item.key === device.key)
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

export { CompareContextProvider }
