import './App.css'
import { useState } from 'react'
import Item from './components/Item'
import AddItem from './components/AddItem'
import UpdateItem from './components/UpdateItem'
import axios from 'axios'
import {ItemProvider} from './contexts/ItemContext'

const App = () => {

  //login states
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateUser = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setUsername('')
    setPassword('')
    axios.post('http://localhost:3003/users',
    {
      username:username,
      password:password
    }
  ).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
          setErrorMessage(response.data)
          setToggleError(true)
      }
    })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setUsername('')
    setPassword('')
    axios.put('http://localhost:3003/users',
    {
      username:username,
      password:password
    }
  ).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
          console.log(response);
          setToggleError(true)
          setErrorMessage(response.data)
      }
    })
  }

  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }

  const handleToggleForm = () => {
    setToggleError(false)
    if(toggleLogin === true){
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }

  const handleToggleLogout = () => {
    if(toggleLogout){
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }

  return (
    <>
      <div className="top-nav">
        <div>
          {toggleLogout
            ? <button onClick={handleLogout} class="logout-button">Logout</button>
            : <div class="app-form">
                {toggleLogin
                  ? <div className="form">
                      <h1>Login</h1>
                      <form onSubmit={handleLogin} class="inputForm">
                        <input type="text" placeholder="username" class="textInput"
                        onChange={(event) => {setUsername(event.target.value)}}/>
                        <input type="password" placeholder="password" class="textInput"
                        onChange={(event) => {setPassword(event.target.value)}}/>
                        {toggleError
                          ? <h5>{errorMessage}</h5>
                          : null
                        }
                        <input type="submit" value="login" class="submit-button"/>
                      </form>
                    </div>
                  : <div className="top-nav" class="form">
                      <h1>Create Account</h1>
                      <form  onSubmit={handleCreateUser} class="inputForm">
                        <input type="text" placeholder="username" class="textInput"
                        onChange={(event) => {setUsername(event.target.value)}}/>
                        <input type="text" placeholder="password" class="textInput"
                        onChange={(event) => {setPassword(event.target.value)}}/>
                        {toggleError
                          ? <h5>{errorMessage}</h5>
                          : null
                        }
                        <input type="submit" value="Register" class="submit-button"/>
                      </form>
                    </div>
                  }
                  <button onClick={handleToggleForm} class="account-button">
                  {toggleLogin ? "Need an Account?" : "Already have an account?"}</button>
                </div>
                }
              </div>


      </div>
      {currentUser.username ?
      <>
      <h1>Items</h1>
      <ItemProvider>
        <AddItem />
        <Item />
      </ItemProvider>
      </>
      : null
      }
    </>
  )
}

export default App;
