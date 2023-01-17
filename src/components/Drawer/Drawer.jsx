import { BsTrash } from 'react-icons/bs'
import { BiExit } from 'react-icons/bi'
import OrderButton from '../UI/OrderButton/OrderButton'
import styles from './Drawer.module.scss'

const Drawer = ({ toggleCart, deleteItem, cartItems, fullPrice }) => {
  return (
    <div className={styles.overlay} onClick={toggleCart}>
      <div
        className={`${styles.drawer} flex flex-col justify-between`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart">
          <div className="cart__header flex justify-between items-center mb-5">
            <h2 className='text-base'>Корзина</h2>
            <button className="button grayButton" onClick={toggleCart}>
              <BiExit className="icon" />
            </button>
          </div>

          <div className="cartItems mb-7">
            {cartItems.map((item) => (
              <div
                key={item.key}
                className="cartItem flex justify-between items-center mb-3 text-sm"
              >
                <img
                  width={70}
                  // src={require('../../assets/img/' + item.img + '/1.jpg')}
                  src={item.device_image}
                  alt="phone"
                />
                <div className="mx-3">
                  <p>
                    {item.display_size} {item.device_name} {item.storage}{' '}
                     {item.battery}
                  </p>
                  <b>{item.prices} ₽</b>
                </div>
                <button>
                  <BsTrash
                    onClick={() => {
                      deleteItem(item)
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="fullprice flex flex-col">
          <div className="fullprice__info flex justify-between items-end mb-4">
            <div className="fullprice__text">
              <span className="text-sm opacity-70">Итого: </span>
              <div className="font-bold text-xl leading-4 ">
                {`${cartItems.length} ${
                  cartItems.length === 0
                    ? ' товаров'
                    : cartItems.length === 1
                    ? ' товар'
                    : cartItems.length < 5
                    ? ' товара'
                    : ' товаров'
                }`}
              </div>
            </div>

            <div className="fullprice__sum text-right">
              {/* <div className="price__default text-sm line-through	opacity-70">
                17999 ₽
              </div> */}
              <div className="price__current font-bold text-xl leading-4 ">
                {fullPrice} ₽
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
