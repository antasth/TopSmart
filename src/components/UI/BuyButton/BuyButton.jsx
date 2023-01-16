import { useState, useEffect } from 'react'
import styles from './Button.module.scss'

const BuyButton = ({
  children,
  isCardHover,
  onAddToCart,
  showCart,
  isActive,
}) => {
  const [isUsed, setIsUsed] = useState(false)

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
        isUsed && showCart()
      }}
    >
      {isUsed && isActive ? 'В корзине' : `${children}`}
    </button>
  )
}

export default BuyButton
