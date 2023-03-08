import { Link } from 'react-router-dom'
import { OrderButton } from '../OrderButton/OrderButton'
import styles from './EmptyCard.module.scss'

const EmptyCard = ({ page }) => {
  let img,
    headerText = ''

  switch (page) {
    case 'compare':
      headerText = (
        <>
          <h2>Список сравнения пуст</h2>
          <p>Сначала добавьте товары к сравнению из каталога</p>
        </>
      )
      img = 'compare_phones'
      break
    case 'favorite':
      headerText = (
        <>
          <h2>Список избранного пуст</h2>
          <p>Сначала добавьте товары в избранное из каталога</p>
        </>
      )
      img = 'favorite_phones'
      break
    default:
      break
  }
  return (
    <div className={styles.emptyCard}>
      <img src={require(`../../../assets/img/${img}.jpg`)} alt="emptyImg" />
      <div className={styles.content}>
        {headerText}
        <Link to="/ReactShop">
          <OrderButton>Перейти в каталог</OrderButton>
        </Link>
      </div>
    </div>
  )
}

export { EmptyCard }
