import { BiHeart } from 'react-icons/bi'
import { FaPlusCircle } from 'react-icons/fa'

const Card = () => {
  return (
    <div className="card ">
      <div className="relative cursor-zoom-in">
        <img src={require('../img/1.jpg')} alt="phone" />
        <FaPlusCircle className="plusBtn" />
      </div>

      <h5 className='mt-4'>5" Смартфон Itel A17 16 ГБ голубой [4x(1.3 ГГц), 1 Гб, 2 SIM, TN, 854x480, камера 5 Мп, 3G, FM, 2400 мА*ч]</h5>

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
