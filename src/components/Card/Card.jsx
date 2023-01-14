import { useState } from 'react'
import styles from './Card.module.scss'
import BuyButton from '../UI/BuyButton/BuyButton'
import FavoriteButton from '../UI/FavoriteButton/FavoriteButton'
import MoreButton from '../UI/MoreButton/MoreButton'

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
  onImgClick,
  onAddToCart,
  showCart,
}) => {
  const [isCardHover, setIsCardHover] = useState(false)

  const hoverCardOn = () => {
    setIsCardHover(true)
  }
  const hoverCardOff = () => {
    setIsCardHover(false)
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={hoverCardOn}
      onMouseLeave={hoverCardOff}
    >
      <div className="relative cursor-zoom-in" onClick={onImgClick}>
        <img
          // src={require('../../assets/img/' + img + '/1.jpg')}
          src={device_image}
          alt="phoneimg"
        />
        <MoreButton isCardHover={isCardHover} />
      </div>

      <h5 className="mt-4">
        {display_size} {device_name} {storage.split(' ')[0]} {ram} {camera} {os_type.split(',')[0]} {battery}
      </h5>

      <div className="flex justify-between items-center mt-7">
        <b> {prices} ₽</b>
        <div className="flex">
          <FavoriteButton />
          <BuyButton
            isCardHover={isCardHover}
            onAddToCart={onAddToCart}
            showCart={showCart}
          >
            Купить
          </BuyButton>
        </div>
      </div>
    </div>
  )
}

export default Card
