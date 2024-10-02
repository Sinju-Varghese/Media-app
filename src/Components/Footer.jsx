import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <Container> 
      <Row><Col className='text-center p-5'> "Join Our Community: Sign Up for the Latest News and Offers!" </Col></Row>
        <Row className='d-flex justify-contents-between p-2'> <Col>Media Player</Col> 
        <Col  >About Us
        </Col>   
        <Col> Address</Col>     </Row></Container>
  )
}

export default Footer