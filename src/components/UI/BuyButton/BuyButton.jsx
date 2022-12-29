import { useState } from 'react'
import styles from './Button.module.scss'

const BuyButton = ({ children, isCardHover, onBuyClick }) => {
  const [isUsed, setIsUsed] = useState(false)

  const toggleIsUsedState = () => {
    setIsUsed(!isUsed)
  }

  return (
    <button
      className={`${styles.buyButton} 
      ${isCardHover ? styles.buyButton__ActiveCard : ''}
        `}
      onClick={() => {
        toggleIsUsedState()
        onBuyClick()
      }}
    >
      {isUsed ? 'В корзине' : `${children}`}
    </button>
  )
}

export default BuyButton
