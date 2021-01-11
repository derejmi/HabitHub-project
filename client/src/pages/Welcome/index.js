import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import PageHeader from 'react-bootstrap';
// import './videoloader.js'
import backgroundVideo from './backgroundVideo.mp4';
const Welcome = () => {
    return (
        <>
            <Jumbotron className="jumbotron">
                <nav className="navbar">
                    <NavLink to="/login"  className="buttons" activeClassName="current">Log In</NavLink>
                    <NavLink to="/signup" className="buttons" activeClassName="current">Sign Up</NavLink>            
                </nav>
                <video controls autostart autoPlay src={backgroundVideo} type="video/mp4" />


            </Jumbotron>
            <div className="quotationContainer">
                <h2 className="motivationalQuote">motivational quote here </h2>
            </div>
            
        </>
    );
}

export default Welcome;
