import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { slicePrice } from '../../Utils/PageFunctions'
import { OrderButton } from '../UI/OrderButton/OrderButton'
import styles from './CartDetails.module.scss'

const CartDetails = () => {
  const cart = useContext(CartContext)
  return (
    <div className={styles.carttotal}>
      <h2>Детали заказа</h2>
      <div className={styles.carttotalitems}>
        <div className={styles.carttotalitem}>
          <p>
            {`${cart.cartItems.length} ${
              cart.cartItems.length === 0
                ? ' товаров '
                : cart.cartItems.length === 1
                ? ' товар '
                : cart.cartItems.length < 5
                ? ' товара '
                : ' товаров '
            }`}
          </p>
          {slicePrice(cart.fullPrice)} ₽
        </div>
        <div className={styles.carttotalitem}>
          <p>Скидка 5%</p>-{slicePrice(Math.floor((cart.fullPrice / 100) * 5))}{' '}
          ₽
        </div>
        <div className={styles.cartfullprice}>
          <p>Итого</p>
          {slicePrice(
            cart.fullPrice - Math.floor((cart.fullPrice / 100) * 5)
          )}{' '}
          ₽
        </div>
      <OrderButton className={styles.orderbutton}>Перейти к оформлению</OrderButton>
      </div>
    </div>
  )
}

export default CartDetails
