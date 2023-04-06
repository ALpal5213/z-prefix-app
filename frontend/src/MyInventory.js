import { Container, Col, Row } from 'react-bootstrap';
import { useContext, useState }  from 'react'
import { ItemContext, LoginContext } from './App';
import { useNavigate } from 'react-router-dom';
import Card from './Card.js'

const MyInventory = () => {
  const Navigate = useNavigate();
  const {loggedIn} = useContext(LoginContext);
  const { currentUser, items } = useContext(ItemContext);


  const myItems = items.filter((item) => {
    return item.user_id === currentUser.id;
  })

  if(!loggedIn) {
    Navigate('/')
  }

  return (  
    <>
      <div>MyInventory</div>
      <Card items={myItems}/>
    </>
  );
}
 
export default MyInventory;