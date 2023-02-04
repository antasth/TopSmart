import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './ProductPage.module.scss'
import { ProductRating } from '../../components/UI/ProductRating/ProductRating'

const ProductPage = () => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null)
  const device = useLocation()
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
              <span className={styles.value}>{display_size}</span>
            </li>
            <li>
              Процессор
              <span className={styles.value}>{chipset}</span>
            </li>
            <li>
              Оперативная память
              <span className={styles.value}>{ram}</span>
            </li>
            <li>
              Встроенная память
              <span className={styles.value}>{storage}</span>
            </li>
            <li>
              Камера
              <span className={styles.value}>{camera}</span>
            </li>
            <li>
              Батарея
              <span className={styles.value}>{battery}</span>
            </li>
          </ul>
          <ProductRating rating={rating} rateCount={rateCount} />
        </section>
      </div>
    </div>
  )
}

export { ProductPage }
