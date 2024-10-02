import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VedioCard from './VedioCard';

function ViewVedio() {
  return (
    <div>
     <Row className='border border-white p-3'>
      <Col>
      <VedioCard/>
      </Col>
      <Col>
      <VedioCard/>
      </Col>
      <Col>
      <VedioCard/>
      </Col>
      
      
     </Row>
    </div>
  )
}

export default ViewVedio