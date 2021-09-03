import { useState } from 'react'
import Item from './components/Item'
import AddItem from './components/AddItem'
import UpdateItem from './components/UpdateItem'
import axios from 'axios'
import {ItemProvider} from './contexts/ItemContext'

const App = () => {

  return (
    <>
      <h1>Items</h1>
      <ItemProvider>
        <AddItem />
        <Item />
        
      </ItemProvider>
    </>
  )
}

export default App;
