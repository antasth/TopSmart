import { useContext } from 'react'
import { FavCard } from '../../components/FavCard/FavCard'
import { EmptyCard } from '../../components/UI/EmptyCard/EmptyCard'
import { CartContext } from '../../context/CartContext'
import { CompareContext } from '../../context/CompareContext'
import { FavContext } from '../../context/FavContext'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './Favorite.module.scss'

const Favorite = () => {
  const fav = useContext(FavContext)
  const cart = useContext(CartContext)
  const comp = useContext(CompareContext)
  return (
    <div className={styles.favorite}>
      <h1>Избранное</h1>
      {!!fav.favItems.length && (
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
      )}
      <div className="favitems">
        {fav.favItems.map((item) => (
          <FavCard
            key={fav.favItems.key}
            device={item}
            {...item}
            delFromFavorites={() => fav.delFromFavorites(item)}
            onAddToCart={() => cart.onAddToCart(item)}
            onAddToCompare={() => comp.addToCompare(item)}
          />
        ))}
        {!fav.favItems.length && <EmptyCard page={'favorite'} />}
      </div>
    </div>
  )
}

export { Favorite }

