import { useState } from 'react'
import { Cards } from '../components/Cards/Cards'

const Main = () => {
  const [totalCount, setTotalCount] = useState(0)

  const getTotalCount = (length) => {
    setTotalCount(length)
  }
  return (
    <>
      <h2 className="mx-3">Всего {totalCount} товаров</h2>
      <Cards getTotalCount={getTotalCount} />
    </>
  )
}

export { Main }
