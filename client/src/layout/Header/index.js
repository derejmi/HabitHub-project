import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundVideo from "./layout/pages/Welcome/underwater.mp4";

import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <>
            <p className="header">Provisional Header</p> 
            <video className="welcomeVideo" autostart="true" autoPlay src={backgroundVideo} type="video/mp4"/> 
        </>      
    );
}

export default Header;
