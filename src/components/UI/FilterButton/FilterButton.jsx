import { useState } from 'react'
import styles from './FilterButton.module.scss'

const FilterButton = ({ children, getReceipts, name }) => {
  const [isUsed, setIsUsed] = useState(false)

  const changeIsUsedState = () => {
    setIsUsed(!isUsed)
  }

  return (
    <>
      <button
        onClick={() => {
          getReceipts(name)
          changeIsUsedState()
        }}
        className={`${styles.filterButton} ${
          isUsed ? styles.filterButton_Used : ''
        }`}
      >
        {children}
      </button>
    </>
  )
}

export default FilterButton
