import React from "react";
import {Button, Container} from 'react-bootstrap';

export default function ActionBar(){
    return(
        <Container className="d-flex mt-5">
            <div className="ms-auto">
                <Button variant="primary">Add product</Button>
            </div>
        </Container>
    );
}