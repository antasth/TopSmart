import { useContext } from 'react'
import { FavContext } from '../../context/FavContext'
import { ProductRating } from '../UI/ProductRating/ProductRating'
import {
  IoStatsChartSharp,
  IoHeartOutline,
  IoShareSocialOutline,
} from 'react-icons/io5'
import styles from './ProductSpecs.module.scss'

const ProductSpecs = ({ device }) => {
  const fav = useContext(FavContext)
  const {
    display_size,
    storage,
    ram,
    battery,
    camera,
    chipset,
    rating,
    rateCount,
  } = device
  return (
    <section className={styles.devicecard}>
      <ul className={styles.devicespecs}>
        <h3>Основные характеристики</h3>
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
          Батарея
          <span>{battery}</span>
        </li>
      </ul>
      <div className={styles.review}>
        <ProductRating rating={rating} rateCount={rateCount} />
        <div className={styles.actions}>
          <IoStatsChartSharp className={styles.icon} />
          <IoHeartOutline
            className={styles.icon}
            onClick={() => fav.addToFavorites(device)}
          />
          <IoShareSocialOutline className={styles.icon} />
        </div>
      </div>
    </section>
  )
}

export { ProductSpecs }
