import { BiHeart } from 'react-icons/bi'
import { FaPlusCircle } from 'react-icons/fa'

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
  console.log(img)
  return (
    <div className="card ">
      <div className="relative cursor-zoom-in">
        <img src={require('../assets/img/POCO/M4_Pro_4G/1.jpg')} alt="phone" />
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