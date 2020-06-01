import React, { Component } from 'react'
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .input-group{
       background: #F4E6D8;
       padding: 15px;
       border-radius: 20px;
   }
`;

export const NewsFeedForm = () => (
 <Styles>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Write comment here.."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Share</Button>
    </InputGroup.Append>
  </InputGroup>
</Styles>  
    )