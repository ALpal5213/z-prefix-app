import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState }  from 'react'
import { ItemContext } from './App';



const Card = ({items}) => {
  const Navigate = useNavigate();
  const {currentItem, setCurrentItem} = useContext(ItemContext);

  return (  
    <Container>
      <Row>
        {items.map((item, index) => {
          return <Col key={index}>
            <div className="card-container" onClick={() => {
              setCurrentItem(item);
              Navigate(`/Details/${item.id}`)
            }}>
              {item.item_name}
              <img src={item.image} width="200"/>
            </div>     
          </Col>
        })}
      </Row>
    </Container>
  );
}
 
export default Card;