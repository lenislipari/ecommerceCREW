import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link, useParams } from 'react-router-dom';


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
          <Nav>
            
              <Nav.Link href="/marca/Nike" className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Nike</Nav.Link>
              <Nav.Link href="/marca/Adidas" className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Adidas</Nav.Link>
              <Nav.Link href="/marca/Puma" className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Puma</Nav.Link>
            
          </Nav>

          <Nav className="justify-content-end" >
            <Nav.Link href="/form">Login</Nav.Link>
            <Nav.Link href="/form">Register</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>


    </>
  );
}

export default NavBar;