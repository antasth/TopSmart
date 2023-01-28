import { useState } from 'react'
import { Tooltip, Box } from '@chakra-ui/react'
import { FiDelete } from 'react-icons/fi'
import { FilterButton } from '../UI/FilterButton/FilterButton'
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
    !filters.includes(filter) &&
      setFilters((prevState) => [...prevState, filter])
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className={styles.receipts}>
      {Object.keys(receipts).map((key) => (
        <FilterButton
          key={key}
          getReceipts={getReceipts}
          name={key}
          filters={filters}
        >
          {receipts[key]}
        </FilterButton>
      ))}
      <Tooltip
        label="Очистить фильтры"
        aria-label="A tooltip"
        bg="var(--dark-blue)"
        color="var(--white)"
        padding={12}
        borderRadius={10}
        placement="bottom"
        openDelay={200}
      >
        <Box>
          <FiDelete className={styles.delete} onClick={clearFilters}></FiDelete>
        </Box>
      </Tooltip>
    </div>
  )
}

export { Receipts }
