import { useState, useEffect, useRef } from 'react'
import { getPagesCount } from '../../Utils/Pages'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination'

const Cards = ({ toggleModal, toggleCart, onAddToCart }) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [allBrands, setAllBrands] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [allDeviceList, setAllDeviceList] = useState([])
  const itemsOnPage = 20

  const changePage = (page) => {
    console.log(page)
    page > 0 && setPage(page)
  }

  const getAllDevicesList = (data, callback) => {
    const allDevices = data.reduce((acc, brand) => {
      const devices = brand.device_list.slice(0, 1).map((device) => ({
        ...device,
        full_name: `${brand.brand_name} ${device.device_name}`,
      }))
      return acc.concat(devices)
    }, [])

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
        fetch(
          'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=device-list',
          requestOptions
        )
          .then((res) => res.json())
          .then((json) => setAllBrands(json.data))
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const didMount = useRef(false)
  useEffect(() => {
    if (didMount.current) {
      getAllDevicesList(allBrands, (count) => {
        setTotalPages(getPagesCount(count, itemsOnPage))
      })
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
          allDeviceList
            .slice(0, 19)
            .map((device) => (
              <Card
                key={device.key}
                {...device}
                onImgClick={toggleModal}
                showCart={toggleCart}
                onBuyClick={() => onAddToCart(device)}
              />
            ))
        ) : (
          <Loader />
        )}
      </div>
      <Pagination changePage={changePage} totalPages={totalPages} page={page} />
    </>
  )
}

export default Cards
