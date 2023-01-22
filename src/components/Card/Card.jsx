import { useState } from 'react'
import styles from './Card.module.scss'
import BuyButton from '../UI/BuyButton/BuyButton'
import FavoriteButton from '../UI/FavoriteButton/FavoriteButton'
import MoreButton from '../UI/MoreButton/MoreButton'
import Gallery from '../Gallery/Gallery'
import ProductRating from '../UI/ProductRating/ProductRating'

const Card = ({
  device_name,
  device_image,
  display_size,
  ram,
  battery,
  storage,
  os_type,
  camera,
  prices,
  rateCount,
  pictures,
  onAddToCart,
  showCart,
  isActive,
}) => {
  const [isCardHover, setIsCardHover] = useState(false)
  const [gallery, setGallery] = useState(false)

  const toggleGallery = () => {
    setGallery(!gallery)
    !gallery
      ? document.body.classList.add('locked')
      : document.body.classList.remove('locked')
  }

  const hoverCardOn = () => {
    setIsCardHover(true)
  }
  const hoverCardOff = () => {
    setIsCardHover(false)
  }

  return (
    <>
      <div
        className={styles.card}
        onMouseEnter={hoverCardOn}
        onMouseLeave={hoverCardOff}
      >
        <div className="relative cursor-zoom-in" onClick={toggleGallery}>
          {/* <div className="relative cursor-zoom-in" onClick={}> */}
          <img
            // src={require('../../assets/img/' + img + '/1.jpg')}
            src={device_image}
            alt="phoneimg"
          />
          <MoreButton isCardHover={isCardHover} />
        </div>

        <h5 className="mt-4">
          {display_size} {device_name} {storage.split('/')[0]}{' '}
          {ram.split('/')[1]} {camera} {os_type.split(',')[0]} {battery}
        </h5>
        <ProductRating rateCount={rateCount}/>
        <div className="flex justify-between items-center mt-7">
          <b> {prices} ₽</b>
          <div className="flex">
            <FavoriteButton />
            <BuyButton
              isCardHover={isCardHover}
              onAddToCart={onAddToCart}
              showCart={showCart}
              isActive={isActive}
            >
              Купить
            </BuyButton>
          </div>
        </div>
      </div>
      {gallery && (
        <Gallery
          pictures={pictures}
          device_name={device_name}
          toggleGallery={toggleGallery}
        />
      )}
    </>
  )
}

export default Card
