import { BsBarChart, BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { slicePrice } from '../../Utils/PageFunctions'
import { OrderButton } from '../UI/OrderButton/OrderButton'
import styles from './FavCard.module.scss'

const FavCard = ({
  device,
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
  body,
  prices,
  delFromFavorites,
  onAddToCart,
  onAddToCompare,
}) => {
  return (
    <div className={styles.whishlist}>
      <img src={device_image} alt="favoriteimg" />

      <div className={styles.description}>
        <div className={styles.deviceinfo}>
          <Link
            className={styles.link}
            to={`/product/${device.key}`}
            state={device}
          >
            {display_size} {display_res} {device_name} {storage}{' '}
            {ram.split('/')[1]} {camera} {os_type} {battery} {chipset} {body}{' '}
            {release_date}
          </Link>
        </div>
        <div className={styles.actions}>
          <div className={styles.action} onClick={onAddToCompare}>
            <BsBarChart className={styles.icon} />
            <p>Сравнить</p>
          </div>
          <div className={styles.action} onClick={delFromFavorites}>
            <BsTrash className={styles.icon} />
            <p>Удалить</p>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <b id="price">{slicePrice(prices)} ₽</b>
        <OrderButton onClick={onAddToCart}>Купить</OrderButton>
      </div>
    </div>
  )
}

export { FavCard }
