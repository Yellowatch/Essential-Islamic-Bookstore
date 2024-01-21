import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarCustom = () => {
  return (
    <>
      <Navbar className='navbar-pretty' data-bs-theme="dark" sticky="top">
        {/* <Container>
          <Navbar.Brand href="#home">Salih Hakki Bak</Navbar.Brand>
        </Container> */}
        <Container className='justify-content-center'>
          <Nav>
            <Nav.Link href="#books" className='nav-text'>My Books</Nav.Link>
            <Nav.Link href="#about" className='nav-text'>About Me</Nav.Link>
            <Nav.Link href="#contact" className='nav-text'>Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default NavbarCustom;