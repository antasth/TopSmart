import styles from './ProductRating.module.scss'

const ProductRating = ({ rateCount, rating }) => {
  const ratingWidth = rating / 0.05

  return (
    <>
      <div className={styles.rating}>
        <div className={styles.rating__body}>
          <div
            className={styles.rating__active}
            style={{ width: `${ratingWidth}%` }}
          ></div>
        </div>
        <p className={styles.rating__count}>{rateCount}</p>
      </div>
    </>
  )
}

export default ProductRating
