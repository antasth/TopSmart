import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BuyButton } from '../../components/UI/BuyButton/BuyButton'
import { ModalCard } from '../ModalCard/ModalCard'
import { ModalContent } from '../ModalContent/ModalContent'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbReportMoney } from 'react-icons/tb'
import { FiPercent } from 'react-icons/fi'
import { IoChevronForward } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiPostOffice } from 'react-icons/gi'
import { IoWalk } from 'react-icons/io5'
import { RiPoliceCarFill } from 'react-icons/ri'
import { slicePrice } from '../../Utils/PageFunctions'
import styles from './ProductCards.module.scss'

const ProductCards = ({ device }) => {
  const cart = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const [modal, setModal] = useState('')
  const [modalText, setModalText] = useState('')

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    const getModalText = () => {
      switch (modal) {
        case 'cashback':
          return (
            <ModalContent
              header={'Получайте бонусы при покупке'}
              icon={<GiReceiveMoney />}
              description={`Вернём часть стоимости покупок на персональный бонусный счет. Количество бонусов, начисляемых за товар, Вы можете увидеть рядом с ценой каждого товара. При покупке данного товара вы получите ${Math.round(
                device.prices / 100
              )} бонусов!`}
              img={'cash_back'}
            />
          )
        case 'installment':
          return <h1>installment modal</h1>
        case 'cheaper':
          return <h1>cheaper modal</h1>
        default:
          return <h1>default modal</h1>
      }
    }
    setModalText(() => getModalText())
  }, [modal])

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
          isActive={cart.checkDeviceInCart(device)}
        >
          Купить
        </BuyButton>
      </div>

      <div
        className={styles.bonuscard}
        onClick={() => {
          setModal('cashback')
          toggleModal()
        }}
      >
        <GiReceiveMoney className={styles.bonusicon} />
        <p>Кэшбэк +{Math.round(device.prices / 100)} бонусов</p>
        <IoChevronForward className={styles.bonusarrow} />
      </div>

      <div
        className={styles.bonuscard}
        onClick={() => {
          setModal('installment')
          toggleModal()
        }}
      >
        <FiPercent className={styles.bonusicon} />
        <p>Рассрочка от {Math.round(device.prices / 20)} ₽/мес</p>
        <IoChevronForward className={styles.bonusarrow} />
      </div>

      <div
        className={styles.bonuscard}
        onClick={() => {
          setModal('cheaper')
          toggleModal()
        }}
      >
        <TbReportMoney className={styles.bonusicon} />
        <p>Нашли дешевле ?</p>
        <IoChevronForward className={styles.bonusarrow} />
      </div>

      <div className={styles.receive}>
        <div className={styles.title}>
          <p>Способы получения заказа</p>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <IoWalk className={styles.bonusicon} />
            <p>
              <a id="link" href="#">
                Самовывоз
              </a>{' '}
              из магазинов TopSmart Сегодня, бесплатно
            </p>
          </div>
          <div className={styles.option}>
            <GiPostOffice className={styles.bonusicon} />
            <p>
              {' '}
              <a id="link" href="#">
                Отправим Почтой
              </a>{' '}
              России, бесплатно
            </p>
          </div>
          <div className={styles.option}>
            <TbTruckDelivery className={styles.bonusicon} />
            <p>
              <a id="link" href="#">
                Курьерская доставка
              </a>{' '}
              Завтра, бесплатно
            </p>
          </div>
          <div className={styles.option}>
            <RiPoliceCarFill className={styles.bonusicon} />
            <p>
              <a className={styles.link} id="link" href="#">
                Экспресс-доставка{' '}
              </a>{' '}
              от 2 часов сегодня (при оплате онлайн)
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalCard toggleModal={toggleModal}>{modalText}</ModalCard>
      )}
    </section>
  )
}

export { ProductCards }
