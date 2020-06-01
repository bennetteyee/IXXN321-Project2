import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const Header = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300&display=swap');

    .col{
        font-family: 'Overpass', sans-serif;
        text-align: center;
        font-size: 1.3rem;
        

    }
`;


export const AboutHeader = () => (
 <Header>
    <Container>
     <Row className="about-header">
      <Col sm={8}></Col>
          <h1>Share your bubble this lockdown</h1>   
      
      <Col sm={4}>
      <img
        src= {require("../../images/wfh_3.svg")}
        width= "400"
        height= "400"
        />
      </Col>
     </Row>

    </Container>

</Header>

)