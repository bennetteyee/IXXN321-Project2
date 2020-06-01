import React, { Component } from 'react'
import { Container, Col, Image, Row} from 'react-bootstrap';
import "./../css/About.css";
import {EmailForm} from "./../../components/js/EmailForm.js";
import{Layout} from "./../../components/js/Layout.js";

export default class About extends Component {
  render() {
    return (
    <Layout>
     <div className= "section">
         <h3>Share your bubble during this lockdown</h3>
         <Image src={require("../../images/wfh_3.svg")} className="photo1" rounded />
     </div>
     <div className= "colour-section">
       <div className= "content">
       <p>My bubble aims provides a sense of community during this unprecedented <br></br>
       time of COVID-19. People can share their recent activites and tips during their lockdown. </p>
       </div> 
       <Image src={require("../../images/wfh_9.svg")} className="photo1" rounded />
    </div>
    <div className= "section">
         <h3>Find tips on how to stay productive during this lockdown.</h3>
         <Image src={require("../../images/wfh_5.svg")} className="photo1" rounded />
     </div>
     <EmailForm/>
     </Layout>
     
    )
  }
}