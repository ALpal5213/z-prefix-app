import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState }  from 'react'
import { ItemContext, } from './App';

const Details = () => {
  const Navigate = useNavigate();
  const {currentItem, update, setUpdate, currentUser} = useContext(ItemContext);
  const [editable, setEditable] = useState(false);
  const [authorized] = useState(
    !currentUser || currentItem.user_id !== currentUser.id ? false : true
  );
  const [itemName, setItemName] = useState(currentItem.item_name);
  const [description, setDescription] = useState(currentItem.description);
  const [quantity, setQuantity] = useState(currentItem.quantity);

  const handleDelete = () => {
    fetch(`http://localhost:7999/item/${currentItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => {
      setUpdate(!update);
      Navigate('/MyInventory');
    });
  }

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
    
    fetch(`http://localhost:7999/item/${currentItem.id}`, {
      method: "PATCH",
      body: JSON.stringify(changes),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      setUpdate(!update);
      setEditable(false);
    });
  }

  return ( 
    <>
      {currentItem && <Container className="details-background">
        <Row>
          <Col>
            <h2>Item Details</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <img src={currentItem.image} alt="" width="300"/>
          </Col>
          <Col className="input-wrapper" xs="12" md="8">
            {!editable && <h3>{currentItem.item_name}</h3>}
            {!editable && <div>Quantity: {currentItem.quantity}</div>}
            {editable && <label className="input-block">Item Name:</label>}
            {editable && <input className="input-block" placeholder={itemName} onChange={(e) => {setItemName(e.target.value)}}/>}
            {editable && <label className="input-block">Item Quantity:</label>}
            {editable && <input className="input-block" placeholder={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>}
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            {!editable && authorized && <button type="button" onClick={() => {setEditable(true)}}>Edit</button>}
            {!editable && authorized && <button type="button" onClick={handleDelete}>Delete</button>}
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
            {editable && <textarea className="input-desc" placeholder={description} onChange={(e) => {setDescription(e.target.value)}}/>}
          </Col>
        </Row>
      </Container>}
    </>
   );
}
 
export default Details;