import React, {useContext, useState} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import axios from 'axios'

const UpdateItem = (props) => {
  const [items, setItems, getData] = useContext(ItemContext)
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [image, setImage] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [expiration, setExpiration] = useState('')

  const handleUpdate = (event, itemInfo) => {
    event.preventDefault()
    axios
      .put(`http://localhost:3003/items/${itemInfo._id}`,
        {
          name:name || itemInfo.name,
          brand:brand || itemInfo.brand,
          image:image || itemInfo.image,
          quantity:quantity || itemInfo.quantity,
          category:category || itemInfo.category,
          expiration:expiration || itemInfo.expiration
        }
      )
      .then(() => {
        getData()
      })
  }

  const handleNewName = (event) => {
    setName(event.target.value);
  }
  const handleNewBrand = (event) => {
    setBrand(event.target.value);
  }
  const handleNewImage = (event) => {
    setImage(event.target.value);
  }
  const handleNewQuantity = (event) => {
    setQuantity(event.target.value);
  }
  const handleNewCategory = (event) => {
    setCategory(event.target.value);
  }
  const handleNewExpiration = (event) => {
    setExpiration(event.target.value);
  }

  return (
    <details>
      <form onSubmit={(event) => handleUpdate(event, props.item)}>
        <label>Name: </label>
        <input type="text" onChange={handleNewName} defaultValue={props.item.name} />
        <br/>
        <label>Brand: </label>
        <input type="text" onChange={handleNewBrand} placeholder={props.item.brand} />
        <br/>
        <label>Image: </label>
        <input type="text" onChange={handleNewImage} placeholder={props.item.image} />
        <br/>
        <label>Quantity: </label>
        <input type="number" onChange={handleNewQuantity} placeholder={props.item.quantity} />
        <br/>
        <label>Category: </label>
        <input type="text" onChange={handleNewCategory} placeholder={props.item.category} />
        <br/>
        <label>Expiration: </label>
        <input type="date" onChange={handleNewExpiration} placeholder={props.item.expiration} />
        <br/>
        <input type="submit" />
      </form>
    </details>
  )

}

export default UpdateItem
