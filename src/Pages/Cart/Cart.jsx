import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartCard } from '../../components/CartCard/CartCard'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './Cart.module.scss'

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
      <div className="cartItems">
        {cart.cartItems.map((item) => (
          <CartCard
            key={cart.cartItems.key}
            {...item}
            delFromFavorites={() => cart.delFromFavorites(item)}
            onAddToCart={() => cart.onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  )
}

export { Cart }
