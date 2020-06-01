import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import "./../css/Tips.css";
import {EmailForm} from "./../../components/js/EmailForm.js";
import{Layout} from "./../../components/js/Layout.js";

export default class Tips extends Component {
    render() {
      return (
      <Layout>
     <div className= "title">
        <h1>TIPS</h1>
            <div className= "context">
            <p>THIS IS WHERE YOU CAN FIND HELPFUL INFORMATION AND TIPS THIS LOCKDOWN:</p>
        </div>
    </div>
    <div className = "name">
        <h1>START YOUR DAY WITH A ROUTINE:</h1>
    </div>
    <div className= "info-container">
    <div clasName= "content">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
  

    </div>
        <Image src={require("../../images/wfh_5.svg")} className="photo1" rounded />      
    </div>

    <div className = "name">
        <h1>STAY IN TOUCH:</h1>
    </div>
    <div className= "info-container">
    <div clasName= "content">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        

    </div>
        <Image src={require("../../images/wfh_9.svg")} className="photo1" rounded />      
    </div>
    
       <EmailForm/>
       </Layout>
       
      )
    }
  }
