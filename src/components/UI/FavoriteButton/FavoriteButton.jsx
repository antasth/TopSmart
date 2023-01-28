import { useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/tooltip'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ onAddToFav, onDelFromFav }) => {
  const [isUsed, setIsUsed] = useState(false)

  const toggleIsUsedState = () => {
    setIsUsed(!isUsed)
  }
  return (
    <>
      <Tooltip
        label="Добавить в избранное"
        aria-label="A tooltip"
        bg="var(--dark-blue)"
        color="var(--white)"
        padding={12}
        borderRadius={10}
        placement="top"
      >
        <button
          className={`${styles.favButton} ${
            isUsed ? styles.usedFavButton : ''
          }`}
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
      </Tooltip>
    </>
  )
}

export { FavoriteButton }
