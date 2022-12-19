import { BsX } from 'react-icons/bs'
import { BiExit } from 'react-icons/bi'

const Drawer = ({ isActive, toggleCart }) => {
  return (
    <div
      style={isActive ? { display: 'block' } : { display: 'none' }}
      className="overlay"
      onClick={toggleCart}
    >
      <div
        className="drawer flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart">
          <div className="cart__header flex justify-between items-center mb-5">
            <h2>Корзина</h2>
            <button className="button grayButton">
              <BiExit onClick={toggleCart} />
            </button>
          </div>

          <div className="cartItems mb-10">
            <div className="cartItem flex justify-between items-center mb-3">
              <img width={70} src={require('../img/1.jpg')} alt="phone" />
              <div>
                <p>POCO M4 Pro 4G 256 ГБ</p>
                <b>15 999 ₽</b>
              </div>
              <button className="button grayButton">
                <BsX />
              </button>
            </div>
            <div className="cartItem flex justify-between items-center mb-3">
              <img width={70} src={require('../img/1.jpg')} alt="phone" />
              <div>
                <p>POCO M4 Pro 4G 256 ГБ</p>
                <b>15 999 ₽</b>
              </div>
              <button className="button grayButton">
                <BsX />
              </button>
            </div>
            <div className="cartItem flex justify-between items-center mb-3">
              <img width={70} src={require('../img/1.jpg')} alt="phone" />
              <div>
                <p>POCO M4 Pro 4G 256 ГБ</p>
                <b>15 999 ₽</b>
              </div>
              <button className="button grayButton">
                <BsX />
              </button>
            </div>
          </div>
        </div>

        <div className="fullprice flex flex-col">
          <div className="fullprice__info flex justify-between items-center mb-4">
            <div className="fullprice__text">
              <span className="text-sm opacity-70">Итого: </span>
              <div className="font-bold text-xl leading-4 ">1 товар</div>
            </div>

            <div className="fullprice__sum text-right">
              <div className="price__default text-sm line-through	opacity-70">
                17999 ₽
              </div>
              <div className="price__current font-bold text-xl leading-4 ">
                15999 ₽
              </div>
            </div>
          </div>

          <button className="button orderbutton"> Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
