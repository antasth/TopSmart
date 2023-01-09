import { useState, useEffect, useRef } from 'react'
import { getPagesCount, shuffleArray } from '../../Utils/Pages'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination'

const Cards = ({ toggleModal, toggleCart, onAddToCart }) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [allBrands, setAllBrands] = useState([])
  const [page, setPage] = useState(0)
  const [devicesData, setDevicesData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [allDeviceList, setAllDeviceList] = useState([])
  const itemsOnPage = 12

  const changePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setPage(page)
      setDevicesData([])
    }
  }
  // Функция преобразовывает массив брендов в массив устройств
  const getAllDevicesList = (data, callback) => {
    const allDevices = data.reduce((acc, brand) => {
      const devices = brand.device_list.slice(0, 3).map((device) => ({
        ...device,
        full_name: `${brand.brand_name} ${device.device_name}`,
      }))
      return acc.concat(devices)
    }, [])
    shuffleArray(allDevices)
    setAllDeviceList(allDevices)
    callback(allDevices.length)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let requestOptions = {
          method: 'GET',
          redirect: 'follow',
        }
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=device-list',
          requestOptions
        )
        // .then((res) => res.json())
        // .then((json) => setAllBrands(json.data))
        const json = await res.json()
        setAllBrands(json.data)
      } catch (error) {
        setError(error)
      }
      // setIsLoading(false)
    }
    fetchData()
  }, [])

  // Функция собирает ключи от устройств на текущей странице и делает запросы на сервер по ключам
  const getDeviceDetails = () => {
    const devicesKeysOnPage = allDeviceList
      .slice(page * itemsOnPage - itemsOnPage, page * itemsOnPage)
      .reduce((acc, device) => [...acc, device.key], [])
    devicesKeysOnPage.map((key) => fetchDeviceDetails(key))
    setIsLoading(false)
  }

  useEffect(() => {
    getDeviceDetails()
  }, [page])

  // Функция делает запрос по деталям устройства
  const fetchDeviceDetails = (device) => {
    let raw = `{\n    "route": "device-detail",\n    "key": "${device}"\n}`

    let requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
    }

    fetch(
      'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        setDevicesData((prevState) => [...prevState, result.data])
      )
      .catch((error) => console.log('error', error))
  }

  const didMount = useRef(false)
  useEffect(() => {
    if (didMount.current) {
      getAllDevicesList(allBrands, (count) => {
        setTotalPages(getPagesCount(count, itemsOnPage))
      })
      setPage(1)
    } else {
      didMount.current = true
    }
  }, [allBrands])

  if (error) {
    return (
      <h1 className="mt-20">
        Произошла ошибка при загрузке данных с сервера, попробуйте позже...
      </h1>
    )
  }

  return (
    <>
      <div className="cards flex flex-wrap my-5">
        {!isLoading ? (
          devicesData
            .map((device) => (
              <Card
                key={device.key}
                {...device}
                onImgClick={toggleModal}
                showCart={toggleCart}
                // onAddToCart={() => onAddToCart(device)}
              />
            ))
        ) : (
          <Loader />
        )}
        {/* {!isLoading ? (
          allDeviceList
            .slice(page * itemsOnPage - itemsOnPage, page * itemsOnPage)
            .map((device) => (
              <Card
                key={device.key}
                {...device}
                onImgClick={toggleModal}
                showCart={toggleCart}
                onAddToCart={() => onAddToCart(device)}
              />
            ))
        ) : (
          <Loader />
        )} */}
      </div>
      {!isLoading && (
        <Pagination
          changePage={changePage}
          totalPages={totalPages}
          page={page}
        />
      )}
    </>
  )
}

export default Cards
