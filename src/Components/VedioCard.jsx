import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal';
import ViewVedio from './Viewvedio';
import { addWatchAPI, deleteVedioAPI } from '../Services/allAPIs';



function VedioCard({VedioDetails}) {

  const handleDelete=async(id)=>{
    const result= await deleteVedioAPI(id)
    window.location.reload()
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //add watch history details to the server
  const handleShow = async() => {
    setShow(true);
    const {caption ,url} = VedioDetails
    //generate the date and time
    let today = new Date()
    console.log(today);
    //to convert date and time
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric', month:'numeric',day:'numeric',hour:"2-digit",minute:"2-digit", second:"2-digit"}).format(today)
    console.log(timestamp); //10/12/2034. 04:30:09PM
    
    let details={
      caption,url,timestamp
    }
    //api calling
    const response = await addWatchAPI(details)
    console.log(response);
    
  }
   
  const dragStarted=(e,vedioId)=>{
    console.log("vedio dragStarted...id"+vedioId);
    console.log(e);
    e.dataTransfer.setData("vedioId",vedioId)
  }

  return (
    <div>
     
        <Card draggable={true} onDragStart={(e)=>dragStart(e,VedioDetails.id)} style={{ width: '200px', height:'300px' }} className='p-4'>
      <Card.Img onClick={handleShow} variant="top" src={VedioDetails.img} />
      <Card.Body className='d-flex'>
        <p className=''>{VedioDetails.caption}</p> < ><RiDeleteBin5Line onClick={()=>handleDelete(VedioDetails.id)}  className='fs-3  fw-bolder' /></>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <p className='fs-3'>{VedioDetails.caption}</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
        <iframe className='p-4' width="460" height="315" src={VedioDetails.url}title="Youtube Vedio Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Modal>
    </div>
  )
}

export default VedioCard