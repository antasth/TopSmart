import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BuyButton } from '../../components/UI/BuyButton/BuyButton'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbReportMoney } from 'react-icons/tb'
import { FiPercent } from 'react-icons/fi'
import { IoChevronForward } from 'react-icons/io5'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './ProductCards.module.scss'

const ProductCards = ({ device }) => {
  const cart = useContext(CartContext)

  return (
    <section className={styles.controls}>
      <div className={styles.price}>
        <div className={styles.pricetext}>
          <b>{slicePrice(device.prices)} ₽</b>
          <div className={styles.pricedefault}>
            {slicePrice(device.prices + 2500)}
          </div>
        </div>
        <BuyButton
          onAddToCart={() => cart.onAddToCart(device)}
          isActive={cart.cartItems.includes(device) ? true : false}
        >
          Купить
        </BuyButton>
      </div>

      <div className={styles.bonuscard}>
        <GiReceiveMoney className={styles.bonusicon} />
        <p>Кэшбэк +{Math.round(device.prices / 100)} бонусных рублей</p>
        <IoChevronForward className={styles.bonusarrow} />
      </div>

      <div className={styles.bonuscard}>
        <FiPercent className={styles.bonusicon} />
        <p>Рассрочка от {Math.round(device.prices / 20)} ₽/мес</p>
        <IoChevronForward className={styles.bonusarrow} />
      </div>

      <div className={styles.bonuscard}>
        <TbReportMoney className={styles.bonusicon} />
        <p>Нашли дешевле ?</p>
        <IoChevronForward className={styles.bonusarrow} />
      </div>
    </section>
  )
}

export { ProductCards }
