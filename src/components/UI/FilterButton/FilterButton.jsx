import styles from './FilterButton.module.scss'

const FilterButton = ({ children, getReceipts, name }) => {
  return (
    <>
      <button onClick={() => getReceipts(name)} className={styles.filterButton}>
        {children}
      </button>
    </>
  )
}

export default FilterButton
