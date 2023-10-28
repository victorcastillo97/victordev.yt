import React from "react";
import {Table,Container,Button } from 'react-bootstrap';

export default function ProductTable(props) {
  const {openModalDelete, openModalUpdateProduct} = props;

  return (
    <Container className="mt-4">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cheese</td>
            <td>5</td>
            <td>4.0</td>
            <td>
              <Button variant="secondary" onClick={openModalUpdateProduct}>Update</Button>{' '}
              <Button variant="danger" onClick={openModalDelete}>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
