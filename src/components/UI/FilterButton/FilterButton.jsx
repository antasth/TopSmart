import styles from './FilterButton.module.scss'

const FilterButton = ({ children }) => {
  return (
    <>
      <button className={styles.filterButton}>{children}</button>
    </>
  )
}

export default FilterButton
