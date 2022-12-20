import { useState, useEffect } from 'react'
import Card from './Card'
// import phones from '../data/phones'

const Cards = () => {
  const [phones, setPhones] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/phones')
        const phones = await res.json()
        setPhones(phones)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="cards flex flex-wrap mt-5 mb-5">
      {!isLoading && phones.map((phone) => <Card key={phone.id} {...phone} />)}
    </div>
  )
}

export default Cards
