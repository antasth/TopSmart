import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { ProductSpecs } from '../../components/ProductSpecs/ProductSpecs'
import { BuyButton } from '../../components/UI/BuyButton/BuyButton'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const device = useLocation()
  const cart = useContext(CartContext)
  console.log(device.state)
  const { device_name, display_size, storage, ram, pictures, prices } =
    device.state
  return (
    <div>
      <h1>
        {display_size} {device_name} {storage} {ram}
      </h1>

      <div className={styles.content}>
        <ProductSlider data={pictures} />
        <ProductSpecs {...device.state} />

        <section className={styles.controls}>
          <div className={styles.price}>
            <div className={styles.pricetext}>
              <b>{slicePrice(prices)} ₽</b>
              <div className={styles.pricedefault}>
                {slicePrice(prices + 2500)}
              </div>
            </div>
            <BuyButton
              onAddToCart={() => cart.onAddToCart(device.state)}
              isActive={cart.cartItems.includes(device.state) ? true : false}
            >
              Купить
            </BuyButton>
          </div>
          <div className={styles.controls}>123</div>
        </section>
      </div>
    </div>
  )
}

export { ProductPage }
