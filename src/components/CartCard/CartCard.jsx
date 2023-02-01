import { useState } from 'react'
import { slicePrice } from '../../Utils/PageFunctions'
import { BsPlus, BsDash } from 'react-icons/bs'
import styles from './CartCard.module.scss'

const CartCard = ({
  device_image,
  device_name,
  storage,
  camera,
  os_type,
  battery,
  ram,
  prices,
}) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className={styles.cartcard}>
      <img src={device_image} alt="favoriteimg" />

      <div className={styles.description}>
        {device_name} {storage.split('/')[0]} {ram.split('/')[1]} {camera}{' '}
        {os_type} {battery}
      </div>
      <div className={styles.counter}>
        <BsDash className={styles.icon} onClick={decrement} />
        <div className={styles.count}>{count}</div>
        <BsPlus className={styles.icon} onClick={increment} />
      </div>
      <div className={styles.controls}>
        <b id="price">{slicePrice(prices)} ₽</b>
      </div>
    </div>
  )
}

export { CartCard }
