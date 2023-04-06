import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState }  from 'react'
import { ItemContext, } from './App';

const Details = () => {
  const Navigate = useNavigate();
  const {currentItem, setCurrentItem, update, setUpdate, currentUser} = useContext(ItemContext);
  const [editable, setEditable] = useState(false);
  const [authorized, setAuthorized] = useState(currentItem.user_id === currentUser.id ? true : false);
  const [itemName, setItemName] = useState(currentItem.item_name);
  const [description, setDescription] = useState(currentItem.description);
  const [quantity, setQuantity] = useState(currentItem.quantity);

  if(currentItem === null) {
    Navigate(-1);
  }

  // Patch functionality
  const handleEdit = () => {
    let changes = {};

    if(itemName !== currentItem.item_name) {
      changes.item_name = itemName
    }
    if(description !== currentItem.description) {
      changes.description = description
    }
    if(quantity !== currentItem.quantity) {
      changes.quantity = quantity
    }

    console.log(changes);
    
    fetch(`http://localhost:7999/item/${currentItem.id}`, {
      method: "PATCH",
      body: JSON.stringify(changes),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      console.log(res.body)
      setUpdate(!update);
      setEditable(false);
    });
  }

  return ( 
    <>
      {currentItem && <Container>
        <Row>
          <Col>
            <h1>Item Details</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <img src={currentItem.image} width="200"/>
          </Col>
          <Col xs="12" md="8">
            {!editable && <h2>{currentItem.item_name}</h2>}
            {!editable && <div>Quantity: {currentItem.quantity}</div>}
            {editable && <label>Item Name</label>}
            {editable && <input placeholder={itemName} onChange={(e) => {setItemName(e.target.value)}}/>}
            {editable && <label>Item Quantity</label>}
            {editable && <input placeholder={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>}
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            {!editable && authorized && <button type="button" onClick={() => {setEditable(true)}}>Edit</button>}
            {!editable && authorized && <button type="button">Delete</button>}
            {editable && <button type="button" onClick={handleEdit}>Update</button>}
            {editable && <button type="button" onClick={() => {
              setEditable(false);
              setItemName(currentItem.item_name);
              setQuantity(currentItem.quantity);
              setDescription(currentItem.description);
            }}>Cancel</button>}
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div>Description:</div>
            {!editable && <div>{currentItem.description}</div>}
            {editable && <input placeholder={description} onChange={(e) => {setDescription(e.target.value)}}/>}
          </Col>
        </Row>
      </Container>}
    </>
   );
}
 
export default Details;