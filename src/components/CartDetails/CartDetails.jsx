import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { slicePrice } from '../../Utils/PageFunctions'
import { OrderButton } from '../UI/OrderButton/OrderButton'
import styles from './CartDetails.module.scss'

const CartDetails = () => {
  const cart = useContext(CartContext)
  return (
    <div className={styles.carttotal}>
    <div className={styles.cartcontent}>
      <h2>Детали заказа</h2>
      <ul className={styles.carttotalitems}>
        <li>
          {`${cart.cartItems.length} ${
            cart.cartItems.length === 0
              ? ' товаров '
              : cart.cartItems.length === 1
              ? ' товар '
              : cart.cartItems.length < 5
              ? ' товара '
              : ' товаров '
          }`}
          <span className={styles.value}>{slicePrice(cart.fullPrice)} ₽</span>
        </li>
        <li>
          Скидка 5%
          <span className={styles.value}>
            -{slicePrice(Math.floor((cart.fullPrice / 100) * 5))} ₽
          </span>
        </li>
        <li className={styles.cartfullprice}>
          Итого
          <span className={styles.value}>
            {slicePrice(
              cart.fullPrice - Math.floor((cart.fullPrice / 100) * 5)
            )}{' '}
            ₽
          </span>
        </li>
      </ul>
      <OrderButton className={styles.orderbutton}>
        Перейти к оформлению
      </OrderButton>
      </div>
    </div>
  )
}

export default CartDetails
