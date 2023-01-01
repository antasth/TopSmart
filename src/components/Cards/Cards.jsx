import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'

const Cards = ({ toggleModal, toggleCart, onAddToCart }) => {
  const [phones, setPhones] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.jsonbin.io/v3/b/63a46723dfc68e59d56ea726',
          {
            headers: {
              'X-Master-Key':
                '$2b$10$IsQSs7ZB/l0Bk0iHJLKL3erw66z2I9XRlziY4gGLRt6B/9VX9ZFEK',
            },
          }
        )
        const data = await res.json()
        setPhones(data.record.phones)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (error) {
    return (
      <h1 className="mt-20">
        Произошла ошибка при загрузке данных с сервера, попробуйте позже...
      </h1>
    )
  }

  return (
    <div className="cards flex flex-wrap my-5">
      {!isLoading ? (
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
      )}
    </div>
  )
}

export default Cards
