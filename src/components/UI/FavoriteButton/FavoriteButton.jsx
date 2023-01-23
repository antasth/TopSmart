import { useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = () => {
  const [isUsed, setIsUsed] = useState(false)

  const toggleIsUsedState = () => {
    setIsUsed(!isUsed)
  }
  return (
    <button
      className={`${styles.favButton} ${isUsed ? styles.usedFavButton : ''}`}
      onClick={toggleIsUsedState}
    >
      <BiHeart />
    </button>
  )
}

export { FavoriteButton }
