import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FavCard } from '../../components/FavCard/FavCard'
import styles from './Cart.module.scss'

const Cart = () => {
  const cart = useContext(CartContext)
  return (
    <div className={styles.cart}>
      <div className={styles.favheader}>
        <h1>Корзина</h1>
        <h4>
          {`${cart.cartItems.length} ${
            cart.cartItems.length === 0
              ? ' товаров '
              : cart.cartItems.length === 1
              ? ' товар '
              : cart.cartItems.length < 5
              ? ' товара '
              : ' товаров '
          }`}
          {/* на сумму {cart.getFullPrice()} ₽ */}
        </h4>
      </div>
      <div className="cartItems">
        {cart.cartItems.map((item) => (
          <FavCard
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
