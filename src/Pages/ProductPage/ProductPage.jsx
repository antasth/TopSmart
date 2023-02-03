import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const device = useLocation()
  console.log(device.state)
  const { device_name, display_size, storage, ram, pictures } = device.state
  return (
    <div>
      <h1>
        {display_size} {device_name} {storage} {ram}
      </h1>
      <div className={styles.content}>
        <div className={styles.slider}>
          <Swiper
            mousewheel={true}
            direction={'horizontal'}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Mousewheel, Pagination, Navigation]}
            className={styles.swiper}
          >
            {pictures.map((picture) => (
              <SwiperSlide>
                <img src={picture} alt="phoneimg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.devicecard}></div>
      </div>
    </div>
  )
}

export { ProductPage }
