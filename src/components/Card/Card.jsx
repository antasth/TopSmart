import { useState } from 'react'
import styles from './Card.module.scss'
import BuyButton from '../UI/BuyButton/BuyButton'
import FavoriteButton from '../UI/FavoriteButton/FavoriteButton'
import MoreButton from '../UI/MoreButton/MoreButton'

const Card = (
{  // props
  brand_name,
  device_name,
  device_image,
  // onImgClick,
  // onBuyClick,
  // showCart
}
) => {
  const [isCardHover, setIsCardHover] = useState(false)

  const hoverCardOn = () => {
    setIsCardHover(true)
  }
  const hoverCardOff = () => {
    setIsCardHover(false)
  }
  // console.log('CARD',props)
  return (
    <div
      className={styles.card}
      onMouseEnter={hoverCardOn}
      onMouseLeave={hoverCardOff}
    >
      <div className="relative cursor-zoom-in" 
      // onClick={onImgClick}
      >
        <img
          // src={require('../../assets/img/' + img + '/1.jpg')}
          src={device_image}
          alt="phoneimg"
        />
        <MoreButton isCardHover={isCardHover} />
      </div>

      <h5 className="mt-4">
        {brand_name} {device_name}
         {/* Смартфон {production} {model} {color} [{proc} {procModel}{' '}
        {ram}, {rom} {simCount} SIM, {displaySize}, камера {camera}, {battery}{' '}
        мА*ч] */}
      </h5>

      <div className="flex justify-between items-center mt-5">
        {/* <b> {price} ₽</b> */}
        <b> 111 ₽</b>
        <div className="flex">
          <FavoriteButton />
          {/* <BuyButton isCardHover={isCardHover} onBuyClick={onBuyClick} showCart={showCart}>
            Купить
          </BuyButton> */}
        </div>
      </div>
    </div>
  )
}

export default Card