import { useParams, useLocation } from 'react-router-dom'

const ProductPage = () => {
  const params = useParams()
  const device = useLocation()
  console.log(device.state)
  return (
    <div>
      <h1>Страница товара {device.state.device_name}</h1>
    </div>
  )
}

export { ProductPage }
