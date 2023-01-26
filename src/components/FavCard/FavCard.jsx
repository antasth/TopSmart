import React from 'react'
import styles from './FavCard.module.scss'

const FavCard = ({ device_image, device_name, display_size }) => {
  return (
    <div className={styles.card}>
      <img src={device_image} alt="favoriteimg" />
      {display_size} {device_name}
    </div>
  )
}

export { FavCard }
