import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Addvedio() {
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
          <FloatingLabel controlId="floatingInput" label="Vedio label" className="mb-2" >
        <Form.Control type="text" placeholder="Vedio Caption" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Vedio Image">
        <Form.Control type="text" placeholder="Vedio Image" className="mb-2" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Vedio Url">
        <Form.Control type="text" placeholder="Vedio Url" className="mb-2" />
      </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvedio