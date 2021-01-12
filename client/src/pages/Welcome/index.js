import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import backgroundVideo from './backgroundVideo.mp4';
import backgroundVideo from "./underwater.mp4";

const Welcome = () => {
    return (
        <>
            <Jumbotron className="jumbotron">
                <nav className="navbar">
                    <NavLink to="/login"  className="buttons" activeClassName="current">Log In</NavLink>
                    <NavLink to="/signup" className="buttons" activeClassName="current">Sign Up</NavLink>            
                </nav>
                {/* <video className="welcomeVideo" autostart="true" autoPlay src={backgroundVideo} type="video/mp4" /> */}
            </Jumbotron>
            <div className="quotationContainer">
                <h2 className="motivationalQuote">motivational quote here </h2>
            </div>
            
        </>
    );
}

export default Welcome;
