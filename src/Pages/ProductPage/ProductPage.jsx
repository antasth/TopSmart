import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Navigation,FreeMode, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        mousewheel={true}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Mousewheel, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {pictures.map((picture) => (
              <SwiperSlide>
                <img src={picture} alt="phoneimg" />
              </SwiperSlide>
            ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {pictures.map((picture) => (
              <SwiperSlide>
                <img src={picture} alt="phoneimg" />
              </SwiperSlide>
            ))}
      </Swiper>
          {/* <Swiper
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
          </Swiper> */}
        </div>
        <div className={styles.devicecard}>
        {display_size} {device_name} {storage} {ram}
        </div>
      </div>
    </div>
  )
}

export { ProductPage }
