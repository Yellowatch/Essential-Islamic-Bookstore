import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarCustom = () => {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container className='justify-content-center'>
            {/* <Navbar.Brand href="#home">Essential Islamic Books</Navbar.Brand> */}
            <Nav>
              <Nav.Link href="#home">My Books</Nav.Link>
              <Nav.Link href="#features">About Me</Nav.Link>
              <Nav.Link href="#pricing">Contact Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
};

export default NavbarCustom;