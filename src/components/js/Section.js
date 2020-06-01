import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Section (props) {
    return(
       
        <Container>
         <Row className="about-header">
          <Col sm={8}>
              <h3>{this.props.children}</h3>   
          </Col>
          <Col sm={4}>
          <img
            src= {props.imgsrc}
            width= "400"
            height= "400"
            />
          </Col>
         </Row>
    
        </Container>
    )
  
}

export default Section;