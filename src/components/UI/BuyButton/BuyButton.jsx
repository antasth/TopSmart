import { useState } from 'react'
import styles from './Button.module.scss'

const BuyButton = ({ children, isCardHover, onBuyClick, showCart }) => {
  const [isUsed, setIsUsed] = useState(false)

  const changeIsUsedState = () => {
    setIsUsed(!isUsed)
  }

  return (
    <button
      className={`${styles.buyButton} 
      ${isCardHover && styles.buyButton__ActiveCard}
        `}
      onClick={() => {
        !isUsed && onBuyClick()
        !isUsed && changeIsUsedState()
        isUsed && showCart()
      }}
    >
      {isUsed ? 'В корзине' : `${children}`}
    </button>
  )
}

export default BuyButton