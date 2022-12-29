import { BsX } from 'react-icons/bs'
import { BiExit } from 'react-icons/bi'
import OrderButton from '../UI/OrderButton/OrderButton'
import styles from './Drawer.module.scss'

const Drawer = ({ toggleCart, cartItems }) => {
  return (
    <div className={styles.overlay} onClick={toggleCart}>
      <div
        className={`${styles.drawer} flex flex-col justify-between`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart">
          <div className="cart__header flex justify-between items-center mb-5">
            <h2>Корзина</h2>
            <button className="button grayButton" onClick={toggleCart}>
              <BiExit className="icon" />
            </button>
          </div>

          <div className="cartItems mb-10">
            {cartItems.map((item) => (
              <div key={item.id} className="cartItem flex justify-between items-center mb-3">
                <img
                  width={70}
                  src={require('../../assets/img/' + item.img + '/1.jpg')}
                  alt="phone"
                />
                <div>
                  <p>
                    {item.production} {item.model} {item.ram} {item.rom}
                  </p>
                  <b>{item.price} ₽</b>
                </div>
                <button className="button grayButton">
                  <BsX />
                </button>
              </div>
            ))}
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

          <OrderButton />
        </div>
      </div>
    </div>
  )
}

export default Drawer
