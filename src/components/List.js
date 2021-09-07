import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import images from '../itemImages.js'
import axios from 'axios'

const List = () => {
  const [items, setItems, getData, list, setList, addItemToList, removeFromList] = useContext(ItemContext)

  return(
    <>
    <div className="listbox">
      <h3>Shopping List</h3>
      {list.map((item) => {
        return(
          <div className="list-item">
            <img src={images[item.category]}/>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Brand: {item.brand}</p>
              <p>Qty: x{item.quantity}</p>
              <button onClick={() => removeFromList(item)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default List
