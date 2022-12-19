import { BsX } from 'react-icons/bs'

const Drawer = ({ isActive }) => {
  return (
    <div
      style={isActive ? { display: 'block' } : { display: 'none' }}
      className="overlay"
    >
      <div className="drawer flex flex-col justify-between">
        <div className="cart">
          <h2 className="mb-5">Корзина</h2>
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
