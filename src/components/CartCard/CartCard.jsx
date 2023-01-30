import { OrderButton } from '../UI/OrderButton/OrderButton'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './CartCard.module.scss'

const CartCard = ({
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
  onAddToCart,
}) => {
  return (
    <div className={styles.whishlist}>
      <img src={device_image} alt="favoriteimg" />

      <div className={styles.description}>
        {display_size} {display_res} {device_name}{' '}
        {more_specification[4].data[2].data[0]} {storage} {ram.split('/')[1]}{' '}
        {camera} {os_type} {battery} {chipset} {body} {release_date}
        <div className={styles.actions}></div>
      </div>
      <div className={styles.controls}>
        <b id="price">{slicePrice(prices)} ₽</b>
        <div onClick={onAddToCart}>
          <OrderButton>Купить</OrderButton>
        </div>
      </div>
    </div>
  )
}

export { CartCard }
