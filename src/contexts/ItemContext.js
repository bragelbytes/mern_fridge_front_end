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

  return(
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  )
}
