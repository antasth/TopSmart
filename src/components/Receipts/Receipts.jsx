import { useState, useEffect } from 'react'
import FilterButton from '../UI/FilterButton/FilterButton'
import styles from './Receipts.module.scss'

const Receipts = () => {
  const [filters, setFilters] = useState([])
  const receipts = {
    Android: 'Android',
    iOS: 'iOS',
    year2022: '2022',
    year2023: '2023',
    nfc: 'NFC',
    battery: 'Автономный',
    bigScreen: 'Большой экран',
    watch: 'Смарт часы',
    camera: 'Камерофоны',
  }

  const getReceipts = (filter) => {
    setFilters((prevState) => [...prevState, filter])
  }

  return (
    <div className={styles.receipts}>
      {Object.keys(receipts).map((key) => (
        <FilterButton key={key} getReceipts={getReceipts} name={key}>
          {receipts[key]}
        </FilterButton>
      ))}
      <FilterButton>Сбросить фильтры</FilterButton>
    </div>
  )
}

export default Receipts
