import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Thumbs } from 'swiper'
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
  const [imagesNavSlider, setImagesNavSlider] = useState(null)
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
        <section className={styles.slider}>
          <div className={styles.slider__flex}>
            <div className={styles.slider__col}>
              <div className={styles.slider__thumbs}>
                <Swiper
                  onSwiper={setImagesNavSlider}
                  direction="vertical"
                  spaceBetween={15}
                  slidesPerView={8}
                  mousewheel={true}
                  className={styles.swiper_container1}
                  breakpoints={{
                    0: {
                      direction: 'horizontal',
                    },
                    768: {
                      direction: 'vertical',
                    },
                  }}
                  modules={[Thumbs, Mousewheel]}
                >
                  {pictures.map((slide, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className={styles.slider__image}>
                          <img src={slide} alt="" />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>

            <div className={styles.slider__images}>
              <Swiper
                thumbs={{ swiper: imagesNavSlider }}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={32}
                mousewheel={true}
                loop={true}
                breakpoints={{
                  0: {
                    direction: 'horizontal',
                  },
                  768: {
                    direction: 'horizontal',
                  },
                }}
                className={styles.swiper_container2}
                modules={[Thumbs, Mousewheel]}
              >
                {pictures.map((slide, index) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide} key={index}>
                      <div className={styles.slider__image}>
                        <img src={slide} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </section>
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
            </div>
            <BuyButton
              onAddToCart={() => cart.onAddToCart(device.state)}
              isActive={cart.cartItems.includes(device.state) ? true : false}
            >
              Добавить в корзину
            </BuyButton>
          </div>
        </section>
      </div>
    </div>
  )
}

export { ProductPage }
