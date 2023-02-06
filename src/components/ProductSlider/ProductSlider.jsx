import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Thumbs } from 'swiper'
import styles from './ProductSlider.module.scss'

const ProductSlider = ({ data }) => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null)
  return (
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
              {data.map((slide, index) => {
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
            {data.map((slide, index) => {
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
  )
}

export { ProductSlider }
