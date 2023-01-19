import styles from './FilterButton.module.scss'

const FilterButton = ({ children, getReceipts, name, filters }) => {
  return (
    <>
      <button
        onClick={() => {
          getReceipts(name)
        }}
        className={`${styles.filterButton} ${
          filters.includes(name) ? styles.filterButton_Used : ''
        }`}
      >
        {children}
      </button>
    </>
  )
}

export default FilterButton
