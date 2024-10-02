import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function VedioCard() {
  return (
    <div>
     <Row>
        <Col>
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_1280.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="warning">Delete</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>


    </div>
  )
}

export default VedioCard