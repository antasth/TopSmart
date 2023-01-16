import { BsXLg } from 'react-icons/bs'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Logo from '../UI/Logo/Logo'
import styles from './Gallery.module.scss'

const Gallery = ({ pictures, toggleGallery }) => {
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
        lod2d2dgo
        <BsXLg className={styles.close} onClick={toggleGallery} />
        {pictures.map((pic) => (
          <SwiperSlide key={pic} className={styles.swiperSlide}>
            <img src={pic} alt="phoneimg" />
          </SwiperSlide>
        ))}
        <BsXLg onClick={toggleGallery} />
        logogo
      </Swiper>
    </>
  )
}

export default Gallery
