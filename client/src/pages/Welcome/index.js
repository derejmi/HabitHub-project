import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
const Welcome = () => {
    return (
        <>
            <Jumbotron>
                <nav className="navbar">
                    <NavLink to="/login" activeClassName="current">Log In</NavLink>
                    <NavLink to="/signin" activeClassName="current">Sign In</NavLink>            
                </nav>
                <p className="motivationalQuote">motivational quote</p>
            </Jumbotron>
        </>
    );
}

export default Welcome;
