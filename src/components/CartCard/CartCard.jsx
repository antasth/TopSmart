import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsPlus, BsDash } from 'react-icons/bs'
import { Checkbox } from '@chakra-ui/react'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './CartCard.module.scss'

const CartCard = ({
  device_key,
  device_image,
  device_name,
  storage,
  camera,
  os_type,
  battery,
  ram,
  prices,
  device_count,
}) => {
  const cart = useContext(CartContext)
  let count = device_count

  const increment = () => {
    cart.onChangeCount(device_key, count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      cart.onChangeCount(device_key, count - 1)
    }
  }

  return (
    <div className={styles.cartcard}>
      <Checkbox size="lg" colorScheme="orange" className={styles.check} />
      <img src={device_image} alt="favoriteimg" />

      <div className={styles.description}>
        {device_name} {storage.split('/')[0]} {ram.split('/')[1]} {camera}{' '}
        {os_type} {battery}
      </div>
      <div className={styles.counter}>
        <BsDash className={styles.icon} onClick={decrement} />
        <div className={styles.count}>{device_count}</div>
        <BsPlus className={styles.icon} onClick={increment} />
      </div>
      <div className={styles.controls}>
        <b id="price">{slicePrice(prices)} ₽</b>
      </div>
    </div>
  )
}

export { CartCard }
