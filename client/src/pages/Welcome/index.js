import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import backgroundVideo from './backgroundVideo.mp4';
import backgroundVideo from './underwater.mp4';

const Welcome = () => {
    return (
        <>
            <Jumbotron className="jumbotron">
                <nav className="navbar">
                    <Link to="/login"  className="buttons" >Log In</Link>
                    <Link to="/signup" className="buttons" >Sign Up</Link>            
                </nav>
                <video className="welcomeVideo" autostart="true" autoPlay src={backgroundVideo} type="video/mp4" />
            </Jumbotron>
            <div className="quotationContainer">
                <h2 className="motivationalQuote">When someone says you can't do it ... <br/> do it twice and take pictures </h2>
            </div>
            
        </>
    );
}

export default Welcome;
