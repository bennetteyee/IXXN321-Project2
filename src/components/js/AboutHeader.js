import React, { Component } from 'react'
import  "../css/AboutHeader.css"; 
import Logo from "../../images/wfh_3.svg";


export default class AboutHeader extends Component {
    render() {
        return (
            <div className= "about">
                <h1>Share your bubble this lockdown.</h1>
                     <img src = {Logo}></img>
            </div>
        )
    }
}
