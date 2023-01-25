import { useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ onAddToFav }) => {
  const [isUsed, setIsUsed] = useState(false)

  const toggleIsUsedState = () => {
    setIsUsed(!isUsed)
  }
  return (
    <button
      className={`${styles.favButton} ${isUsed ? styles.usedFavButton : ''}`}
      onClick={() => {
        toggleIsUsedState()
        onAddToFav()
      }}
    >
      <BiHeart />
    </button>
  )
}

export { FavoriteButton }
