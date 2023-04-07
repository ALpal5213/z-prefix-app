import { Container, Col, Row } from 'react-bootstrap';
import { useContext, useState }  from 'react'
import { ItemContext, LoginContext } from './App';
import Card from './Card.js'


// Display everyone's inventory
const Home = () => {
  const {items, currentUser} = useContext(ItemContext);
  const {users} = useContext(LoginContext);
  const [query, setQuery] = useState('');

  let itemsToDisplay = items.filter(item => {
    if(query.length === 0) {
      return true;
    } else {
      let userId;
      for(let user of users) {
        let fullName = `${user.first_name} ${user.last_name}`;
        if(fullName.toLowerCase().includes(query.toLowerCase()) && user.username) {
          userId = user.id;
        }
      }

      return item.item_name.toLowerCase().includes(query) || item.user_id === userId;
    }
  })

  return (  
    <>
      <Container>
        <Row>
          <Col>
            <h2>Welcome {currentUser ? currentUser.first_name : ''}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="input-wrapper">
            <label className="input-block">Search By Product or Manager:</label>
            <input className="input-block" type="text" placeholder="Search..." onChange={(e) => {setQuery(e.target.value)}}/>
          </Col>
        </Row>
      </Container>
      
      <Card items={itemsToDisplay}/>
    </>
  );
}
 
export default Home;