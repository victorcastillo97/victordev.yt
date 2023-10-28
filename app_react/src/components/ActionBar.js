import React from "react";
import {Button, Container} from 'react-bootstrap';

export default function ActionBar(props){
    const {openModalAddProduct} = props
    return(
        <Container className="d-flex mt-5">
            <div className="ms-auto">
                <Button variant="primary" onClick={openModalAddProduct}>Add product</Button>
            </div>
        </Container>
    );
}