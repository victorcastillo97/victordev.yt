import React from "react";
import {Table,Container,Button } from 'react-bootstrap';

export default function ProductTable(props) {
  const {openModalDelete} = props;

  return (
    <Container className="mt-4">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button variant="primary" onClick={openModalDelete}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
