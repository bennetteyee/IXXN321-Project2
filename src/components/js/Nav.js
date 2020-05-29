import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Nav.css"; 

export default function Nav() {
    return (
        <div className="main-nav">
            <Link to="/" className={"nav-link"}><img src={require("../../images/my-bubble.png")} alt="Back to Home"/></Link>
            <Link to="/about" className={"nav-link"}>About</Link>
            <Link to="/tips" className={"nav-link"}>Tips</Link>
            <Link to="/community" className={"nav-link"}>Community</Link>   
        </div>
    )
}

