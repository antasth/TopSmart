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
  let allDevices = []
  const [allDeviceList, setAllDeviceList] = useState([])
  const itemsOnPage = 20

  const changePage = (page) => {
    console.log(page)
    page > 0 && setPage(page)
  }
  const changeTotalPages = () => {
    // setTotalPages(getPagesCount(allDeviceList.length, itemsOnPage))
    // console.log(allDeviceList.length)
    // console.log('allBrands', allBrands)
    setAllDeviceList(allDevices)
    // console.log('allDeviceList finally', allDeviceList);
  }

  const getAllDevicesList = (allBrands, callback) => {
    console.log('allDeviceList function')
    allBrands.map(
      (brand) =>
        (allDevices = ([
          ...allDevices,
          ...brand.device_list.map(
            (device) => (device = { ...device, brand_name: brand.brand_name })
          ),
        ]))
    )
    callback()
  }

// let allDev = []
  // allDeviceList.map (
  //   brand => 
  // let allDev = brand.reduce(function(prev, curr) { 
  //     return [...prev, ...curr.device_list]
  //   })
  // )

  // const getAllDevicesList = (allDevices, callback) => {
  //   allDevices.map(
  //     (brand) =>
  //       (setAllDeviceList ([
  //         ...allDeviceList,
  //         ...brand.device_list
  //         .map(
  //           (device) => (device = { ...device, brand_name: brand.brand_name })
  //         ),
  //       ]))
  //   )
  //   console.log('device List is ready', allDeviceList)
  //   callback()
  // }

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
  // fetchData()
  // }, [])

  // All Brands
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
        console.log(json.status)
        setAllBrands(json.data)
        // console.log('allBrands complete')
        // getAllDevicesList(allBrands, changeTotalPages)
        // console.log('allDeviceList', allDeviceList)
        // console.log('allBrands', allBrands)
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
      getAllDevicesList(allBrands, changeTotalPages)
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

  // const array = [1,2,4,5,7,44,3,2,3]
  return (
    <div className="cards flex flex-wrap my-5">
      {/* {console.log('render', allDeviceList)} */}
      {/* <Card {...allDeviceList} /> */}
      {!isLoading ? (
        // console.log('try to render cards', allDeviceList.length)
      
        // (
        allDeviceList
          .slice(0, 60)
          .map((device) => (
        <Card
          key={device.key}
          // brand_name={device.brand_name}
          {...device}
          onImgClick={toggleModal}
          showCart={toggleCart}
          onBuyClick={() => onAddToCart(device)}
        />
        )
        )) :
        <Loader />
      }

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
      <Pagination changePage={changePage} totalPages={166} page={page} />
      {/* <Pagination /> */}
    </div>
  )
}

export default Cards
