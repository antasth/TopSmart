import { useState, useContext } from 'react'
import { BiHeart } from 'react-icons/bi'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ onAddToFav, onDelFromFav }) => {
  const [isUsed, setIsUsed] = useState(false)

  const toggleIsUsedState = () => {
    setIsUsed(!isUsed)
  }
  return (
    <button
      className={`${styles.favButton} ${isUsed ? styles.usedFavButton : ''}`}
      onClick={() => {
        !isUsed && toggleIsUsedState()
        !isUsed && onAddToFav()
        if (isUsed) {
          onDelFromFav()
          toggleIsUsedState()
        }
      }}
    >
      <BiHeart />
    </button>
  )
}

export { FavoriteButton }
