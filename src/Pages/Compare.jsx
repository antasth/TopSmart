import { useContext, useEffect, useState } from 'react'
import { PostService } from '../API/PostService'
import { CompareContext } from '../context/CompareContext'
import { useFetching } from '../hooks/useFetching'

const Compare = () => {
  const comp = useContext(CompareContext)
  const [devices, setDevices] = useState([])
  const [fetchDevices] = useFetching(async () => {
    setDevices([])
    comp.compareKeys.map((key) =>
      PostService.getDevice(key).then((response) =>
        setDevices((prev) => [...prev, response.data.data])
      )
    )
  })

  useEffect(() => {
    fetchDevices()
  }, [])

  console.log(devices)
  return (
    <div>
      <h1>Страница сравнения</h1>
    </div>
  )
}

export { Compare }
