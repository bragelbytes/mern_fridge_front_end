import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import UpdateItem from './UpdateItem'
import axios from 'axios'

const Item = () => {

  const [items, setItems] = useContext(ItemContext)

  const getData = () => {
    axios
      .get('http://localhost:3003/items')
      .then((response) => {
        setItems(response.data)
      })
  }

  const handleDelete = (itemInfo) => {
    axios
      .delete(`http://localhost:3003/items/${itemInfo._id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <>
    {items.map((item) => {
      return (
        <div>
          <h3>Name: {item.name}</h3>
          <p>Brand: {item.brand}</p>
          {item.image}
          <p>Qty: x{item.quantity}</p>
          <p>Category: {item.category}</p>
          <p>Expiration Date: {item.expiration}</p>
          <button onClick={() => handleDelete(item)}>Delete</button>
          <UpdateItem item={item}/>
        </div>
      )
    })}
    </>
  )
}

export default Item
