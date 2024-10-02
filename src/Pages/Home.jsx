import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import ViewVedio from '../Components/Viewvedio';
import Addvedio from '../Components/Addvedio'
import Addcategory from '../Components/Addcategory';


function Home() {
  return (
    <>
     <Container>
    <Row>
      <Col>
      <div className='d-flex'>
        <p className='me-4'>Upload videos </p>
        <Addvedio/>
      </div>
      </Col>
      <Col>
      <Link to={'/WatchHistory'}>
      <p style={{float:'right'}}>Watch History</p>
      </Link>
      </Col>
    </Row>
    <Row>
      <Col>
      <p>All Videos</p>
      <ViewVedio/>
      </Col>
      <Col>
      <p className='p-2' style={{float:'right'}}>Catergory</p>
      <Addcategory/>
      </Col>
    </Row>
   </Container>
    </>
  )
}

export default Home