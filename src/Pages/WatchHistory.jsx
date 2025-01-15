import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TiHomeOutline } from "react-icons/ti";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { watchHistoryAPI } from '../Services/allAPIs';
import { MdDelete } from "react-icons/md";

function WatchHistory() {
   
const[history,setHistory] = useState()

  const getHistory = async() =>{
    const result = await watchHistoryAPI()
    console.log(result);
    setHistory(result.data)
  }
  console.log(history);
  
  const handleDelete = async(id) =>{
    const result = await  deleteWatchHistoryAPI(id)
    console.log(result);
    window.location.reload()
  }

  useEffect(()=>{
    getHistory();

  },[])

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
          <th>caption</th>
          <th>url</th>
          <th>timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          history?history.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td>{item.url}</td>
            <td>{item.timestamp}</td>
            <td><MdDelete onClick={()=>handleDelete(item.id)} className='fs-1 text-danger' /></td>
          </tr>
          )):"No Data"
        }
      </tbody>
    </Table>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default WatchHistory