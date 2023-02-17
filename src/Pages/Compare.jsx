import { useContext } from 'react'
import { CompareCard } from '../components/CompareCard/CompareCard'
import { CartContext } from '../context/CartContext'
import { CompareContext } from '../context/CompareContext'
import { FavContext } from '../context/FavContext'

const Compare = () => {
  const cart = useContext(CartContext)
  const fav = useContext(FavContext)
  const comp = useContext(CompareContext)

  return (
    <div>
      <h1>Страница сравнения</h1>
      <div className="flex">
        {comp.compareItems.map(
          (device) =>
            device && (
              <CompareCard
                key={device.key}
                device_key={device.key}
                {...device}
                device={device}
                onAddToCart={() => cart.onAddToCart(device)}
                onAddToFav={() => fav.addToFavorites(device)}
                onDelFromFav={() => fav.delFromFavorites(device)}
                isActive={cart.cartItems.includes(device) ? true : false}
              />
            )
        )}
      </div>
    </div>
  )
}

export { Compare }
