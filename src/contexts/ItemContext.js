import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const ItemContext = createContext()

export const ItemProvider = (props) => {
  useEffect(() => {
    axios
      .get('http://localhost:3003/items')
      .then((response) => {
        setItems(response.data)
      })
  })

  const [items, setItems] = useState([])

  const getData = () => {
    axios
      .get('http://localhost:3003/items')
      .then((response) => {
        setItems(response.data)
      })
  }

  return(
    <ItemContext.Provider value={[items, setItems, getData]}>
      {props.children}
    </ItemContext.Provider>
  )
}
