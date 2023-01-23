import { FaPlusCircle } from 'react-icons/fa'
import styles from './MoreButton.module.scss'

const MoreButton = ({ isCardHover }) => {
  return (
    <FaPlusCircle
      className={`${styles.moreButton} ${
        isCardHover ? styles.moreButtonActiveCard : ''
      }`}
    />
  )
}

export { MoreButton }
