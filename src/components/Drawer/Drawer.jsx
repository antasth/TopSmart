import { BsTrash } from 'react-icons/bs'
import { BiExit } from 'react-icons/bi'
import { OrderButton } from '../UI/OrderButton/OrderButton'
import { slicePrice, saveToLocalStorage } from '../../Utils/PageFunctions'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import styles from './Drawer.module.scss'

const Drawer = () => {
  const cart = useContext(CartContext)
  return (
    <div className={styles.overlay} onClick={cart.toggleCart}>
      <div
        className={`${styles.drawer} flex flex-col justify-between`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart">
          <div className="cart__header flex justify-between items-center mb-5">
            <h2 className="text-base">Корзина</h2>
            <button className="button grayButton" onClick={cart.toggleCart}>
              <BiExit className="icon" />
            </button>
          </div>

          <div className="cartItems mb-7">
            {cart.cartItems.map((item) => (
              <div
                key={item.key}
                className="cartItem flex justify-between items-center mb-3 text-sm"
              >
                <img width={70} src={item.device_image} alt="phone" />
                <div className="mx-3">
                  <p>
                    {item.display_size} {item.device_name} {item.storage}{' '}
                    {item.battery}
                  </p>
                  <b>{slicePrice(item.prices)} ₽</b>
                </div>
                <button>
                  <BsTrash
                    onClick={() => {
                      cart.deleteItem(item)
                      saveToLocalStorage('cartItems', cart.cartItems)
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
                {`${cart.cartItems.length} ${
                  cart.cartItems.length === 0
                    ? ' товаров'
                    : cart.cartItems.length === 1
                    ? ' товар'
                    : cart.cartItems.length < 5
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
                {slicePrice(cart.fullPrice)} ₽
              </div>
            </div>
          </div>
          <OrderButton />
        </div>
      </div>
    </div>
  )
}

export { Drawer }
