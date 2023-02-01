import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartCard } from '../../components/CartCard/CartCard'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './Cart.module.scss'
import CartDetails from '../../components/CartDetails/CartDetails'

const Cart = () => {
  const cart = useContext(CartContext)
  return (
    <div className={styles.cart}>
      <h1>Корзина</h1>
      <div className={styles.cartheader}>
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
          на сумму {slicePrice(cart.fullPrice)} ₽
        </p>
      </div>
      <div className={styles.cartcontent}>
        <div className={styles.cartItems}>
          {cart.cartItems.map((item) => (
            <CartCard
              key={cart.cartItems.key}
              device_key={item.key}
              {...item}
              delFromFavorites={() => cart.delFromFavorites(item)}
              onAddToCart={() => cart.onAddToCart(item)}
            />
          ))}
        </div>
        <CartDetails />
      </div>
    </div>
  )
}

export { Cart }
