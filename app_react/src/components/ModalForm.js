import React, { useState } from "react";
import {Button,Modal} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ModalForm(props) {
  const {show, onHide, onSubmit} = props;
  const [newProduct, setNewProduct] = useState({name: "", price: ""});

  const handleFormChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  };

  const handleFormSubmit = () => {
    if(newProduct.name && newProduct.price){
      console.log(newProduct)
      onSubmit();
      onHide();
    }
  };

  return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}> Name </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" name="name" 
                    value={newProduct.name} onChange={handleFormChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}> Price </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" name="price" 
                    value={newProduct.price} onChange={handleFormChange}/>
                </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
              
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
          <Button variant="primary" onClick={handleFormSubmit}>Submit</Button>
        </Modal.Footer>
        
      </Modal>
    );
  }