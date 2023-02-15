import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5'
import { RiBarChartFill } from 'react-icons/ri'
import { FavContext } from '../../context/FavContext'
import { ProductRating } from '../UI/ProductRating/ProductRating'
import styles from './ProductSpecs.module.scss'

const ProductSpecs = ({ device, scrollTo }) => {
  const fav = useContext(FavContext)
  const [isInFavorites, setIsInFavorites] = useState(false)
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
    prices,
  } = device

  const toggleFavorites = () => {
    setIsInFavorites(!isInFavorites)
    if (!isInFavorites) {
      fav.addToFavorites(device)
      setIsInFavorites(true)
    } else {
      fav.delFromFavorites(device)
      setIsInFavorites(false)
    }
  }

  useEffect(() => {
    setIsInFavorites(fav.checkDeviceInFav(device))
  }, [device])

  return (
    <>
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
          <h3 id="link" onClick={scrollTo}>
            Все характеристики
          </h3>
        </ul>
        <div className={styles.review}>
          <ProductRating rating={rating} rateCount={rateCount} />
          <div className={styles.actions}>
            <RiBarChartFill className={styles.icon} />
            <IoHeartOutline
              className={`${styles.icon} ${
                fav.checkDeviceInFav(device) && styles.icon_active
              }`}
              onClick={toggleFavorites}
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
                <CheckboxGroup colorScheme="green">
                  <Stack spacing={[4]} direction={['column']}>
                    <Checkbox value="screen">
                      <p>Защита Экрана 12 мес.</p>
                    </Checkbox>
                    <Checkbox value="sticker">
                      <p>
                        Изготовление+наклейка пленки на 1 сторону смартфона{' '}
                      </p>
                    </Checkbox>
                    <Checkbox value="officeapps">
                      <p>Комплект приложений "Офисный" </p>
                    </Checkbox>
                    <Checkbox value="sim">
                      <p>Обрезка Sim-карты (только при самовывозе товара)</p>
                    </Checkbox>
                    <Checkbox value="data">
                      <p>Перенос данных на новое устройство</p>
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </TabPanel>
              <TabPanel>
                <CheckboxGroup colorScheme="green" defaultValue={['guarantee']}>
                  <Stack spacing={[4]} direction={['column']}>
                    <Checkbox value="guarantee">
                      <p>Гарантия от производителя 12 мес. 0 ₽</p>
                    </Checkbox>
                    <Checkbox value="dopguarantee">
                      <p>Доп. гарантия+ 12 мес. 6 630 ₽ </p>
                    </Checkbox>
                    <Checkbox value="insurance">
                      <p>
                        Страховка для техники 2 года. Отремонтируем за 24 часа
                        или обменяем на новую.
                      </p>{' '}
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </TabPanel>
              <TabPanel>
                <CheckboxGroup
                  colorScheme="green"
                  defaultValue={prices > 20000 && ['case']}
                >
                  <Stack spacing={[4]} direction={['column']}>
                    <Checkbox value="case">
                      <p>
                        Чехол-накладка для смартфона (в подарок при покупке от
                        20 000 ₽)
                      </p>{' '}
                    </Checkbox>
                    <Checkbox value="glass">
                      <p>Защитное стекло для экрана</p>
                    </Checkbox>
                    <Checkbox value="sdcard">
                      <p>Карта памяти 64 ГБ</p>{' '}
                    </Checkbox>
                    <Checkbox value="simcard">
                      <p>SIM-карта МТС С саморегистрацией</p>{' '}
                    </Checkbox>
                    <Checkbox value="carcharger">
                      <p>Автомобильное зарядное устройство 37W </p>{' '}
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export { ProductSpecs }
