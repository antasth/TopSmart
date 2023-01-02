import { getPagesArray } from '../../Utils/Pages'
import styles from './Pagination.module.scss'

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages)
  return (
    <div className={styles.pages__wrapper}>
      {pagesArray.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={
            page === p ? `${styles.page} ${styles.page__current}` : styles.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
