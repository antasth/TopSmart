import styles from './ProductRating.module.scss'

const ProductRating = ({ rateCount }) => {
  return (
    <div className={styles.ProductRating}>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <span>{rateCount}</span>
    </div>
  )
}

export default ProductRating
