import React, { Component } from 'react';
import '../css/reset.css';
import '../css/index.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
        return (
            <div className="container">
            <nav className="header">
                <span className="logo"><FontAwesomeIcon icon="cloud-sun-rain"/> app-weather</span>
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Project</Link></li>
                </ul>
            </nav>
            <div className="banner">
                <h1>APP-WEATHER</h1>
                <h2>WEEKLY WEATHER</h2>
            </div>
        </div>        
        );        
    }
}



export default Header;