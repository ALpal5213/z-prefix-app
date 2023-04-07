import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import Navbar from './Navbar.js'
import Details from './Details.js'
import MyInventory from './MyInventory.js'
import Login from './Login.js'
import './App.css';

export const LoginContext = createContext();
export const ItemContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch('http://localhost:7999/table/users')
      .then(res => res.json())
      .then(data => setUsers(data))

    fetch('http://localhost:7999/table/item')
      .then(res => res.json())
      .then(data => {
        setItems(data)
        
        if(currentItem !== undefined) {
          for(let item of data) {
            if(item.id === currentItem.id) {
              setCurrentItem(item);
            }           
          }  
        }
      })
      // eslint-disable-next-line
  }, [loggedIn, update])

  return (
    <LoginContext.Provider value={{
      users, setUsers, 
      loggedIn, setLoggedIn, 
      currentUser, setCurrentUser,
      update, setUpdate
    }}>
    <ItemContext.Provider value={{
      items, setItems,
      currentItem, setCurrentItem,
      update, setUpdate,
      currentUser, setCurrentUser,
    }}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/MyInventory' element={<MyInventory/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
      </Routes>
    </ItemContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
