import { Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ onAddToFav, onDelFromFav, isActive }) => {
  const [isUsed, setIsUsed] = useState(false)
  const message = isUsed ? 'Удалить из избранного' : 'Добавить в избранное'

  const toggleIsUsedState = () => {
    setIsUsed(!isUsed)
  }

  useEffect(() => {
    isActive && setIsUsed(true)
  }, [isActive])

  return (
    <>
      <Tooltip
        label={`${message}`}
        aria-label="A tooltip"
        bg="var(--dark-blue)"
        color="var(--white)"
        padding={4}
        borderRadius={10}
        placement="top"
        openDelay={200}
        closeOnClick={false}
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
