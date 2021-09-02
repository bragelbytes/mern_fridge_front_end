import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'

const Item = () => {

  const [items, setItems] = useContext(ItemContext)

  return (
    <>
    {items.map((item) => {
      return (
        <div>
          <h3>Name: {item.name}</h3>
          <p>Brand: {item.brand}</p>
          <p>{item.image}</p>
          <p>Qty: x{item.quantity}</p>
          <p>Category: {item.category}</p>
          <p>Expiration Date: {item.expiration}</p>
        </div>
      )
    })}
    </>
  )
}

export default Item
