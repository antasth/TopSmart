import { useContext } from 'react'
import { FavContext } from '../../context/FavContext'
import { ProductRating } from '../UI/ProductRating/ProductRating'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import {
  IoStatsChartSharp,
  IoHeartOutline,
  IoShareSocialOutline,
} from 'react-icons/io5'
import styles from './ProductSpecs.module.scss'

const ProductSpecs = ({ device }) => {
  const fav = useContext(FavContext)
  const {
    display_size,
    storage,
    ram,
    os_type,
    battery,
    camera,
    chipset,
    rating,
    rateCount,
  } = device
  return (
    <section className={styles.devicecard}>
      <ul className={styles.devicespecs}>
        <h3 className={styles.specsheader}>Основные характеристики</h3>
        <li>
          Экран
          <span>{display_size}</span>
        </li>
        <li>
          Процессор
          <span>{chipset}</span>
        </li>
        <li>
          Оперативная память
          <span>{ram}</span>
        </li>
        <li>
          Встроенная память
          <span>{storage}</span>
        </li>
        <li>
          Камера
          <span>{camera}</span>
        </li>
        <li>
          OS
          <span>{os_type.split(' ')[0]}</span>
        </li>
        <li>
          Батарея
          <span>{battery}</span>
        </li>
        <h3>
          <a id="link" href="#">
            Все характеристики
          </a>
        </h3>
      </ul>
      <div className={styles.review}>
        <ProductRating rating={rating} rateCount={rateCount} />
        <div className={styles.actions}>
          <IoStatsChartSharp className={styles.icon} />
          <IoHeartOutline
            className={styles.icon}
            onClick={() => fav.addToFavorites(device)}
          />
          <IoShareSocialOutline className={styles.icon} />
        </div>
      </div>
      <div className={styles.services}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>
              <h3>Услуги</h3>
            </Tab>
            <Tab>
              <h3>Гарантия</h3>
            </Tab>
            <Tab>
              <h3>Аксессуары</h3>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Защита Экрана 12 мес.</p>
              <p>Изготовление+наклейка пленки на 1 сторону смартфона </p>
              <p>Наклейка стекла на смартфон </p>
              <p>Комплект приложений "Базовый" </p>
            </TabPanel>
            <TabPanel>
              <p>Гарантия от производителя12 мес. 0 ₽</p>
              <p>Доп. гарантия+ 12 мес. 6 630 ₽ </p>
              <p>
                Страховка для техники 2 года. Отремонтируем за 24 часа или
                обменяем на новую.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Чехол-накладка для смартфона в подарок (при покупке смартфона от
                15 000 ₽)
              </p>
              <p>Защитное стекло для экрана</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  )
}

export { ProductSpecs }
