import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TiHomeOutline } from "react-icons/ti";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function WatchHistory() {
  return (
    <div>
      <Row>
      <Col className='p-5 text-warning'><h4>Watch History</h4></Col>
        <Col>
        <Link to={'/Home'}>
        <h4 className='p-5' style={{float:'right'}} ><span><TiHomeOutline />Back Home</span></h4>
        </Link>
        </Col>
      </Row>

      <Container>
      <Row>
        <Col>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>SL No</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time sTamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>hijk</td>
        </tr>
        
      </tbody>
    </Table>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default WatchHistory