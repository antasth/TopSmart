import { BiHeart } from 'react-icons/bi'
import { FaPlusCircle } from 'react-icons/fa'
import styles from './Card.module.scss'

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

  return (
    <div className={styles.card}>
      <div className="relative cursor-zoom-in">
        <img src={require('../../assets/img/' + img + '/1.jpg')} alt="phoneimg" />
        <FaPlusCircle className="plusBtn" />
      </div>

      <h5 className="mt-4">
        "{display} Смартфон {production} {model} {color} [{proc} {procModel}{' '}
        {ram}, {rom} {simCount} SIM, {displaySize}, камера {camera}, {battery}{' '}
        мА*ч]
      </h5>

      <div className="flex justify-between items-center mt-5">
        <b> 15 999 ₽</b>
        <div className="flex">
          <button className="button grayButton">
            <BiHeart />
          </button>
          <button className="button first"> Купить</button>
        </div>
      </div>
    </div>
  )
}

export default Card
