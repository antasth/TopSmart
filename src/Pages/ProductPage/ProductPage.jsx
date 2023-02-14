import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductCards } from '../../components/ProductCards/ProductCards'
import { ProductDescription } from '../../components/ProductDescription/ProductDescription'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { ProductSpecs } from '../../components/ProductSpecs/ProductSpecs'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const scrollRef = useRef(null)
  const scrollTo = () => scrollRef.current.scrollIntoView()
  const device = useLocation()
  const { device_name, display_size, storage, ram, pictures } = device.state
  return (
    <div>
      <h1>
        {display_size} {device_name} {storage} {ram}
      </h1>
      <div className={styles.content}>
        <div className={styles.procuct_card_top}>
          <ProductSlider pictures={pictures} name={device_name} />
          <ProductSpecs device={device.state} scrollTo={scrollTo}/>
          <ProductCards device={device.state} />
        </div>
        <div className={styles.procuct_description}>
          <ProductDescription scrollRef={scrollRef} device={device.state} />
        </div>
      </div>
    </div>
  )
}

export { ProductPage }

