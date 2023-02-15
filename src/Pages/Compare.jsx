import { useEffect, useState } from 'react'
import { PostService } from '../API/PostService'
import { useFetching } from '../hooks/useFetching'

const Compare = () => {
  const [devices, setDevices] = useState([])
  const [fetchDevices] = useFetching(async () => {
    const response = await PostService.getCompare()
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
