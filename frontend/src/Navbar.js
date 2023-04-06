
import { Container, Col, Row } from 'react-bootstrap';
import { useContext, useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './App';

const Navbar = () => {
  const Navigate = useNavigate();
  const {users, setUsers, loggedIn, setLoggedIn, currentUser} = useContext(LoginContext);

  return (  
    <Container>
      <Row>
        <Col xs="6" md="4">
          <h2 onClick={() => {Navigate('/')}}>Home</h2>
        </Col>
        <Col xs="6" md="6">
          {loggedIn && <div onClick={() => {Navigate('/MyInventory')}}>MyInventory</div>}
        </Col>
        <Col xs="12" md="2">
          {loggedIn && <div>Logged in as: {currentUser.first_name} {currentUser.last_name}</div>}
          {loggedIn && <div onClick={() => {
            Navigate('/Login')
            setLoggedIn(false)
          }}>Logout</div>}
          {!loggedIn && <div onClick={() => {Navigate('/Login')}}>Login</div>}
        </Col>
      </Row>
    </Container>

  );
}
 
export default Navbar;