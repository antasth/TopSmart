import React from 'react'
import Card from './Card'
import phones from '../data/phones'

const Cards = () => {

  return (
    <div className="cards flex flex-wrap mt-5 mb-5">
      {phones.map((phone) => (
        <Card key={phone.id} {...phone} />
      ))}
    </div>
  )
}

export default Cards
