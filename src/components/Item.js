import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import UpdateItem, {toggleEdit} from './UpdateItem'
import axios from 'axios'
import images from '../itemImages.js'

const Item = () => {

  const [items, setItems, getData, list, setList, addItemToList] = useContext(ItemContext)

  // const getData = () => {
  //   axios
  //     .get('http://localhost:3003/items')
  //     .then((response) => {
  //       setItems(response.data)
  //     })
  // }

  const handleDelete = (itemInfo) => {
    axios
      .delete(`https://mern-fridge-back-end.herokuapp.com/items/${itemInfo._id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <>
    <div className="itembox">
      {items.map((item) => {
        return (
          <div className="item">
            <div className="icon">
              <img src={images[item.category]}/>
            </div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Brand: {item.brand}</p>
              <p>Qty: x{item.quantity}</p>
              <p>Category: {item.category}</p>
              <p>Exp. Date: {item.expiration.slice(-25, -14)}</p>
              <button onClick={() => handleDelete(item)}>Delete</button>
              <button onClick={() => addItemToList(item)}>Add To List</button>
              <UpdateItem item={item}/>
            </div>
          </div>
      )
    })}
    </div>
    </>
  )
}

export default Item
