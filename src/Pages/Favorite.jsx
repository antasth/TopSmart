import { useContext } from 'react'
import { FavContext } from '../context/FavContext'
import { FavCard } from '../components/FavCard/FavCard'

const Favorite = () => {
  const fav = useContext(FavContext)
  return (
    <div className="favorites grow">
      <h1>Избранное</h1>
      <div className="favheader">
        <p>1 товар на сумму 9999 р</p>
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
