import { useState } from 'react'
import { Link } from 'react-router-dom'
import { slicePrice } from '../../Utils/PageFunctions'
import { Gallery } from '../Gallery/Gallery'
import { BuyButton } from '../UI/BuyButton/BuyButton'
import { FavoriteButton } from '../UI/FavoriteButton/FavoriteButton'
import { MoreButton } from '../UI/MoreButton/MoreButton'
import { ProductRating } from '../UI/ProductRating/ProductRating'
import { TrashButton } from '../UI/TrashButton/TrashButton'
import styles from './CompareCard.module.scss'

const CompareCard = ({
  device_key,
  device_name,
  device_image,
  prices,
  rateCount,
  rating,
  pictures,
  onAddToCart,
  onAddToFav,
  onDelFromFav,
  onDelFromCompare,
  isInFav,
  isInCart,
  device,
}) => {
  const [isCardHover, setIsCardHover] = useState(false)
  const [gallery, setGallery] = useState(false)

  const toggleGallery = () => {
    setGallery(!gallery)
    !gallery
      ? document.body.classList.add('locked')
      : document.body.classList.remove('locked')
  }

  const hoverCardOn = () => {
    setIsCardHover(true)
  }
  const hoverCardOff = () => {
    setIsCardHover(false)
  }

  return (
    <>
      <div
        className={styles.card}
        onMouseEnter={hoverCardOn}
        onMouseLeave={hoverCardOff}
      >
        <div className="cardtop">
          <div className="relative cursor-zoom-in" onClick={toggleGallery}>
            <img src={device_image} alt="phoneimg" />
            <MoreButton isCardHover={isCardHover} />
          </div>

          <Link to={`/product/${device_key}`} state={device}>
            <div className="mt-4">
              <h2 id="link">{device_name}</h2>
            </div>
          </Link>
        </div>

        <div className="cardbottom mt-5">
          <ProductRating rating={rating} rateCount={rateCount} />
          <div className="flex justify-between items-center mt-7">
            <b id="price" className="whitespace-nowrap mr-4">
              {' '}
              {slicePrice(prices)} ₽
            </b>
            <div className="flex w-full">
              <TrashButton onClick={onDelFromCompare} />
              <FavoriteButton
                onAddToFav={onAddToFav}
                onDelFromFav={onDelFromFav}
                isActive={isInFav}
              />
              <BuyButton
                isCardHover={isCardHover}
                onAddToCart={onAddToCart}
                isActive={isInCart}
              >
                Купить
              </BuyButton>
            </div>
          </div>
        </div>
        {
          <ul key={device.key}>
            {device.more_specification.map((category) => (
              <div key={category.title}>
                <h3>{category.title}</h3>
                {category.data.map((subcat) => (
                  <li key={subcat.title}>
                    {subcat.title}
                    <span>{subcat.data.join(', ')}</span>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        }
      </div>
      {gallery && (
        <Gallery
          pictures={pictures}
          device_name={device_name}
          toggleGallery={toggleGallery}
        />
      )}
    </>
  )
}

export { CompareCard }
