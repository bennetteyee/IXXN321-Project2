import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
   .title h1{
       font-size: 20px;
   }
`;

function Header(props){
    return(
        <div className= "title">
            <h1>{props.title}</h1>
            <div className= "context">
                <h2>{props.description}</h2>
            </div>
        </div>
    )
}

export default Header;