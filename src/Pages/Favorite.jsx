import { useContext } from 'react'
import { FavContext } from '../context/FavContext'
import { FavCard } from '../components/FavCard/FavCard'
import { slicePrice } from '../Utils/PageFunctions'
import styles from './Favorite.module.scss'

const Favorite = () => {
  const fav = useContext(FavContext)
  return (
    <div className={styles.favorite}>
      <h1>Избранное</h1>
      <div className={styles.favheader}>
        <p>
          {`${fav.favItems.length} ${
            fav.favItems.length === 0
              ? ' товаров '
              : fav.favItems.length === 1
              ? ' товар '
              : fav.favItems.length < 5
              ? ' товара '
              : ' товаров '
          }`}
          на сумму {slicePrice(fav.getFullPrice())} ₽
        </p>
      </div>
      <div className="favitems">
        {fav.favItems.map((item) => (
          <FavCard key={fav.favItems.key} {...item} />
        ))}
      </div>
    </div>
  )
}

export { Favorite }
