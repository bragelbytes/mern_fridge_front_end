import React, {useContext, useState} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import axios from 'axios'

const UpdateItem = () => {
  const [items, setItems] = useContext(ItemContext)
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

  //NEED TO MAKE THE EDIT FORM HERE

}
