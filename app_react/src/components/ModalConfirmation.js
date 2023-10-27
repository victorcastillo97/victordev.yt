import React, { useEffect, useState }  from "react";
import {Button,Modal} from 'react-bootstrap';

export default function ModalConfirmation(props) {
    return (
        //<Modal show={show} onHide={handleClose}>
        //<Button variant="secondary" onClick={handleClose}>
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header >
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>            
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
  }