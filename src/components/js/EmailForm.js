import React, { Component } from 'react'
import { FormGroup, Form} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .form-group{
       background: #F4E6D8;
       padding: 15px;
       border-radius: 20px;
   }
`;

export const EmailForm = () => (
<Styles>
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Join now for weekly updates and newsletters</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Form>
</Styles>

)