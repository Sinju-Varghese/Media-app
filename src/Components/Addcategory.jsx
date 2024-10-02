import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addcategory() {
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
        <Form.Control type="text" placeholder="Catergory Name" />
      </FloatingLabel>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addcategory