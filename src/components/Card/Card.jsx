import { useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import { FaPlusCircle } from 'react-icons/fa'
import styles from './Card.module.scss'
import Button from '../UI/Button'

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
}) => {

const [isHover, setIsHover] = useState(false)

  const hoverCardOn = () => {
    setIsHover(true)
  }
  const hoverCardOff = () => {
    setIsHover(false)
  }

  return (
    <div onMouseEnter={hoverCardOn} onMouseLeave={hoverCardOff} className={styles.card}>
      <div className="relative cursor-zoom-in">
        <img src={require('../../assets/img/' + img + '/1.jpg')} alt="phoneimg" />
        <FaPlusCircle className={styles.plusBtn} />
      </div>

      <h5 className="mt-4">
        "{display} Смартфон {production} {model} {color} [{proc} {procModel}{' '}
        {ram}, {rom} {simCount} SIM, {displaySize}, камера {camera}, {battery}{' '}
        мА*ч]
      </h5>

      <div className="flex justify-between items-center mt-5">
        <b> 15 999 ₽</b>
        <div className="flex">
          <Button buttonClass="favoriteButton"> <BiHeart /> </Button>
          <Button buttonClass="buyButton" isHover={isHover}> Купить </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
