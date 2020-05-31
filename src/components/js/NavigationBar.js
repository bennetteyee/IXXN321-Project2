import React, { Component } from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: white;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: black;

        &:hover{
            color: grey;
        }
    }
    
`;

export const NavigationBar = () => (
    <Styles>>
        <Navbar expand="lg">
            <Navbar.Brand href="/"> my bubble</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/tips">Tips</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/community">Community</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
