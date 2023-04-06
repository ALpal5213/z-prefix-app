import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState }  from 'react'
import { ItemContext } from './App';
import './Card.css'


const Card = ({items}) => {
  const Navigate = useNavigate();
  const {currentItem, setCurrentItem} = useContext(ItemContext);

  return (  
    <Container>
      <Row >
        {items.map((item, index) => {
          return <Col className="card-col" key={index}>
            <div className="card-container" onClick={() => {
              setCurrentItem(item);
              Navigate(`/Details/${item.id}`)
            }}>
              <h5>{item.item_name}</h5>
              <img className="card-image" src={item.image}/>
              <p>Qty: {item.quantity}</p>
              <p>
                {item.description.length > 100 ? 
                item.description.slice(0,100) + '...' : item.description}
              </p>
            </div>     
          </Col>
        })}
      </Row>
    </Container>
  );
}
 
export default Card;