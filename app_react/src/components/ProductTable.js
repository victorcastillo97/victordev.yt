import React from "react";
import {Table,Container,Button } from 'react-bootstrap';

export default function ProductTable(props) {
  const {openModalDelete, openModalUpdate, products} = props;

  return (
    <Container className="mt-4">
      <Table striped bordered hover size="sm">
        <thead>
          <tr >
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="secondary" onClick={() => openModalUpdate(product)}>Update</Button>{' '}
                <Button variant="danger" onClick={() => openModalDelete(product)}>Delete</Button>
              </td>  
            </tr>  
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
