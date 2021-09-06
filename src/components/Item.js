import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import UpdateItem from './UpdateItem'
import axios from 'axios'
import images from '../itemImages.js'

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
    <div class="itembox">
      {items.map((item) => {
        return (
          <div class="item">
            <h3>Name: {item.name}</h3>
            <p>Brand: {item.brand}</p>
            <img src={images[item.category]}/>
            <p>Qty: x{item.quantity}</p>
            <p>Category: {item.category}</p>
            <p>Exp. Date: {item.expiration.slice(-25, -14)}</p>
            <button onClick={() => handleDelete(item)}>Delete</button>
            <UpdateItem item={item}/>
          </div>
      )
    })}
    </div>
    </>
  )
}

export default Item
