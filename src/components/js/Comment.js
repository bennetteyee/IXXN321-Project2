import React, { Component } from 'react'
import { Image} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
 .comment-container{
    background: #F4E6D8;
    padding: 15px;
    border-radius: 20px;
 }

  
`;

export const Comment = () => (
    <Styles>
    <div className= "comment-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
     </div>
   </Styles>

)