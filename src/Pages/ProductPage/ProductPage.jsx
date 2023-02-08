import { useLocation } from 'react-router-dom'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { ProductSpecs } from '../../components/ProductSpecs/ProductSpecs'
import { ProductCards } from '../../components/ProductCards/ProductCards'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const device = useLocation()
  const { device_name, display_size, storage, ram, pictures } = device.state
  return (
    <div>
      <h1>
        {display_size} {device_name} {storage} {ram}
      </h1>
      <div className={styles.content}>
        <ProductSlider data={pictures} />
        <ProductSpecs device={device.state} />
        <ProductCards device={device.state} />
      </div>
    </div>
  )
}

export { ProductPage }
