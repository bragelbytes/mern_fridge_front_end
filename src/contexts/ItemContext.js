import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const ItemContext = createContext()

export const ItemProvider = (props) => {
  useEffect(() => {
    axios
      .get('https://mern-fridge-back-end.herokuapp.com/items')
      .then((response) => {
        setItems(response.data)
      })
  })

  const [items, setItems] = useState([])
  const [list, setList] = useState([])

  const inList = (item) => {
    for (let i = 0; i < list.length; i++){
      if(item._id === list[i]._id){
        return list[i].quantity + 1
      }
    }
    return false
  }

  const addItemToList = (item) => {
    if(inList(item)){
      setList([...list.filter(listItem => listItem._id != item._id), {...item, quantity: inList(item)}])
    } else {
      setList([...list, {...item, quantity: 1}])
    }
  }

  const getData = () => {
    axios
      .get('https://mern-fridge-back-end.herokuapp.com/items')
      .then((response) => {
        setItems(response.data)
      })
  }

  const removeFromList = (item) => {
    const listIndex = list.findIndex(listItem => listItem._id === item._id)
    console.log(item._id);
    console.log(listIndex);
    let newList = [...list]
    newList.splice(listIndex, 1)
    setList([...newList])
  }

  return(
    <ItemContext.Provider value={[items, setItems, getData, list, setList, addItemToList, removeFromList]}>
      {props.children}
    </ItemContext.Provider>
  )
}
