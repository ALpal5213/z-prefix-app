import { Container, Col, Row } from 'react-bootstrap';
import { useContext, useState }  from 'react'
import { LoginContext } from './App';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {users, setLoggedIn, setCurrentUser, update, setUpdate} = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [signup, setSignup] = useState(false);
  const Navigate = useNavigate();

  let handleSignUp = () => {
    fetch('http://localhost:7999/users', {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastname,
        username: username,
        password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      setUpdate(!update)
      setSignup(false);
    });
  }

  return (  
    <Container className="login-background">
      <Row>
        <Col className="input-wrapper">
          {!signup && <h3>Log In Here</h3>}
          {!signup && <h5 className="sign-login" onClick={() => {setSignup(true)}}>Or Sign Up</h5>}
          {!signup && <label className="input-block">Username</label>}
          {!signup && <input className="input-block" type="text" placeholder="Type in Username" onChange={(e) => {setUsername(e.target.value)}}/>}
          {!signup && <label className="input-block">Password</label>}
          {!signup && <input className="input-block" type="password" placeholder="Type in Password" onChange={(e) => {setPassword(e.target.value)}}/>}
          {!signup && <button type="button" onClick={() => {
            users.forEach((user) => {
              if(user.username === username && user.password === password) {
                setCurrentUser(user);
                setLoggedIn(true);
                Navigate('/MyInventory');
              } 
            })
          }}>Login</button>}

          {signup && <h3>Sign Up Here</h3>}
          {signup && <h5 className="sign-login" onClick={() => {setSignup(false)}}>Or Back to Log In</h5>}
          {signup && <label className="input-block">Tell Us Your First Name</label>}
          {signup && <input className="input-block" type="text" onChange={(e) => {setFirstName(e.target.value)}}/>}
          {signup && <label className="input-block">Tell Us Your Last Name</label>}
          {signup && <input className="input-block" type="text" onChange={(e) => {setLastName(e.target.value)}}/>}
          {signup && <label className="input-block">Set Username</label>}
          {signup && <input className="input-block" type="text" placeholder="Type in New Username" onChange={(e) => {setUsername(e.target.value)}}/>}
          {signup && <label className="input-block">Password</label>}
          {signup && <input className="input-block" type="password" placeholder="Type in New Password" onChange={(e) => {setPassword(e.target.value)}}/>}
          {signup && <button type="button" onClick={handleSignUp}>Sign Up</button>}
        </Col>
      </Row>
    </Container>
  );
}
 
export default Login;