import { Container, Col, Row } from 'react-bootstrap';
import { useContext, useState }  from 'react'
import { ItemContext, LoginContext } from './App';
import { useNavigate } from 'react-router-dom';
import Card from './Card.js'

const MyInventory = () => {
  const Navigate = useNavigate();
  const {loggedIn} = useContext(LoginContext);
  const { currentUser, items, update, setUpdate } = useContext(ItemContext);
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const myItems = items.filter((item) => {
    return item.user_id === currentUser.id;
  })

  if(!loggedIn) {
    Navigate('/')
  }

  const handlePost = () => {    
    fetch(`http://localhost:7999/item`, {
      method: "POST",
      body: JSON.stringify({
        image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg',
        user_id: currentUser.id,
        item_name: itemName,
        description: description,
        quantity: quantity
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      setUpdate(!update);
      setShow(false);
    });
  }

  return (  
    <>
      <Container>
        <Row>
          <Col>
            <h2>{currentUser.first_name} {currentUser.last_name}'s Inventory</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {!show && <button type="button" onClick={() => {setShow(!show)}}>Add Item</button>}
            {show && <div className="input-wrapper">
              <label className="input-block">Item Name:</label>
              <input className="input-block" type="text" placeholder="Item Name..." onChange={(e) => setItemName(e.target.value)}/>
              <label className="input-block">Quantity:</label>
              <input className="input-block" type="number" placeholder="0" onChange={(e) => setQuantity(parseInt(e.target.value))}/>
              <label className="input-block">Description:</label>
              <input className="input-block" type="text" placeholder="Description..." onChange={(e) => setDescription(e.target.value)}/>
              <button type="button" onClick={handlePost}>Add</button>
              <button type="button" onClick={() => setShow(false)}>Cancel</button>
            </div>}
          </Col>
        </Row>
      </Container>
      <Card items={myItems}/>
    </>
  );
}
 
export default MyInventory;