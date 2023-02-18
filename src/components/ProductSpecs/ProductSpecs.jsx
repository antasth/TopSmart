import { useContext } from 'react'
import { IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5'
import { RiBarChartFill } from 'react-icons/ri'
import { CompareContext } from '../../context/CompareContext'
import { FavContext } from '../../context/FavContext'
import { ProductServices } from '../ProductServices/ProductServices'
import { ProductRating } from '../UI/ProductRating/ProductRating'
import styles from './ProductSpecs.module.scss'

const ProductSpecs = ({ device, scrollTo }) => {
  const fav = useContext(FavContext)
  const comp = useContext(CompareContext)
  const {
    display_size,
    storage,
    ram,
    os_type,
    battery,
    camera,
    chipset,
    rating,
    rateCount,
    prices,
  } = device

  return (
    <>
      <section className={styles.devicecard}>
        <ul className={styles.devicespecs}>
          <h3 className={styles.specsheader}>Основные характеристики</h3>
          <li>
            Экран
            <span>{display_size}</span>
          </li>
          <li>
            Процессор
            <span>{chipset}</span>
          </li>
          <li>
            Оперативная память
            <span>{ram}</span>
          </li>
          <li>
            Встроенная память
            <span>{storage}</span>
          </li>
          <li>
            Камера
            <span>{camera}</span>
          </li>
          <li>
            OS
            <span>{os_type.split(' ')[0]}</span>
          </li>
          <li>
            Батарея
            <span>{battery}</span>
          </li>
          <h3 id="link" onClick={scrollTo}>
            Все характеристики
          </h3>
        </ul>
        <div className={styles.review}>
          <ProductRating rating={rating} rateCount={rateCount} />
          <div className={styles.actions}>
            <RiBarChartFill
              className={`${styles.icon} ${
                comp.checkDeviceInCompare(device) && styles.icon_active
              }`}
              onClick={() => comp.toggleCompare(device)}
            />
            <IoHeartOutline
              className={`${styles.icon} ${
                fav.checkDeviceInFav(device) && styles.icon_active
              }`}
              onClick={() => fav.toggleFavorites(device)}
            />
            <IoShareSocialOutline className={styles.icon} />
          </div>
        </div>
        <ProductServices prices={prices} />
      </section>
    </>
  )
}

export { ProductSpecs }
