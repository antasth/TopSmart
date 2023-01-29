import { BsTrash, BsBarChart } from 'react-icons/bs'
import { OrderButton } from '../UI/OrderButton/OrderButton'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './FavCard.module.scss'

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
  body,
  prices,
  more_specification,
  delFromFavorites,
}) => {
  return (
    <div className={styles.whishlist}>
      <img src={device_image} alt="favoriteimg" />

      <div className={styles.description}>
        {display_size} {display_res} {device_name}{' '}
        {more_specification[4].data[2].data[0]} {storage} {ram.split('/')[1]}{' '}
        {camera} {os_type} {battery} {chipset} {body} {release_date}
        <div className={styles.actions}>
          <div className={styles.action}>
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
        <OrderButton>Купить</OrderButton>
      </div>
    </div>
  )
}

export { FavCard }
