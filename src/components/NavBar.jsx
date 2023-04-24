import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img
              src="/images/logoCrew.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            
          <Nav className="justify-content-end" >
            <Nav.Link href="/form">Login</Nav.Link>
            <Nav.Link href="/form">Register</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      
     
    </>
  );
}

export default NavBar;