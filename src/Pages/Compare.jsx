import { useEffect, useState } from 'react'
import { PostService } from '../API/PostService'
import { useFetching } from '../hooks/useFetching'

const Compare = () => {
  const [devices, setDevices] = useState([])
  const [fetchDevices] = useFetching(async () => {
    const response = await PostService.getCompare('11089,10237,11253')
    setDevices(response.data)
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
