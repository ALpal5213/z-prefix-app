
import { Container, Col, Row } from 'react-bootstrap';
import { useContext }  from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './App';
import './Navbar.css'

const Navbar = () => {
  const Navigate = useNavigate();
  const {loggedIn, setLoggedIn, currentUser, setCurrentUser} = useContext(LoginContext);

  return (  
    <Container className="nav-container" fluid>
      <Row className="align-items-end">
        <Col className="nav-center" xs="6" md="4">
          <div className="nav-home" onClick={() => {Navigate('/')}}>Home</div>
        </Col>
        <Col className="nav-center" xs="6" md="4">
          {loggedIn && <div className="nav-text nav-route" onClick={() => {Navigate('/MyInventory')}}>MyInventory</div>}
        </Col>
        <Col className="nav-center" xs="12" md="4">
          {loggedIn && <div className="nav-text">Logged in as: {currentUser.first_name} {currentUser.last_name}</div>}
          {loggedIn && <div className="nav-text nav-route" onClick={() => {
            setLoggedIn(false);
            setCurrentUser(undefined);
            Navigate('/Login');
          }}>Logout</div>}
          {!loggedIn && <div className="nav-text nav-route" onClick={() => {Navigate('/Login')}}>Log In</div>}
        </Col>
      </Row>
    </Container>

  );
}
 
export default Navbar;