import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVedioAPI } from '../Services/allAPIs';
import Swal from 'sweetalert2'


function Addvedio({setUploadVedioresponse}) {
  const [VedioDetails,setVedioDetails] =useState({
    caption:"",
    img:'',
    url:""
  })
  console.log(VedioDetails);

  const getEmbbedLink=(e)=>{
    //console.log(e.target.value);
    //destructuring
    const {value}=e.target
    console.log(value);
    let yCode =value.slice(-31)
    let yLink =`https://www.youtube.com/embed/${yCode}`
    setVedioDetails({...VedioDetails,url:yLink})
  }
  const handleAdd=async()=>{
    const {caption,url,img}=VedioDetails
    if(!caption || !url || !img){
      alert("Please Fill Details")
    }
    else{
      //addVedioAPI
      const response =await addVedioAPI(VedioDetails)
      console.log(response);
      if(response.status >=200 && response.status < 300){
        Swal.fire({
          title: 'Success!',
          text: 'Video added successfully',
          icon: 'success',
          confirmButtonText: 'Back'
        })
        setUploadVedioresponse(response.data)
        setVedioDetails({
          caption:"",
          url:"",
          img:""
        })
        handleClose()
      }
    else{
      Swal.fire({
        title: 'Error!',
        text: response.error,
        icon: 'error',
        confirmButtonText: 'Back'
      })
      setVedioDetails({
        caption:"",
        url:"",
        img:""
      })
      handleClose()
    }    
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button onClick={handleShow}><FaCloudUploadAlt /></Button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Upload Vedio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the details</p>
          <form >
          <FloatingLabel controlId="floatingInput" label="Vedio Caption" className="mb-2" >
        <Form.Control onChange={e=>setVedioDetails({...VedioDetails,caption:e.target.value})} type="text" placeholder="Vedio Caption" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Vedio Image">
        <Form.Control onChange={e=>setVedioDetails({...VedioDetails,img:e.target.value})} type="text" placeholder="Vedio Image" className="mb-2" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Vedio Url">
        <Form.Control onChange={getEmbbedLink} type="text" placeholder="Vedio Url" className="mb-2" />
      </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvedio