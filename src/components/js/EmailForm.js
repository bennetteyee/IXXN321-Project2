import React, { Component } from 'react'
import { FormGroup, Form} from 'react-bootstrap';

export const EmailForm = () => (
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Join now for weekly updates and newsletters</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Form>
    
)