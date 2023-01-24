import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import styles from './Button.module.scss'

const BuyButton = ({ children, isCardHover, onAddToCart, isActive }) => {
  const [isUsed, setIsUsed] = useState(false)
  const cart = useContext(CartContext)

  const changeIsUsedState = () => {
    setIsUsed(!isUsed)
  }

  useEffect(() => {
    isUsed && !isActive && changeIsUsedState()
  }, [isActive])

  return (
    <button
      className={`${styles.buyButton} 
      ${isCardHover && styles.buyButton__ActiveCard}
        `}
      onClick={() => {
        !isUsed && onAddToCart()
        !isUsed && changeIsUsedState()
        isUsed && cart.toggleCart()
      }}
    >
      {isUsed && isActive ? 'В корзине' : `${children}`}
    </button>
  )
}

export { BuyButton }
