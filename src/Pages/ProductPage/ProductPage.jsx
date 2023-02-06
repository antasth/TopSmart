import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { ProductRating } from '../../components/UI/ProductRating/ProductRating'
import { BuyButton } from '../../components/UI/BuyButton/BuyButton'
import { slicePrice } from '../../Utils/PageFunctions'
import {
  IoStatsChartSharp,
  IoHeartOutline,
  IoShareSocialOutline,
} from 'react-icons/io5'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const device = useLocation()
  const cart = useContext(CartContext)
  console.log(device.state)
  const {
    device_name,
    display_size,
    storage,
    ram,
    battery,
    camera,
    chipset,
    pictures,
    rating,
    rateCount,
    prices,
  } = device.state
  return (
    <div>
      <div className={styles.header}>
        <h1>
          {display_size} {device_name} {storage} {ram}
        </h1>
      </div>
      <div className={styles.content}>
        <ProductSlider data={pictures}/>
        <section className={styles.devicecard}>
          <ul className={styles.devicespecs}>
            <h3>Основные характеристики</h3>
            <li>
              Экран
              <span>{display_size}</span>
            </li>
            <li>
              Процессор
              <span>{chipset}</span>
            </li>
            <li>
              Оперативная память
              <span>{ram}</span>
            </li>
            <li>
              Встроенная память
              <span>{storage}</span>
            </li>
            <li>
              Камера
              <span>{camera}</span>
            </li>
            <li>
              Батарея
              <span>{battery}</span>
            </li>
          </ul>
          <div className={styles.review}>
            <ProductRating rating={rating} rateCount={rateCount} />
            <div className={styles.actions}>
              <IoStatsChartSharp className={styles.icon} />
              <IoHeartOutline className={styles.icon} />
              <IoShareSocialOutline className={styles.icon} />
            </div>
          </div>
        </section>
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
