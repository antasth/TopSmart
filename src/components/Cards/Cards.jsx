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
      setIsLoading(true)
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
        const json = await res.json()
        setAllBrands(json.data)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [])

  // Функция собирает ключи от устройств на текущей странице и делает запросы на сервер по ключам
  const getDeviceDetails = () => {
    const deviceKeysOnPage = allDeviceList
      .slice(page * itemsOnPage - itemsOnPage, page * itemsOnPage)
      .reduce((acc, device) => [...acc, device.key], [])
    deviceKeysOnPage.map((key) => fetchDeviceDetails(key, 20))
  }
  const didPageMount = useRef(false)
  useEffect(() => {
    if (didPageMount.current) {
      getDeviceDetails()
    }
    didPageMount.current = true
  }, [page])

  const delay = (ms) => {
    console.log('delay')
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  // Функция делает запрос по деталям устройства, если плохой ответ, то делает повторный запрос
  const fetchDeviceDetails = async (key, tryCount) => {
    let raw = `{\n    "route": "device-detail",\n    "key": "${key}"\n}`
    let url =
      'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec'
    let options = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
    }

    try {
      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)
      if (json.status !== 200) {
        if (tryCount <= 1) throw Error
        await delay(500)
        return await fetchDeviceDetails(key, (tryCount -= 1))
      } else {
        setDevicesData((prevState) => [...prevState, json.data])
        setIsLoading(false)
      }
    } catch (error) {
      console.log('error', error)
      await delay(500)
      tryCount > 1 && (await fetchDeviceDetails(key, (tryCount -= 1)))
    }
  }

  // Функция делает запрос по деталям устройства
  // const  fetchDeviceDetails = (key) => {
  //   let raw = `{\n    "route": "device-detail",\n    "key": "${key}"\n}`

  //   let requestOptions = {
  //     method: 'POST',
  //     body: raw,
  //     redirect: 'follow',
  //   }

  //   fetch(
  //     'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec',
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then(json => console.log(json))
  //     .then((json) => setDevicesData((prevState) => [...prevState, json.data]))
  //     .then(() => setIsLoading(false))
  //     .catch((error) => console.log('error', error))
  // }

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
          devicesData.map(
            (device) =>
              device && (
                <Card
                  key={device.key}
                  {...device}
                  onImgClick={toggleModal}
                  showCart={toggleCart}
                  onAddToCart={() => onAddToCart(device)}
                />
              )
          )
        ) : (
          <Loader />
        )}
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
