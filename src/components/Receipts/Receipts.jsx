import FilterButton from '../UI/FilterButton/FilterButton'
import styles from './Receipts.module.scss'

const Receipts = () => {
  return (
    <div className={styles.receipts}>
      <FilterButton>Android</FilterButton>
      <FilterButton>iOS</FilterButton>
      <FilterButton>Автономный</FilterButton>
      <FilterButton>2022 года</FilterButton>
      <FilterButton>NFC</FilterButton>
      <FilterButton>2023 года</FilterButton>
      <FilterButton>Большой экран</FilterButton>
      <FilterButton>Смарт часы</FilterButton>
      <FilterButton>Камерофоны</FilterButton>
    </div>
  )
}

export default Receipts
