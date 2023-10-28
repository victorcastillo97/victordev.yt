import React from "react";
import {Button,Modal} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function ModalForm(props) {
    console.log(props)
    return (
        <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add product
          </Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Name </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Name of product" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Quantity </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Name of product" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Price </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Name of product" />
                    </Col>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Button type="submit">Submit</Button>
                </Modal.Footer>
        </Form>
      </Modal>
    );
  }