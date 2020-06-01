import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import "./../css/Community.css";
import {EmailForm} from "./../../components/js/EmailForm.js";
import{Layout} from "./../../components/js/Layout.js";
import{NewsFeedForm} from "./../../components/js/NewsFeedForm.js";
import {Comment} from "./../../components/js/Comment.js";

export default class Community extends Component {
    render() {
      return (
      <Layout>
     <div className= "title">
        <h1>WELCOME</h1>
            <div className= "context">
            <p>SHARE WHAT YOU’VE BEEN DOING IN YOUR BUBBLE HERE:</p>
        </div>
     </div>
     <div></div>
        <br></br>
       <NewsFeedForm/>
       <Comment/>
       <br></br>
       <Comment/>
       <br></br>
       <Comment/>
       <br></br>
       <Comment/>
       <br></br>
       <EmailForm/>
       <br></br>
     </Layout>
       
      )
    }
}
