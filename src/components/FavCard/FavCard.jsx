import React from 'react'
import styles from './FavCard.module.scss'
import { BuyButton } from '../UI/BuyButton/BuyButton'

const FavCard = ({
  device_image,
  device_name,
  display_size,
  display_res,
  storage,
  camera,
  os_type,
  battery,
  ram,
  chipset,
  release_date,
  delFromFav,
}) => {
  return (
    <div className={styles.card}>
      <img src={device_image} alt="favoriteimg" />
      {display_size} {display_res} {device_name} {storage.split('/')[0]}{' '}
      {ram.split('/')[1]} {camera} {os_type.split(',')[0]} {battery} {chipset}{' '}
      {release_date}
      <BuyButton>Купить</BuyButton>
    </div>
  )
}

export { FavCard }
