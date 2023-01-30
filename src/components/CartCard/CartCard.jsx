import { slicePrice } from '../../Utils/PageFunctions'
import { FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa'
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
  return (
    <div className={styles.cartcard}>
      <img src={device_image} alt="favoriteimg" />

      <div className={styles.description}>
        {device_name} {storage.split('/')[0]} {ram.split('/')[1]} {camera}{' '}
        {os_type} {battery}
      </div>
      <div className={styles.counter}>
        <FaRegMinusSquare className={styles.icon} /> 1{' '}
        <FaRegPlusSquare className={styles.icon} />
      </div>
      <div className={styles.controls}>
        <b id="price">{slicePrice(prices)} ₽</b>
      </div>
    </div>
  )
}

export { CartCard }
