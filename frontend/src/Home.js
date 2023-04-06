import { Container, Col, Row } from 'react-bootstrap';
import { useContext, useState }  from 'react'
import { ItemContext } from './App';
import Card from './Card.js'


// Display everyone's inventory
const Home = () => {
  const {items, setItems} = useContext(ItemContext);

  return (  
    <>
      <div>All Items</div>
      <Card items={items}/>
    </>
  );
}
 
export default Home;