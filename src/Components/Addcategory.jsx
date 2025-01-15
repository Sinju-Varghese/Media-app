import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCatergoryAPI, getCatergoryAPI } from '../Services/allAPIs';
import { MdDelete } from "react-icons/md";

function Addcategory() {

  const [catergoryName,setCatergoryName] =useState("")
  const [catergoryDetails,setCatergoryDetails] =useState([])

  const handleCatergory = async()=>{
  
    if(catergoryName){
      const body={
        catergoryName,
        allVedio:[]
      }
      try{
        const result= addCatergoryAPI(body)
        console.log(result);
        alert("Catergory Added  Successfully")
        getCatergory();
        setCatergoryName("")
      }catch(error){
       console.log(error);
       
      }
    }

  }

  const getCatergory = async()=>{
    try{
    const result = await getCatergoryAPI()
    console.log(result);
    setCatergoryDetails(result.data)
    }catch(err){
      console.log(err);
    }
  };
  // console.log(catergoryDetails);
  

  useEffect(()=>{
    getCatergory();
  },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button style={{ float: 'right' }} onClick={handleShow} className='text-warning' >Add Catergory</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Catergory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
          <FloatingLabel controlId="floatingInput" label="Catergory Name" className="mb-2" >
        <Form.Control onChange={(e)=>setCatergoryName(e.target.value)} type="text" placeholder="Catergory Name" />
      </FloatingLabel>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleCatergory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>  

      <div className='row'>
        {
          catergoryDetails.length>0? catergoryDetails.map
          (item=>(
            <div className='col d-flex border border-rounded p-5'>
              <h6>{item.catergoryName}</h6>
              <MdDelete />
              </div>
          )):"nmo data"
        }

        </div>
      </div>
  )
}

export default Addcategory