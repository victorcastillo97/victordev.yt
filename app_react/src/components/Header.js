import React from "react";
import {Navbar, Container} from 'react-bootstrap';

export default function Header() {
    return (
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Inventory</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Created by: <a href="#">Victor Castillo</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }