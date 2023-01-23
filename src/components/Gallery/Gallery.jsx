import { BsXLg } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Logo } from '../UI/Logo/Logo'
import styles from './Gallery.module.scss'

const Gallery = ({ pictures, device_name, toggleGallery }) => {
  return (
    <>
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
        <div className={styles.header}>
          <Logo />
          <h3>{device_name}</h3>
          <BsXLg className={styles.close} onClick={toggleGallery} />
        </div>
        {pictures.map((pic) => (
          <SwiperSlide key={pic} className={styles.swiperSlide}>
            <img src={pic} alt="phoneimg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export { Gallery }
