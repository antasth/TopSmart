import { useState } from 'react'
import styles from './Card.module.scss'
import BuyButton from '../UI/BuyButton/BuyButton'
import FavoriteButton from '../UI/FavoriteButton/FavoriteButton'
import MoreButton from '../UI/MoreButton/MoreButton'

const Card = ({
  display,
  production,
  model,
  ram,
  rom,
  color,
  proc,
  procModel,
  simCount,
  displaySize,
  camera,
  battery,
  img,
  toggleModal,
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
      <div className="relative cursor-zoom-in" onClick={toggleModal}>
        
        <img
          src={require('../../assets/img/' + img + '/1.jpg')}
          alt="phoneimg"
        />
        <MoreButton isCardHover={isCardHover} />
      </div>

      <h5 className="mt-4">
        "{display} Смартфон {production} {model} {color} [{proc} {procModel}{' '}
        {ram}, {rom} {simCount} SIM, {displaySize}, камера {camera}, {battery}{' '}
        мА*ч]
      </h5>

      <div className="flex justify-between items-center mt-5">
        <b> 15 999 ₽</b>
        <div className="flex">
          <FavoriteButton />
          <BuyButton isCardHover={isCardHover}>Купить</BuyButton>
        </div>
      </div>
    </div>
  )
}

export default Card
