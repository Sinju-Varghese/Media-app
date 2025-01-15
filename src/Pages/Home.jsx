import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import ViewVedio from '../Components/Viewvedio';
import Addvedio from '../Components/Addvedio'
import Addcategory from '../Components/Addcategory';
import { MdDelete } from "react-icons/md";


function Home() {
  //state creation for lifting (parent Component)
  const [uploadVedioResponse,setUploadVedioresponse]=useState({})
  return (
    <>
     <Container>
    <Row>
      <Col>
      <div className='d-flex'>
        {/* first child for state lifting AddVedio (setstate) */}
        <p className='me-4 p-3'>Upload videos </p>
         <Addvedio setUploadVedioresponse={setUploadVedioresponse} />
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
      <p className='p-3'>All Videos</p>
      {/* 2nd child for state lifting viewVedio (setstate) */}
      <ViewVedio  uploadVedioResponse={uploadVedioResponse} />
      </Col>
      <Col>
      <p className='p-2' style={{float:'right'}}>Catergory</p>
      <Addcategory/>
      {/* <br />
      <div style={{border:'2px solid black',borderRadius:5,marginTop:10}}>
                <div style={{}}>

                </div>
            
                 <p>Tamil Songs</p>
                 <button style={{ backgroundColor: 'red', border: 'transparent', width: 40, height: 40 }}><MdDelete style={{ width: 30, height: 30 }} />
                 </button>
                 
      </div> */}
      </Col>
    </Row>
   </Container>
    </>
  )
}

export default Home