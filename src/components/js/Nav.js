import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Nav.css"; 

export default function Nav() {
    return (
        <div className="main-nav">
            <h3>Logo</h3>
            <Link to="/about" className={"nav-link"}>About</Link>
            <Link to="/tips" className={"nav-link"}>Tips</Link>
            <Link to="/community" className={"nav-link"}>Community</Link>   
        </div>
    )
}

