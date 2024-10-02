import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaMusic } from "react-icons/fa6";

function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="/" className='text-white d-flex'>
          <FaMusic className='fs-1 mx-3' />
            <h1>Media Player</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header