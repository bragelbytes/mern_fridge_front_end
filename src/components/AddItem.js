import React, {useState, useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'
import axios from 'axios'

const AddItem = () => {
  const [item, setItem] = useState({name: '', brand: '', image: '', quantity: '', category: '', expiration: ''})
  const [items, setItems, getData] = useContext(ItemContext)

  const handleChange = (event) => {
    setItem({...item, [event.target.name]:event.target.value})
  }

  const addItem = (e) => {
    e.preventDefault()
    setItems([...items, item])
    axios
      .post('http://localhost:3003/items', item)
      .then(() => {
        getData();
      })
  }

  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="brand"
        onChange={handleChange}
        placeholder="brand"
      />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        placeholder="image"
      />
      <input
        type="number"
        name="quantity"
        onChange={handleChange}
        placeholder="qty"
      />
      <select type="text" name="category" onChange={handleChange}>
      <option>Fruits 🍇</option>
      <option>Vegetables 🥕</option>
      <option>Dairy 🥛</option>
      <option>Eggs 🍳</option>
      <option>Cheese 🧀</option>
      <option>Meat & Seafood 🍗</option>
      <option>Beverages 🥤</option>
      <option>Leftovers 🥡</option>
      <option>Frozen 🍦</option>
      <option>Misc. 🍽️</option>
      </select>
      <input
        type="date"
        name="expiration"
        onChange={handleChange}
        placeholder="date"
      />
      <input type="submit" />
    </form>
  )

}

export default AddItem
