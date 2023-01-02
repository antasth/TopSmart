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
  let allDeviceList = []

  const changePage = (page) => {
    setPage(page)
  }
  const changeTotalPages = () => {
    setTotalPages(getPagesCount(allDeviceList.length, 20))

    console.log(getPagesCount(allDeviceList.length, 20))
  }

  const getAllDevicesList = (allBrands, callback) => {
    allBrands.map(
      (brand) =>
        (allDeviceList = [
          ...allDeviceList,
          ...brand.device_list.map(
            (device) => (device = { ...device, brand_name: brand.brand_name })
          ),
        ])
    )
    callback()
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://api.jsonbin.io/v3/b/63a46723dfc68e59d56ea726',
  //         {
  //           headers: {
  //             'X-Master-Key':
  //               '$2b$10$IsQSs7ZB/l0Bk0iHJLKL3erw66z2I9XRlziY4gGLRt6B/9VX9ZFEK',
  //           },
  //         }
  //       )
  //       const data = await res.json()
  //       setPhones(data.record.phones)
  //     } catch (error) {
  //       setError(error)
  //     }
  //     setIsLoading(false)
  //   }
  //   fetchData()
  // }, [])

  // All Brands
  useEffect(() => {
    const fetchData = async () => {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow',
      }
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=device-list',
        requestOptions
      )
      const json = await res.json()
      console.log(json.status)
      setAllBrands(json.data)
    }
    fetchData()
  }, [])

  const didMount = useRef(false)
  useEffect(() => {
    if (didMount.current) {
      getAllDevicesList(allBrands, changeTotalPages)
    } else {
      didMount.current = true
    }
  }, [allBrands])

  // console.log('allBrands', allBrands)

  // setTotalPages(getPagesCount(allDeviceList.length, 20))
  // console.log(allDeviceList.length)

  // console.log('allDeviceList', allDeviceList)

  if (error) {
    return (
      <h1 className="mt-20">
        Произошла ошибка при загрузке данных с сервера, попробуйте позже...
      </h1>
    )
  }

  return (
    <div className="cards flex flex-wrap my-5">
      {/* {!isLoading ? (
        allDeviceList.map((device) => (
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
      )} */}

      {/* {!isLoading ? (
        phones.map((phone) => (
          <Card
            key={phone.id}
            {...phone}
            onImgClick={toggleModal}
            showCart={toggleCart}
            onBuyClick={() => onAddToCart(phone)}
          />
        ))
      ) : (
        <Loader />
      )} */}
      <Pagination changePage={changePage} totalPages={totalPages} page={page} />
    </div>
  )
}

export default Cards
