import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Logo from './habit_hub_hero.png';
import backgroundVideo from './underwater.mp4';


const Welcome = () => {
    return (
        <>

            <div className="jumbotron">
                <nav className="navbar">
                    <Link to="/login"  className="buttons" >Log In</Link>
                    <Link to="/signup" className="buttons" >Sign Up</Link>            
                </nav>
                <div className="mediaContentContainer">
                    <img className="welcomeLogo" src={Logo} />
                    <video className="welcomeVideo" autostart="true" autoPlay src={backgroundVideo} type="video/mp4" />
                </div>
            
        </div>
            <div className="quotationContainer">
                <h2 className="motivationalQuote">When someone says you can't do it ... <br/> do it twice and take pictures </h2>
            </div>
            
        </>
    );
}

export default Welcome;
