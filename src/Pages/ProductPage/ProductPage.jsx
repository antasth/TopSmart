import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Navigation, FreeMode, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null)
  const device = useLocation()
  console.log(device.state)
  const { device_name, display_size, storage, ram, pictures } = device.state
  return (
    <div>
      <h1>
        {display_size} {device_name} {storage} {ram}
      </h1>
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
                  modules={[Navigation, Thumbs, Mousewheel]}
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
                breakpoints={{
                  0: {
                    direction: 'horizontal',
                  },
                  768: {
                    direction: 'horizontal',
                  },
                }}
                className={styles.swiper_container2}
                modules={[Navigation, Thumbs, Mousewheel]}
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
        </section>
        <section className={styles.devicecard}>
          {display_size} {device_name} {storage} {ram}
        </section>
      </div>
    </div>
  )
}

export { ProductPage }
